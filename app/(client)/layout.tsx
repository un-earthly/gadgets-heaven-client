import React from "react"
import BackgroundGradient from "@/components/shared/BackgroundGradient"
import Header from "@/components/shared/header"
import FloatingButtons from "@/components/shared/FloatingButtons"
import Footer from "@/components/shared/Footer"
import { ComparisonProvider } from "@/contexts/comparison-context"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
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
    )
}