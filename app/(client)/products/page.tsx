"use client"

import { products, categories } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, Tag, Sparkles } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import Image from "next/image"

export default function ProductsPage() {
    return (
        <PageWrapper>
            <PageHeader
                title="All Products"
                description="Browse our complete collection of tech gadgets and accessories"
            />

            {/* Categories */}
            <section className="mb-16">
                <SectionHeader
                    title="Shop by Category"
                    description="Find exactly what you're looking for"
                    icon={Tag}
                    gradient="from-orange-500 to-orange-600"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            className="group transition-all duration-300"
                        >
                            <CardHeader className="p-0">
                                <div className="relative h-40">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-xl font-semibold text-white">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardFooter className="p-0">
                                <Button variant="ghost" className="w-full">
                                    View All
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* All Products */}
            <section>
                <SectionHeader
                    title="All Products"
                    description="Our complete collection of gadgets"
                    icon={Sparkles}
                    gradient="from-orange-400 to-orange-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="group transition-all duration-300"
                        >
                            <CardHeader className="p-0">
                                <div className="relative h-64">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {product.stock <= 5 && (
                                        <Badge
                                            variant="secondary"
                                            className="absolute top-2 right-2 bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                                        >
                                            Low Stock
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline">
                                        {product.category}
                                    </Badge>
                                </div>
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
                                    <div className="text-sm text-muted-foreground">
                                        {product.stock} in stock
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    disabled={product.stock === 0}
                                >
                                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                                    {product.stock > 0 && <ShoppingCart className="ml-2 h-4 w-4" />}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </PageWrapper>
    )
}

