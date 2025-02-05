"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Calendar, Star, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"

const upcomingServices = [
    {
        title: "AI-Powered Tech Support",
        icon: "🤖",
        description: "Get instant help with our new AI assistant.",
        status: "Coming Soon",
        availableFrom: "March 2025",
        stats: "24/7 Support",
        buttonText: "Join Waitlist"
    },
    {
        title: "VR Setup Workshop",
        icon: "🥽",
        description: "Learn how to set up and optimize your VR system.",
        status: "Registration Open",
        availableFrom: "April 2025",
        stats: "2 Hour Session",
        buttonText: "Register Now"
    },
    {
        title: "Smart Home Integration",
        icon: "🏠",
        description: "Connect all your smart devices seamlessly.",
        status: "Beta Testing",
        availableFrom: "May 2025",
        stats: "Full Setup",
        buttonText: "Learn More"
    },
    {
        title: "Tech Recycling Program",
        icon: "♻️",
        description: "Responsibly dispose of your old gadgets.",
        status: "Coming Soon",
        availableFrom: "June 2025",
        stats: "Free Service",
        buttonText: "Get Notified"
    },
    {
        title: "Custom PC Building",
        icon: "🖥️",
        description: "Design and build your dream gaming rig.",
        status: "Waitlist Open",
        availableFrom: "July 2025",
        stats: "Premium Service",
        buttonText: "Join Waitlist"
    },
]

const UpcomingServices = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isLeftVisible, setIsLeftVisible] = useState(false)
    const [isRightVisible, setIsRightVisible] = useState(true)

    const updateScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setIsLeftVisible(scrollLeft > 0)
            setIsRightVisible(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2
            current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-orange-500 font-medium">Coming Soon</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Upcoming Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our latest innovations and upcoming tech solutions designed to enhance your digital experience
                    </p>
                </div>

                <div className="relative">
                    {isLeftVisible && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth"
                        onScroll={updateScrollButtons}
                    >
                        {upcomingServices.map((service, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-white flex-none w-80"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-orange-100 rounded-full opacity-50 transition-transform group-hover:scale-150 duration-500" />

                                <CardHeader className="text-center relative">
                                    <div className="rounded-full bg-orange-100 w-20 h-20 mx-auto flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                                        <span className="text-4xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </CardHeader>

                                <CardContent className="text-center relative space-y-4">
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center justify-center space-x-4 text-sm">
                                        <span className="flex items-center text-orange-500">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {service.stats}
                                        </span>
                                        <span className="flex items-center text-orange-500">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {service.availableFrom}
                                        </span>
                                    </div>
                                </CardContent>

                                <CardFooter className="justify-center relative">
                                    <Button
                                        className="bg-orange-500 hover:bg-orange-600 text-white group-hover:pl-6 group-hover:pr-4 transition-all"
                                    >
                                        {service.buttonText}
                                        <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {isRightVisible && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">
                        Want to learn more about our upcoming services?
                    </p>
                    <Button
                        variant="outline"
                        className="hover:bg-orange-50 hover:text-orange-600"
                    >
                        Subscribe to Updates
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default UpcomingServices