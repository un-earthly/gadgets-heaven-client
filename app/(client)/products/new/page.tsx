"use client"

import { newArrivals } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, Star, Sparkles } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import DimmedButton, { DimmedButtonWithArrow } from "@/components/shared/DimmedButton"
import Link from "next/link"

export default function NewArrivalsPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="Just Arrived"
                title="New Arrivals"
                description="Discover our latest tech innovations and gadgets"
            />

            {/* Featured New Arrivals */}
            <section className="mb-16">
                <SectionHeader
                    title="Featured Products"
                    description="Our most exciting new releases"
                    icon={Star}
                    gradient="from-orange-500 to-orange-600"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newArrivals.featured.map((product) => (
                        <Card
                            key={product.id}
                            className="group transition-all duration-300"
                        >
                            <CardHeader className="p-0">
                                <div className="relative h-64">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <Badge
                                        variant="secondary"
                                        className="absolute top-2 right-2 bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                                    >
                                        Featured
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                        ${product.price}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                                        <span className="text-sm text-muted-foreground">
                                            {product.rating}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    Add to Cart
                                    <ShoppingCart className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Other New Arrivals */}
            <section>
                <SectionHeader
                    title="Latest Additions"
                    description="Fresh tech just added to our collection"
                    icon={Sparkles}
                    gradient="from-orange-400 to-orange-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newArrivals.latest.map((product) => (
                        <Card
                            key={product.id}
                            className="group transition-all duration-300"
                        >
                            <CardHeader className="p-0">
                                <div className="relative h-48">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <Badge
                                        variant="secondary"
                                        className="absolute top-2 right-2 bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                                    >
                                        New
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="text-xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                        ${product.price}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                                        <span className="text-sm text-muted-foreground">
                                            {product.rating}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <DimmedButtonWithArrow>
                                    <Link href={`/products/${product.id}`}>
                                        View Details
                                    </Link>
                                </DimmedButtonWithArrow>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </PageWrapper>
    )
} 