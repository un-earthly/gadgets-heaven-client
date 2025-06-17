"use client"

import PageHeader from '@/components/shared/PageHeader'
import PageWrapper from '@/components/shared/PageWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Star, ThumbsUp, MessageCircle, Filter, User, CheckCircle } from 'lucide-react'
import Image from 'next/image'

// Mock reviews data - replace with actual data from your backend
const reviews = [
    {
        id: 1,
        customerName: "Emily Chen",
        customerImage: "/women.jpg",
        productName: "Sony WH-1000XM4",
        productImage: "/smart-watch.png",
        productType: "Product",
        rating: 5,
        review: "These headphones are absolutely amazing! The noise cancellation is top-notch, and the sound quality is incredible. Battery life exceeds expectations, lasting well over 30 hours. The companion app offers great customization options.",
        purchaseDate: "2024-03-15",
        verifiedPurchase: true,
        helpfulVotes: 24,
        category: "Audio",
        price: 349.99
    },
    {
        id: 2,
        customerName: "James Wilson",
        customerImage: "/men.jpg",
        productName: "iPhone Screen Repair",
        productImage: "/smart-watch.png",
        productType: "Service",
        rating: 4,
        review: "Quick and professional service. My iPhone screen was replaced within 2 hours. The technician was knowledgeable and explained the process. Only giving 4 stars because the price was a bit high, but the quality is undeniable.",
        purchaseDate: "2024-03-10",
        verifiedPurchase: true,
        helpfulVotes: 12,
        category: "Repair Services",
        price: 199.99
    },
    {
        id: 3,
        customerName: "Sarah Miller",
        customerImage: "/women.jpg",
        productName: "MacBook Pro M3",
        productImage: "/smart-watch.png",
        productType: "Product",
        rating: 5,
        review: "The M3 MacBook Pro is a powerhouse! As a video editor, the performance is mind-blowing. Projects that used to take hours now render in minutes. The display is gorgeous, and the battery life is exceptional.",
        purchaseDate: "2024-03-08",
        verifiedPurchase: true,
        helpfulVotes: 18,
        category: "Laptops",
        price: 1999.99
    }
]

const ReviewPage = () => {
    return (
        <PageWrapper>
            <PageHeader
                badge="Reviews"
                title="Client Reviews"
                description="What our clients say about our products and services"
            />

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-4 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,845</div>
                        <p className="text-xs text-muted-foreground">From verified purchases</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                        <Star className="h-4 w-4 text-yellow-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.8</div>
                        <p className="text-xs text-green-600">+0.2 this month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Verified Reviews</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94%</div>
                        <p className="text-xs text-muted-foreground">Verified purchases</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Helpful Votes</CardTitle>
                        <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12.4k</div>
                        <p className="text-xs text-green-600">+856 this month</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center mb-6">
                <div className="relative flex-1">
                    <Input placeholder="Search reviews..." />
                </div>
                <Select defaultValue="recent">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="rating-high">Highest Rating</SelectItem>
                        <SelectItem value="rating-low">Lowest Rating</SelectItem>
                        <SelectItem value="helpful">Most Helpful</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 gap-6">
                {reviews.map((review) => (
                    <Card key={review.id} className="overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex gap-6">
                                {/* Product Image */}
                                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Image
                                        src={review.productImage}
                                        alt={review.productName}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Review Content */}
                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{review.productName}</h3>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">{review.category}</Badge>
                                                <Badge variant="outline">{review.productType}</Badge>
                                                {review.verifiedPurchase && (
                                                    <Badge variant="outline" className="text-green-600">
                                                        Verified Purchase
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-semibold text-orange-500">
                                                ${review.price}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Purchased {review.purchaseDate}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rating and Review */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-600">{review.review}</p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-2">
                                                <div className="relative h-8 w-8">
                                                    {review.customerImage ? (
                                                        <Image
                                                            src={review.customerImage}
                                                            alt={review.customerName}
                                                            fill
                                                            className="rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                            <User className="h-4 w-4 text-gray-500" />
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="font-medium">{review.customerName}</span>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <ThumbsUp className="h-4 w-4 mr-2" />
                                            {review.helpfulVotes} Helpful
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PageWrapper>
    )
}

export default ReviewPage