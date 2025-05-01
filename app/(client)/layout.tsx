import React from "react"
import BackgroundGradient from "@/components/shared/BackgroundGradient"
import Header from "@/components/shared/header"
import FloatingButtons from "@/components/shared/FloatingButtons"
import Footer from "@/components/shared/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div >
            <div className="min-h-screen relative">
                <BackgroundGradient />
                <div className="sticky z-50 backdrop-blur-xl top-0">
                    <Header />
                </div>
                {children}
                <Footer />
                <FloatingButtons />
            </div>
        </div>
    )
}