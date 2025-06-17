"use client"

import { serviceCategories } from "@/data"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ArrowRight, Shield, CheckCircle, Users } from "lucide-react"
import PageWrapper from "@/components/shared/PageWrapper"
import Link from "next/link"

export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
    // Find the service and its category
    let selectedService = null;
    let serviceCategory = null;

    for (const category of serviceCategories) {
        const service = category.services.find(s => s.id === parseInt(params.id));
        if (service) {
            selectedService = service;
            serviceCategory = category;
            break;
        }
    }

    if (!selectedService || !serviceCategory) {
        notFound()
    }

    return (
        <PageWrapper>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service Info */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <Badge variant="secondary" className="mb-2">
                                {serviceCategory.name}
                            </Badge>
                            <h1 className="text-3xl font-bold mb-2">{selectedService.name}</h1>
                            <p className="text-muted-foreground">{selectedService.description}</p>
                        </div>

                        <Tabs defaultValue="details">
                            <TabsList>
                                <TabsTrigger value="details">Service Details</TabsTrigger>
                                <TabsTrigger value="process">Process</TabsTrigger>
                                <TabsTrigger value="faq">FAQ</TabsTrigger>
                            </TabsList>
                            <TabsContent value="details" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm font-medium">Duration</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span>{selectedService.duration}</span>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm font-medium">Warranty</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex items-center gap-2">
                                            <Shield className="h-4 w-4 text-muted-foreground" />
                                            <span>90-day service warranty</span>
                                        </CardContent>
                                    </Card>
                                </div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>What's Included</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                Professional service by certified technicians
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                Genuine parts and quality materials
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                Post-service testing and quality check
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                90-day service warranty
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="process" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Service Process</CardTitle>
                                        <CardDescription>How we handle your service request</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                                                    1
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">Book Appointment</h4>
                                                    <p className="text-sm text-muted-foreground">Choose your preferred date and time</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                                                    2
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">Diagnostic</h4>
                                                    <p className="text-sm text-muted-foreground">Our technicians assess your device</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                                                    3
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">Service</h4>
                                                    <p className="text-sm text-muted-foreground">Professional repair or maintenance work</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                                                    4
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">Quality Check</h4>
                                                    <p className="text-sm text-muted-foreground">Thorough testing before delivery</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="faq" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Frequently Asked Questions</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <h4 className="font-medium">How long does the service take?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                The typical duration is {selectedService.duration}, but may vary based on complexity.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">What if I need to reschedule?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                You can reschedule up to 24 hours before your appointment at no cost.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">Is there a warranty?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Yes, all our services come with a 90-day warranty.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Booking Card */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Book This Service</CardTitle>
                                <CardDescription>Schedule your appointment</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400">
                                    {selectedService.price}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    <span>Expert certified technicians</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>{selectedService.duration}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600" asChild>
                                    <Link href={`/dashboard/user/services/modify?service=${selectedService.id}`}>
                                        Book Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
} 