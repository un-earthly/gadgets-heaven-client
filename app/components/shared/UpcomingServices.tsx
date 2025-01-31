"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const upcomingServices = [
    { title: "AI-Powered Tech Support", icon: "🤖", description: "Get instant help with our new AI assistant." },
    { title: "VR Setup Workshop", icon: "🥽", description: "Learn how to set up and optimize your VR system." },
    { title: "Smart Home Integration", icon: "🏠", description: "Connect all your smart devices seamlessly." },
    { title: "Tech Recycling Program", icon: "♻️", description: "Responsibly dispose of your old gadgets." },
    { title: "Custom PC Building", icon: "🖥️", description: "Design and build your dream gaming rig." },
]

const UpcomingServices = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth
            current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Upcoming Services</h2>
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        onClick={() => scroll("left")}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div ref={scrollRef} className="flex overflow-x-auto space-x-6 scrollbar-hide">
                        {upcomingServices.map((service, index) => (
                            <div key={index} className="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                        onClick={() => scroll("right")}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default UpcomingServices

