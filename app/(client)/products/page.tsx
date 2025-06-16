"use client"

import { categories, products } from "@/data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, Star } from "lucide-react"

export default function ProductsPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        All Products
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Discover our wide range of tech products and gadgets
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                        <Input
                            type="search"
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
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8">Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <Card
                                key={category.id}
                                className="group hover:bg-accent/50 transition-all duration-200"
                            >
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <category.icon className="h-8 w-8 text-muted-foreground group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Featured Products */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                className="group overflow-hidden hover:bg-accent/50 transition-all duration-200"
                            >
                                <CardHeader className="p-0 relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    {product.badge && (
                                        <Badge
                                            variant="secondary"
                                            className="absolute top-2 right-2"
                                        >
                                            {product.badge}
                                        </Badge>
                                    )}
                                </CardHeader>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                            ${product.price}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Star className="h-4 w-4 text-orange-400/90" />
                                            {product.rating}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

