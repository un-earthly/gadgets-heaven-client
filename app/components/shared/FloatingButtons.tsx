"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isChatOpen, setIsChatOpen] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="bg-orange-500 text-white hover:bg-orange-600"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="bg-orange-500 text-white hover:bg-orange-600"
                    >
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
            )}
            {isChatOpen && (
                <div className="fixed bottom-20 right-4 z-50 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="font-semibold">Chat with us</h3>
                        <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto">
                        {/* Chat messages would go here */}
                        <p className="text-gray-500">Welcome to Gadgets Heaven! How can we help you today?</p>
                    </div>
                    <div className="p-4 border-t">
                        <input type="text" placeholder="Type your message..." className="w-full p-2 border rounded" />
                    </div>
                </div>
            )}
        </>
    )
}

export default FloatingButtons

