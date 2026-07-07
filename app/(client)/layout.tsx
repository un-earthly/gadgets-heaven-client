import React from "react"
import BackgroundGradient from "@/components/shared/BackgroundGradient"
import Header from "@/components/shared/header"
import FloatingButtons from "@/components/shared/FloatingButtons"
import Footer from "@/components/shared/Footer"
import { ComparisonProvider } from "@/contexts/comparison-context"
import { getServerTenantBranding } from "@/lib/server-api-client"
import { TenantProvider } from "@/contexts/tenant-context"

// Storefront branding is resolved per-request from the host header, so this
// segment (and everything nested under it) must render dynamically rather than
// be statically prerendered at build time.
export const dynamic = "force-dynamic"

export default async function StorefrontLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const tenant = await getServerTenantBranding();

    return (
        <TenantProvider tenant={tenant}>
            <ComparisonProvider>
                <div >
                    <div className="min-h-screen relative">
                        <BackgroundGradient />
                        <Header />
                        {children}
                        <Footer />
                        <FloatingButtons />
                    </div>
                </div>
            </ComparisonProvider>
        </TenantProvider>
    )
}