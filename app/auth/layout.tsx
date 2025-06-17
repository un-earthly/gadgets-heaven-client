"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import BackgroundGradient from "@/components/shared/BackgroundGradient"
import { useTheme } from "next-themes"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const { theme } = useTheme()
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        if (theme === "system") {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setResolvedTheme(systemPrefersDark ? "dark" : "light")
        } else {
            setResolvedTheme(theme as "light" | "dark")
        }
    }, [theme])
    return (
        <div className="min-h-screen relative">
            <BackgroundGradient />

            {/* Minimal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
                <div className="container mx-auto flex h-16 items-center justify-between">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={resolvedTheme === "light" ? "/logo-text-dark.png" : "/logo-beige.png"}
                            height={100}
                            width={120}
                            alt="logo"
                        />
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link
                            href="/auth/login"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/auth/sign-up"
                            className="text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                        >
                            Create account
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <PageWrapper className="flex items-center justify-center min-h-screen pt-16">
                <div className="flex w-full container items-center gap-8">
                    {children}
                    <div className="flex-1 hidden lg:block">
                        <Image
                            src="/auth.png"
                            alt="Authentication"
                            width={600}
                            height={600}
                            priority
                            className="rounded-2xl mx-auto"
                        />
                    </div>
                </div>
            </PageWrapper>
        </div>
    )
} 