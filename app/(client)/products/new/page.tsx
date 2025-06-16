"use client"

import { newArrivals } from "@/data"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

type NewArrival = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    releaseDate: string;
    arrivalDate: string;
    category: string;
    preorderAvailable: boolean;
}

export default function NewArrivalsPage() {
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
                        Just Landed
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        New Arrivals
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Be the first to get your hands on our latest tech innovations
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newArrivals.map((product) => (
                        <Card
                            key={product.id}
                            className="group overflow-hidden border-orange-100 dark:border-orange-900/10"
                        >
                            <CardHeader className="p-0">
                                <div className="relative h-64">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {product.preorderAvailable && (
                                        <Badge
                                            className="absolute top-2 right-2 bg-orange-500/90 text-white border-0"
                                        >
                                            Pre-order
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>Available from {new Date(product.arrivalDate).toLocaleDateString()}</span>
                                </div>

                                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                                    {product.description}
                                </p>
                                <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                                    ${product.price}
                                </div>
                            </CardContent>

                            <CardFooter className="p-6 pt-0">
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                                    {product.preorderAvailable ? "Pre-order Now" : "Notify Me"}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
} 