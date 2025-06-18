"use client"

import { useState } from "react"
import { products } from "@/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Package, Shield, Truck } from "lucide-react"
import PageWrapper from "@/components/shared/PageWrapper"
import DimmedButton from "@/components/shared/DimmedButton"
import { useRouter } from "next/router"

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1)
    const router = useRouter();
    const product = products.find(p => p.id === parseInt(router.query.id as string))

    if (!product) {
        notFound()
    }

    return (
        <PageWrapper>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="relative">
                        <Card className="overflow-hidden">
                            <div className="aspect-square relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </Card>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <Badge variant="secondary" className="mb-2">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < 4 ? "text-orange-400 fill-orange-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-muted-foreground">(4.0)</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="text-muted-foreground">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded-lg">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-orange-600 dark:text-orange-400"
                                >
                                    -
                                </Button>
                                <span className="w-12 text-center">{quantity}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-orange-600 dark:text-orange-400"
                                >
                                    +
                                </Button>
                            </div>
                            <span className="text-muted-foreground">
                                {product.stock} units available
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600">
                                Buy Now
                            </Button>
                            <DimmedButton className="flex-1">
                                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                            </DimmedButton>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Package className="h-4 w-4" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Shield className="h-4 w-4" />
                                <span>2 Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Truck className="h-4 w-4" />
                                <span>Fast Delivery</span>
                            </div>
                        </div>

                        <Tabs defaultValue="description" className="pt-6">
                            <TabsList>
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="text-muted-foreground">
                                <p>{product.description}</p>
                                <ul className="list-disc list-inside mt-4 space-y-2">
                                    <li>High-quality build and materials</li>
                                    <li>Advanced features and functionality</li>
                                    <li>Energy efficient design</li>
                                    <li>Compatible with most modern devices</li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="specifications" className="text-muted-foreground">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="font-medium">Brand</div>
                                        <div>Gadgets Heaven</div>
                                        <div className="font-medium">Model</div>
                                        <div>2024 Edition</div>
                                        <div className="font-medium">Warranty</div>
                                        <div>2 Years</div>
                                        <div className="font-medium">Category</div>
                                        <div>{product.category}</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="shipping" className="text-muted-foreground">
                                <div className="space-y-4">
                                    <p>Free shipping on orders over $50</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Standard Delivery: 3-5 business days</li>
                                        <li>Express Delivery: 1-2 business days</li>
                                        <li>International Shipping available</li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
