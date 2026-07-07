# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
# figcoms-ecom-engine — client (Next.js 15) image
# Multi-stage build producing Next's standalone output for a lean runtime.
#
# IMPORTANT: NEXT_PUBLIC_* vars are inlined into the browser bundle at BUILD
# time, so NEXT_PUBLIC_API_URL must be passed as a build arg and must point at
# a URL the end user's BROWSER can reach (e.g. http://localhost:3000/api/v1).
# Server-side rendering uses the runtime INTERNAL_API_URL instead (the
# Docker-network address of the server, e.g. http://server:3000/api/v1).
# ---------------------------------------------------------------------------

# ---- Stage 1: dependencies ----------------------------------------------
FROM node:22-bookworm AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# ---- Stage 2: build ------------------------------------------------------
FROM node:22-bookworm AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Public API URL baked into the client bundle (browser-facing).
ARG NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---- Stage 3: production runtime ----------------------------------------
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl \
  && rm -rf /var/lib/apt/lists/*

# Standalone server bundle + static assets + public files.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
