"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, X, Send } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"

const FloatingButtons = () => {
    const [isScrollVisible, setIsScrollVisible] = useState(false)
    const [isChatOpen, setIsChatOpen] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsScrollVisible(true)
            } else {
                setIsScrollVisible(false)
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
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                {isScrollVisible && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className={cn(
                            "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm",
                            "border-orange-200 dark:border-orange-800",
                            "text-orange-500 dark:text-orange-400",
                            "hover:bg-orange-50 dark:hover:bg-orange-950/50",
                            "hover:text-orange-600 dark:hover:text-orange-300",
                            "shadow-lg shadow-orange-500/10",
                            "transition-all duration-300"
                        )}
                    >
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                )}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className={cn(
                        "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm",
                        "border-orange-200 dark:border-orange-800",
                        "text-orange-500 dark:text-orange-400",
                        "hover:bg-orange-50 dark:hover:bg-orange-950/50",
                        "hover:text-orange-600 dark:hover:text-orange-300",
                        "shadow-lg shadow-orange-500/10",
                        "transition-all duration-300"
                    )}
                >
                    <MessageCircle className="h-4 w-4" />
                </Button>
            </div>
            {isChatOpen && (
                <div className={cn(
                    "fixed z-50 bg-white/50 dark:bg-zinc-900/50",
                    "backdrop-blur-sm shadow-lg shadow-orange-500/10",
                    "border border-orange-200/20 dark:border-orange-800/20",
                    "flex flex-col transition-all duration-300",
                    // Mobile-first responsive design
                    "inset-4 md:inset-auto",
                    "md:bottom-20 md:right-4",
                    "md:w-80 md:rounded-lg"
                )}>
                    <div className="flex justify-between items-center p-4 
                        border-b border-orange-200/20 dark:border-orange-800/20">
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                            Chat with us
                        </h3>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsChatOpen(false)}
                            className="text-zinc-600 dark:text-zinc-400 
                                hover:text-orange-500 dark:hover:text-orange-400"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[60vh] md:max-h-[400px]">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 
                            bg-orange-100 dark:bg-orange-950/50 
                            text-orange-600 dark:text-orange-300 
                            rounded-full text-sm font-medium self-start">
                            <MessageCircle className="w-4 h-4" />
                            Welcome to Gadgets Heaven!
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            How can we help you today?
                        </p>
                    </div>
                    <div className="p-4 border-t border-orange-200/20 dark:border-orange-800/20">
                        <form className="flex gap-2">
                            <Input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 bg-white/50 dark:bg-zinc-800/50 
                                    border-orange-200/20 dark:border-orange-800/20"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-orange-500 hover:bg-orange-600 
                                    dark:bg-orange-600 dark:hover:bg-orange-700"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default FloatingButtons

