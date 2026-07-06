import React from "react"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { getServerTenantBranding } from "@/lib/server-api-client"
import { hexToHslValues } from "@/contexts/tenant-context"
import TenantErrorPage from "@/components/shared/tenant-error"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  try {
    const tenant = await getServerTenantBranding();
    return {
      title: `${tenant.name} - Keep Moving Forward`,
      description: tenant.footerText || `${tenant.name} storefront`,
      icons: {
        icon: tenant.logoUrl || '/favicon.ico',
      }
    };
  } catch {
    return {
      title: 'Storefront Error',
    };
  }
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    let tenant;
    try {
        tenant = await getServerTenantBranding();
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : 'Unknown resolution error';
        return (
            <html lang="en">
                <body>
                    <TenantErrorPage error={errorMessage} />
                </body>
            </html>
        );
    }

    const primaryHsl = hexToHslValues(tenant.themePrimaryColor || '#ea580c');

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style dangerouslySetInnerHTML={{ __html: `
                    :root {
                        --primary: ${primaryHsl} !important;
                        --ring: ${primaryHsl} !important;
                    }
                `}} />
            </head>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div id="root" >
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}