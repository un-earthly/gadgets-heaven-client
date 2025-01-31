"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
    { name: "John Doe", rating: 5, text: "Great service and products! Will definitely shop here again." },
    { name: "Jane Smith", rating: 4, text: "Good selection of gadgets. The staff was very helpful." },
    { name: "Mike Johnson", rating: 5, text: "Excellent customer support. They went above and beyond." },
    { name: "Sarah Williams", rating: 4, text: "Fast shipping and good prices. Very satisfied with my purchase." },
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
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">{reviews[currentReview].name}</h3>
                            <div className="flex">
                                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">{reviews[currentReview].text}</p>
                        <div className="flex justify-between items-center">
                            <Button variant="outline" size="icon" onClick={prevReview}>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={nextReview}>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Button variant="link">Read more reviews</Button>
                </div>
            </div>
        </section>
    )
}

export default ClientReviews

