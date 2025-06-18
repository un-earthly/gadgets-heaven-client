'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen relative">
            {/* Background gradient similar to other pages */}
            <div className="absolute inset-0 -z-10">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

                {/* Top-left gradient blob */}
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-orange-200/20 via-transparent to-transparent dark:from-orange-900/10 rounded-full blur-3xl" />

                {/* Bottom-right gradient blob */}
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-orange-100/30 via-transparent to-transparent dark:from-orange-800/10 rounded-full blur-3xl" />

                {/* Radial gradients for extra effect */}
                <div className="absolute inset-0 opacity-30 dark:opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ff990020,transparent)]" />
                    <div className="absolute inset-y-0 right-0 bg-[radial-gradient(circle_500px_at_80%_600px,#ffa50020,transparent)]" />
                </div>

                {/* Mesh overlay */}
                <div className="absolute inset-0 opacity-10 dark:opacity-5 mix-blend-multiply">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff990030" />
                                <stop offset="50%" stopColor="#ffa50020" />
                                <stop offset="100%" stopColor="#ffb73030" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#meshGradient)" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="text-center space-y-8">
                    {/* 404 Text */}
                    <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        404
                    </h1>

                    {/* Message */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                            Page Not Found
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                            Oops! The page you&apos;re looking for seems to have vanished into the digital void.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="default"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                            asChild
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </div>

                    {/* Decorative footer splash */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_800px_at_50%_100%,#ff990015,transparent)]" />
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_800px_at_80%_100%,#ffa50015,transparent)]" />
                    </div>
                </div>
            </div>
        </div>
    )
} 