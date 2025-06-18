"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { serviceCategories } from "@/data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Clock } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import PageWrapper from "@/components/shared/PageWrapper"

function ModifyServiceContent() {
    const searchParams = useSearchParams()
    const serviceId = searchParams.get("service")
    const [date, setDate] = useState<Date>()
    const [isLoading, setIsLoading] = useState(false)

    // Find the selected service
    let selectedService = null;
    let serviceCategory = null;

    for (const category of serviceCategories) {
        const service = category.services.find(s => s.id === Number(serviceId));
        if (service) {
            selectedService = service;
            serviceCategory = category;
            break;
        }
    }

    if (!selectedService || !serviceCategory) {
        return (
            <PageWrapper>
                <div className="text-center py-12">
                    <h2 className="text-2xl font-bold mb-2">Service Not Found</h2>
                    <p className="text-muted-foreground">The requested service could not be found.</p>
                </div>
            </PageWrapper>
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Handle booking submission logic here
        setTimeout(() => setIsLoading(false), 1000)
    }

    return (
        <PageWrapper>
            <PageHeader
                badge={serviceCategory.name}
                title="Book Service"
                description="Schedule your service appointment"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service Details */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Service Details</CardTitle>
                        <CardDescription>Review and confirm your service details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">{selectedService.name}</h3>
                                <p className="text-muted-foreground">{selectedService.description}</p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Date</label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left font-normal"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Time</label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                                            <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                                            <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Additional Notes</label>
                                <Textarea
                                    placeholder="Any specific requirements or issues we should know about?"
                                    className="min-h-[100px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Contact Number</label>
                                <Input type="tel" placeholder="Your phone number" />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600"
                                disabled={isLoading}
                            >
                                {isLoading ? "Processing..." : "Confirm Booking"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Summary Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-muted-foreground">Service</span>
                            <span className="font-medium">{selectedService.name}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-muted-foreground">Duration</span>
                            <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{selectedService.duration}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-muted-foreground">Price</span>
                            <span className="text-xl font-bold text-orange-500">{selectedService.price}</span>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-orange-50 dark:bg-orange-950/50">
                        <div className="text-sm text-muted-foreground w-full">
                            <p className="font-medium text-foreground mb-1">What&apos;s included:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Professional service by certified technicians</li>
                                <li>90-day service warranty</li>
                                <li>Free consultation and diagnosis</li>
                            </ul>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </PageWrapper>
    )
}

export default function ModifyServicePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ModifyServiceContent />
        </Suspense>
    )
} 