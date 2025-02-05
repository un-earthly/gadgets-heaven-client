"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "../ui/button"

const reviews = [
    {
        name: "Emily Chen",
        role: "Tech Enthusiast",
        rating: 5,
        text: "The best tech store I've ever shopped at. Their customer service is exceptional!",
        date: "January 2025"
    },
    {
        name: "Sarah Smith",
        role: "Professional Photographer",
        rating: 5,
        text: "Outstanding selection of camera gear and exceptional technical support. Their expertise helped me choose the perfect equipment for my studio.",
        date: "December 2024"
    },
]

const ClientReviews = () => {
    const [currentReview, setCurrentReview] = useState(0)

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <span className="text-orange-500 font-medium">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover why thousands of tech enthusiasts trust Gadgets Heaven for their technology needs
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 text-orange-400/20">
                            <Quote size={60} />
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {reviews[currentReview].name}
                                        </h3>
                                        <p className="text-orange-500">
                                            {reviews[currentReview]?.role}
                                        </p>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 text-orange-400 fill-current"
                                                strokeWidth={0}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    &quot;{reviews[currentReview].text}&quot;
                                </p>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-sm text-gray-500">
                                        {reviews[currentReview].date}
                                    </span>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={prevReview}
                                            className="hover:bg-orange-50 border-orange-200"
                                        >
                                            <ChevronLeft className="h-4 w-4 text-orange-500" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={nextReview}
                                            className="hover:bg-orange-50 border-orange-200"
                                        >
                                            <ChevronRight className="h-4 w-4 text-orange-500" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="link"
                            className="text-orange-500 hover:text-orange-600"
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

