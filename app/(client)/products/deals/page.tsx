"use client"

import { deals } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Package, Sparkles, ShoppingCart } from "lucide-react"

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
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990020,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_50%,#ff990008,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50020,transparent)] dark:bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50008,transparent)]" />
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <Badge
                        className="bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 border-0"
                    >
                        Limited Time
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Special Deals
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Don't miss out on our exclusive offers and discounts
                    </p>
                </div>

                {/* Deals Sections */}
                {deals.map((deal: Deal) => (
                    <section key={deal.id} className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-2xl font-semibold">{deal.name}</h2>
                            {deal.type === "time-limited" && deal.endsAt && (
                                <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                                    <Clock className="h-4 w-4" />
                                    <span>Ends {new Date(deal.endsAt).toLocaleDateString()}</span>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {deal.products.map((product) => (
                                <Card
                                    key={product.id}
                                    className="group overflow-hidden hover:bg-accent/50 transition-all duration-200"
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
                                        <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
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

                                    <CardFooter className="p-6 pt-0">
                                        <div className="flex gap-3 w-full">
                                            <Button
                                                variant="ghost"
                                                className="flex-1 hover:bg-accent"
                                            >
                                                Details
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                className="flex-1 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400"
                                            >
                                                <ShoppingCart className="mr-2 h-4 w-4" /> Add
                                            </Button>
                                        </div>
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