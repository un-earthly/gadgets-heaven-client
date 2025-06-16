"use client"

import { serviceCategories } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"

export default function ServicesPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990020,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_50%,#ff990008,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50020,transparent)] dark:bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50008,transparent)]" />
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <Badge
                        className="bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 border-0"
                    >
                        Professional Services
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Our Services
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Expert tech support and services to keep your devices running smoothly
                    </p>
                </div>

                {/* Service Categories */}
                <div className="space-y-16">
                    {serviceCategories.map((category) => (
                        <section key={category.id}>
                            <div className="flex items-center gap-4 mb-8">
                                <category.icon className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                                <div>
                                    <h2 className="text-2xl font-semibold">{category.name}</h2>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.services.map((service) => (
                                    <Card
                                        key={service.id}
                                        className="group hover:shadow-lg transition-shadow duration-200 border-orange-100 dark:border-orange-900/10"
                                    >
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                                {service.name}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center justify-between mb-6">
                                                <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                                                    {service.price}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                    <Clock className="h-4 w-4" />
                                                    {service.duration}
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                                            >
                                                <span>Book Now</span>
                                                <ArrowRight className="h-4 w-4 ml-2" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
} 