"use client"

import { serviceCategories } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import Link from "next/link"
import HighlightButton, { HighlightedOutlineButton } from "@/components/shared/HighlightButton"

export default function ServicesPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="Professional Services"
                title="Our Services"
                description="Expert tech services to keep your gadgets running smoothly"
            />

            <div className="space-y-16">
                {serviceCategories.map((category) => (
                    <section key={category.id}>
                        <SectionHeader
                            title={category.name}
                            description={category.description}
                            icon={category.icon}
                            gradient={category.gradient}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.services.map((service) => (
                                <Card
                                    key={service.id}
                                    className="group transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="relative h-12 w-12 mb-6">
                                            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.gradient} opacity-10`} />
                                            <service.icon className="h-12 w-12 text-orange-500/80 dark:text-orange-400/80 relative z-10" />
                                        </div>

                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-2xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                                {service.price}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                {service.duration}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="grid lg:grid-cols-2  w-full  gap-2">
                                        <Button variant="outline" asChild>
                                            <Link href={`/services/${service.id}`}>
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <HighlightedOutlineButton isDisabled={false} arrowEnabled={true} size="lg">
                                            <Link href={`/dashboard/user/services/modify?service=${service.id}`}>
                                                Book Now
                                            </Link>
                                        </HighlightedOutlineButton>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </PageWrapper>
    )
} 