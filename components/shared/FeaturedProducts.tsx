import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { ShoppingCart, Star } from "lucide-react"
import { products } from "@/data"

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
                    {products.map((product) => (
                        <Card key={product.id} className="group relative overflow-hidden border-0 
                            bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                            hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                            {product.badge && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 
                                        dark:from-orange-600 dark:to-orange-700 text-white text-sm 
                                        rounded-full shadow-lg shadow-orange-500/20">
                                        {product.badge}
                                    </span>
                                </div>
                            )}
                            <CardHeader className="pt-8 px-6">
                                <div className="relative h-48 flex items-center justify-center 
                                    before:absolute before:inset-0 before:bg-gradient-to-t 
                                    before:from-transparent before:to-orange-50/20 
                                    dark:before:to-orange-950/10 before:rounded-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-40 w-40 object-contain group-hover:scale-110 
                                        transition-transform duration-500 ease-out"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="px-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 
                                    dark:text-gray-100">{product.name}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-2xl font-bold bg-gradient-to-r 
                                        from-orange-600 to-orange-500 dark:from-orange-400 
                                        dark:to-orange-300 bg-clip-text text-transparent">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm font-medium 
                                        text-orange-500 dark:text-orange-400">
                                        <Star className="h-4 w-4 fill-current" />
                                        {product.rating}
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 flex gap-3">
                                <Button
                                    variant="ghost"
                                    className="flex-1 hover:bg-orange-50 hover:text-orange-600 
                                        dark:hover:bg-orange-950/50 dark:hover:text-orange-400"
                                    asChild
                                >
                                    <Link href={`/product/${product.id}`}>Details</Link>
                                </Button>
                                <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 
                                    dark:from-orange-600 dark:to-orange-700 hover:from-orange-600 
                                    hover:to-orange-700 dark:hover:from-orange-500 dark:hover:to-orange-600 
                                    text-white border-0">
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

