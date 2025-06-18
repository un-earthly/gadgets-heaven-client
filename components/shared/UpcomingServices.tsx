"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Calendar, Star } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { upcomingServices } from "@/data"
import { DimmedButtonWithArrow } from "./DimmedButton"

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
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990020,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_50%,#ff990008,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50020,transparent)] dark:bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50008,transparent)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 
                        dark:bg-orange-950/50 text-orange-600 dark:text-orange-300 
                        rounded-full text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Coming Soon
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Upcoming Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover our latest innovations and upcoming tech solutions
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation buttons - visible on desktop only */}
                    {isLeftVisible && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 
                                bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm
                                border-orange-200/20 dark:border-orange-800/20 
                                hover:bg-orange-50 dark:hover:bg-orange-950/50 
                                text-orange-500 dark:text-orange-400
                                shadow-lg shadow-orange-500/10
                                hidden md:flex"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}

                    {/* Scrollable container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-6 scroll-smooth 
                            snap-x snap-mandatory touch-pan-x scrollbar-hide
                            -mx-4 px-4 md:-mx-6 md:px-6" // Added padding compensation
                        onScroll={updateScrollButtons}
                    >
                        {upcomingServices.map((service, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden flex-none w-[85vw] sm:w-[45vw] 
                                    md:w-[30vw] lg:w-80 snap-start border-0 
                                    bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                                    hover:shadow-xl hover:shadow-orange-500/10 
                                    transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 
                                    bg-gradient-to-br from-orange-400/10 to-orange-500/10 
                                    dark:from-orange-600/5 dark:to-orange-700/5 
                                    rounded-full opacity-50 transition-transform duration-500" />

                                <CardHeader className="text-center relative space-y-4">
                                    <Badge variant="secondary"
                                        className="absolute right-0 top-0 bg-orange-100/50 
                                            dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 
                                            border-orange-200/20 dark:border-orange-800/20"
                                    >
                                        {service.status}
                                    </Badge>
                                    <div className="relative mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 
                                            to-orange-600/20 dark:from-orange-600/10 dark:to-orange-700/10 
                                            rounded-full blur-xl transition-opacity" />
                                        <div className="relative h-20 w-20 rounded-full bg-orange-100 
                                            dark:bg-orange-900/50 mx-auto flex items-center justify-center 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-4xl">{service.icon}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 
                                        group-hover:text-orange-500 dark:group-hover:text-orange-400 
                                        transition-colors">
                                        {service.title}
                                    </h3>
                                </CardHeader>

                                <CardContent className="text-center space-y-4">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center justify-center gap-4 text-sm">
                                        <span className="inline-flex items-center text-orange-500 dark:text-orange-400">
                                            <Clock className="h-4 w-4 mr-1.5 opacity-75" />
                                            {service.stats}
                                        </span>
                                        <span className="inline-flex items-center text-orange-500 dark:text-orange-400">
                                            <Calendar className="h-4 w-4 mr-1.5 opacity-75" />
                                            {service.availableFrom}
                                        </span>
                                    </div>
                                </CardContent>

                                <CardFooter className="justify-center pt-2">
                                    <Link href={service.link || "#"}>
                                        <DimmedButtonWithArrow>
                                            {service.buttonText}
                                        </DimmedButtonWithArrow>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {isRightVisible && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 
                                bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm
                                border-orange-200/20 dark:border-orange-800/20 
                                hover:bg-orange-50 dark:hover:bg-orange-950/50 
                                text-orange-500 dark:text-orange-400
                                shadow-lg shadow-orange-500/10
                                hidden md:flex"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}

                    {/* Mobile scroll indicators */}
                    <div className="flex justify-center gap-1.5 mt-6 md:hidden">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 
                                    ${i === 0 ? 'w-6 bg-orange-500' : 'w-1.5 bg-orange-200/50 dark:bg-orange-800/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpcomingServices