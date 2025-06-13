"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, Star } from "lucide-react"

const ProductsPage = () => {
    return (
        <main className="min-h-screen relative">
            {/* Background gradient similar to other pages */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full 
                    bg-[radial-gradient(circle_500px_at_50%_50%,#ff990020,transparent)] 
                    dark:bg-[radial-gradient(circle_500px_at_50%_50%,#ff990008,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full 
                    bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50020,transparent)] 
                    dark:bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50008,transparent)]" />
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Header Section */}
                <div className="text-center space-y-4 mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 
                        bg-orange-100 dark:bg-orange-950/50 
                        text-orange-600 dark:text-orange-300 
                        rounded-full text-sm font-medium"
                    >
                        <Star className="w-4 h-4" />
                        Browse Our Collection
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold 
                        bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200"
                    >
                        Latest Products
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Discover our curated selection of cutting-edge gadgets and tech accessories
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 
                            text-zinc-500 dark:text-zinc-400" />
                        <Input
                            placeholder="Search products..."
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                    </Button>
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
                    {["All", "Smartphones", "Laptops", "Accessories", "Wearables", "Audio", "Gaming"].map((category) => (
                        <Badge
                            key={category}
                            variant="secondary"
                            className="cursor-pointer hover:bg-orange-100 
                                dark:hover:bg-orange-950/50"
                        >
                            {category}
                        </Badge>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
                        <Card key={product} className="group overflow-hidden border-0 
                            bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                            hover:shadow-xl hover:shadow-orange-500/10 
                            transition-all duration-300"
                        >
                            <CardContent className="p-4">
                                <div className="aspect-square rounded-lg bg-zinc-100 
                                    dark:bg-zinc-800 mb-4"
                                />
                                <h3 className="font-semibold text-zinc-900 
                                    dark:text-zinc-100 mb-2"
                                >
                                    Product Name {product}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-orange-600 
                                        dark:text-orange-400 font-medium"
                                    >
                                        $299.99
                                    </span>
                                    <Badge variant="secondary">New</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-12">
                    <Button variant="outline">Previous</Button>
                    <Button variant="outline">Next</Button>
                </div>
            </div>
        </main>
    )
}

export default ProductsPage
