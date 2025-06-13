"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const reviews = [
    {
        name: "Emily Chen",
        role: "Tech Enthusiast",
        rating: 5,
        text: "The best tech store I've ever shopped at. Their customer service is exceptional!",
        date: "January 2025",
        image: "https://randomuser.me/api/portraits/men/96.jpg"
    },
    {
        name: "Sarah Smith",
        role: "Professional Photographer",
        rating: 5,
        text: "Outstanding selection of camera gear and exceptional technical support. Their expertise helped me choose the perfect equipment for my studio.",
        date: "December 2024",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
    },]

const ClientReviews = () => {
    const [currentReview, setCurrentReview] = useState(0)

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990010,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50010,transparent)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 
                        dark:bg-orange-950/50 text-orange-600 dark:text-orange-300 
                        rounded-full text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Client Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover why thousands of tech enthusiasts trust Gadgets Heaven for their technology needs
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Decorative quotes */}
                        <div className="absolute -top-4 -left-4 text-orange-400/20 dark:text-orange-600/20">
                            <Quote size={60} />
                        </div>
                        <div className="absolute -bottom-4 -right-4 text-orange-400/20 dark:text-orange-600/20 rotate-180">
                            <Quote size={60} />
                        </div>

                        <motion.div
                            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl 
                                shadow-lg dark:shadow-orange-900/10 p-8 md:p-10 border border-orange-100/20 
                                dark:border-orange-900/20"
                        >
                            <div className="h-[200px] relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentReview}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6 absolute inset-0"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                {reviews[currentReview].image ? (
                                                    <Image
                                                        src={reviews[currentReview].image}
                                                        alt={reviews[currentReview].name}
                                                        width={64}
                                                        height={64}
                                                        className="w-16 h-16 rounded-full object-cover border-2 
                                                            border-orange-200 dark:border-orange-800"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-16 rounded-full bg-orange-100 
                                                        dark:bg-orange-900/50 flex items-center justify-center">
                                                        <User className="w-8 h-8 text-orange-500 dark:text-orange-400" />
                                                    </div>
                                                )}
                                                <div className="absolute -bottom-2 -right-2 bg-orange-100 
                                                    dark:bg-orange-900/50 rounded-full p-1">
                                                    <Star className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                    {reviews[currentReview].name}
                                                </h3>
                                                <p className="text-orange-500 dark:text-orange-400">
                                                    {reviews[currentReview].role}
                                                </p>
                                            </div>
                                        </div>

                                        <blockquote className="text-gray-600 dark:text-gray-300 text-lg 
                                            leading-relaxed italic">
                                            &quot;{reviews[currentReview].text}&quot;
                                        </blockquote>

                                        <div className="flex justify-between items-center pt-6 
                                            border-t border-orange-100/20 dark:border-orange-900/20">
                                            <div className="flex gap-1">
                                                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-5 w-5 text-orange-400 dark:text-orange-500 fill-current"
                                                        strokeWidth={0}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {reviews[currentReview].date}
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation buttons */}
                            <div className="flex justify-center gap-2 mt-6 border-t 
                                border-orange-100/20 dark:border-orange-900/20 pt-6">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={prevReview}
                                    className="hover:bg-orange-50 dark:hover:bg-orange-950/50 
                                        border-orange-200 dark:border-orange-800 
                                        text-orange-500 dark:text-orange-400"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={nextReview}
                                    className="hover:bg-orange-50 dark:hover:bg-orange-950/50 
                                        border-orange-200 dark:border-orange-800 
                                        text-orange-500 dark:text-orange-400"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="link"
                            className="text-orange-500 hover:text-orange-600 dark:text-orange-400 
                                dark:hover:text-orange-300"
                        >
                            Read more reviews →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientReviews

