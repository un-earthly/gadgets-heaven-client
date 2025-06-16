"use client"

import { deals } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Package, Sparkles, ShoppingCart, Tag } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"

// Define types for our data structure
type BundleProduct = {
    id: number
    name: string
    items: string[]
    originalPrice: number
    bundlePrice: number
    image: string
    savings: number
}

type DiscountProduct = {
    id: number
    name: string
    originalPrice: number
    discountedPrice: number
    image: string
    discount: number
}

type Deal = {
    id: number
    name: string
    type: "time-limited" | "bundle" | "clearance"
    endsAt?: string
    products: (BundleProduct | DiscountProduct)[]
}

export default function DealsPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990010,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50010,transparent)]" />
            </div>

            <div className="container mx-auto px-4 py-8">
                <PageHeader
                    badge="Limited Time"
                    title="Special Deals"
                    description="Don't miss out on our exclusive offers and discounts"
                />

                {deals.map((deal) => (
                    <section key={deal.id} className="mb-16">
                        <SectionHeader
                            title={deal.name}
                            description={deal.type === "time-limited" && deal.endsAt ?
                                `Ends ${new Date(deal.endsAt).toLocaleDateString()}` : undefined}
                            icon={deal.type === "time-limited" ? Clock :
                                deal.type === "bundle" ? Package : Tag}
                            gradient="from-orange-500 to-orange-600"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {deal.products.map((product) => (
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
                                            {deal.type === "bundle" ? (
                                                <Badge
                                                    variant="secondary"
                                                    className="absolute top-2 right-2"
                                                >
                                                    Bundle
                                                </Badge>
                                            ) : (
                                                <Badge
                                                    variant="secondary"
                                                    className="absolute top-2 right-2"
                                                >
                                                    {'discount' in product && `${product.discount}% OFF`}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {product.name}
                                        </h3>

                                        {deal.type === "bundle" && 'items' in product ? (
                                            <>
                                                <div className="space-y-2 mb-4">
                                                    <p className="text-sm text-muted-foreground">Includes:</p>
                                                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                                                        {product.items.map((item: string, index: number) => (
                                                            <li key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-1">
                                                        <div className="text-sm text-muted-foreground line-through">
                                                            ${product.originalPrice}
                                                        </div>
                                                        <div className="text-2xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                                            ${product.bundlePrice}
                                                        </div>
                                                    </div>
                                                    <div className="text-sm text-orange-500/90 dark:text-orange-400/90">
                                                        Save ${product.savings}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <div className="text-sm text-muted-foreground line-through">
                                                        ${product.originalPrice}
                                                    </div>
                                                    {'discountedPrice' in product && (
                                                        <div className="text-2xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                                            ${product.discountedPrice}
                                                        </div>
                                                    )}
                                                </div>
                                                {'discount' in product && (
                                                    <div className="text-sm text-orange-500/90 dark:text-orange-400/90">
                                                        Save {product.discount}%
                                                    </div>
                                                )}
                                            </div>
                                        )}
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
                ))}
            </div>
        </main>
    )
} 