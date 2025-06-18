"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { Mail, Send, Bell, Star } from "lucide-react"
import HighlightButton from "./HighlightButton"

const Newsletter = () => {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log("Signing up with email:", email)
        setEmail("")
        setIsSubmitting(false)
    }

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990010,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50010,transparent)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 
                            dark:bg-orange-950/50 text-orange-600 dark:text-orange-300 
                            rounded-full text-sm font-medium">
                            <Star className="w-4 h-4" />
                            Stay Connected
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                            dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                            Get Early Access to Exclusive Deals
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Subscribe to our newsletter and be the first to know about new gadget launches,
                            special offers, and tech tips.
                        </p>
                    </div>

                    {/* Subscribe Form */}
                    <div className="max-w-md mx-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 
                            dark:from-orange-600 dark:to-orange-700 blur-xl opacity-20" />
                        <form onSubmit={handleSubmit}
                            className="relative flex flex-col sm:flex-row gap-3 p-1 
                                bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                                rounded-lg border border-orange-200/20 dark:border-orange-800/20">
                            <div className="relative flex-grow">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 
                                    h-4 w-4 text-orange-500 dark:text-orange-400" />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 bg-transparent border-0 focus-visible:ring-1 
                                        focus-visible:ring-orange-500 dark:focus-visible:ring-orange-400 
                                        placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                    required
                                />
                            </div>
                            <HighlightButton isDisabled={isSubmitting}>

                                <Send className="mr-2 h-4 w-4" />
                                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                            </HighlightButton>
                        </form>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 
                        dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <Bell className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                            <span>Early access to deals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                            <span>Exclusive offers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                            <span>Unsubscribe anytime</span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Join 10,000+ tech enthusiasts getting the best deals first
                    </p>
                </div>
            </div>
            <Separator className="bg-orange-200/20 dark:bg-orange-800/20 container mx-auto mt-16" />
        </section>
    )
}

export default Newsletter

