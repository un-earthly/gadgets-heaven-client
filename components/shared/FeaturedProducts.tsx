import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { products } from "@/data"
import { Badge } from "../ui/badge"

type Product = {
    id: number
    name: string
    price: number
    image: string
    badge?: string
    rating: number
}

const FeaturedProducts = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-950/50 
                        text-orange-600 dark:text-orange-300 rounded-full text-sm font-medium">
                        Featured Collection
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Featured Products
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium gadgets and tech accessories
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product: Product) => (
                        <Card key={product.id} className="group relative overflow-hidden hover:bg-accent/50 transition-all duration-200">
                            {product.badge && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge variant="secondary">
                                        {product.badge}
                                    </Badge>
                                </div>
                            )}
                            <CardHeader className="pt-8 px-6">
                                <div className="relative h-48 flex items-center justify-center">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                        className="h-40 w-40 object-contain group-hover:scale-105 
                                        transition-transform duration-500 ease-out"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="px-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 
                                    dark:group-hover:text-orange-400 transition-colors">{product.name}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-2xl font-bold text-orange-500/90 dark:text-orange-400/90">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Star className="h-4 w-4 text-orange-400/90" />
                                        {product.rating}
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 flex gap-3">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    asChild
                                >
                                    <Link href={`/product/${product.id}`}>Details</Link>
                                </Button>
                                <Button className="flex-1" variant="default">
                                    <ShoppingCart className="mr-2 h-4 w-4" /> Add
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts

