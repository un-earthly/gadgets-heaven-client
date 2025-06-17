"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Package, Search, Truck, MapPin, Calendar } from 'lucide-react'
import PageWrapper from '@/components/shared/PageWrapper'

const trackingSteps = [
    { status: "Order Confirmed", date: "March 15, 2024", time: "10:30 AM", completed: true },
    { status: "Processing", date: "March 16, 2024", time: "2:45 PM", completed: true },
    { status: "Shipped", date: "March 17, 2024", time: "9:00 AM", completed: true },
    { status: "Out for Delivery", date: "March 18, 2024", time: "8:15 AM", completed: false },
    { status: "Delivered", date: "", time: "", completed: false }
]

export default function TrackOrderPage() {
    const [trackingNumber, setTrackingNumber] = useState("")

    return (
        <PageWrapper>
            <div className="py-12 space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Track Your Order</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Enter your tracking number to get real-time updates on your order status and location
                    </p>
                </div>

                {/* Tracking Search */}
                <Card className="max-w-2xl mx-auto">
                    <CardContent className="p-6">
                        <div className="flex gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Enter tracking number..."
                                    className="pl-8"
                                    value={trackingNumber}
                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                />
                            </div>
                            <Button>Track Order</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Order Info */}
                {trackingNumber && (
                    <>
                        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-sm font-medium">Estimated Delivery</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-semibold">March 18, 2024</span>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-sm font-medium">Shipping Method</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center gap-2">
                                    <Truck className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-semibold">Express Delivery</span>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-sm font-medium">Delivery Location</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-semibold">New York, NY</span>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Tracking Timeline */}
                        <Card className="max-w-4xl mx-auto">
                            <CardHeader>
                                <CardTitle>Tracking Timeline</CardTitle>
                                <CardDescription>Real-time updates of your order</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    {trackingSteps.map((step, index) => (
                                        <div key={index} className="flex gap-4 pb-8 last:pb-0">
                                            <div className="flex flex-col items-center">
                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                          ${step.completed ? 'bg-green-100 border-green-500 text-green-500' : 'border-gray-300'}`}>
                                                    <Package className="h-4 w-4" />
                                                </div>
                                                {index !== trackingSteps.length - 1 && (
                                                    <div className={`w-0.5 h-full mt-2 
                            ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
                                                )}
                                            </div>
                                            <div className="flex-1 pb-8 last:pb-0">
                                                <p className="font-medium">{step.status}</p>
                                                {step.date && (
                                                    <p className="text-sm text-muted-foreground">
                                                        {step.date} at {step.time}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </>
                )}
            </div>
        </PageWrapper>
    )
} 