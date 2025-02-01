"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const Newsletter = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Signing up with email:", email)
        setEmail("")
    }

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <span className="text-orange-400 font-medium">Stay Connected</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
                            Get Early Access to Exclusive Deals
                        </h2>
                        <p className="text-gray-400 ">
                            Subscribe to our newsletter and be the first to know about new gadget launches, special offers, and tech tips.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-orange-950/50 border-orange-800/50 text-white placeholder:text-orange-200/50 focus:border-orange-500"
                            />
                            <Button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-medium whitespace-nowrap"
                            >
                                Subscribe Now
                            </Button>
                        </form>
                    </div>

                    <p className="text-gray-400 text-sm">
                        Join 10,000+ tech enthusiasts. Unsubscribe anytime.
                    </p>
                </div>
            </div>
            <Separator className="bg-orange-400 container mx-auto mt-4" />
        </div>
    )
}

export default Newsletter

