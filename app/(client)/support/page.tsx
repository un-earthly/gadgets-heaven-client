"use client"

import { supportOptions, upcomingServices } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, HeadphonesIcon, Sparkles } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"
import PageWrapper from "@/components/shared/PageWrapper"

export default function SupportPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="24/7 Support"
                title="Tech Support & Help"
                description="Get expert help and support for all your tech needs"
            />

            {/* Current Support Options */}
            <section className="mb-16">
                <SectionHeader
                    title="Available Support Options"
                    description="Get help through our various support channels"
                    icon={HeadphonesIcon}
                    gradient="from-orange-500 to-orange-600"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {supportOptions.map((option) => (
                        <Card key={option.title} className="group transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="relative h-12 w-12 mb-6">
                                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${option.gradient} opacity-10`} />
                                    <option.icon className="h-12 w-12 text-orange-500/80 dark:text-orange-400/80 relative z-10" />
                                </div>

                                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {option.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {option.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                                    <option.IconBg className="h-4 w-4" />
                                    <span>{option.stats}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    {option.buttonText}
                                    <ArrowRight />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Upcoming Support Services */}
            <section>
                <SectionHeader
                    title="Coming Soon"
                    description="Exciting new support features on the horizon"
                    icon={Sparkles}
                    gradient="from-orange-400 to-orange-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {upcomingServices.map((service) => (
                        <Card key={service.title} className="group transition-all flex-column justify-between duration-300">
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4">
                                    {service.icon}
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="secondary" className="bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                                        {service.status}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        <span>{service.stats}</span>
                                    </div>
                                    <span className="text-orange-500 dark:text-orange-400">
                                        {service.availableFrom}
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button variant="outline" className="w-full">
                                    {service.buttonText}
                                    <ArrowRight />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </PageWrapper>
    )
} 