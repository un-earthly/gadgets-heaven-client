import Link from "next/link"
import { products } from "@/data"
import ProductCard from "../product/product-card"
import { HighlightedOutlineButton } from "./HighlightButton"

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
                    {products.slice(0, 4).map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            showCompareButton={true}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <HighlightedOutlineButton isDisabled={false} arrowEnabled={true} size="lg" >
                        <Link href="/products" className="flex items-center gap-2">
                            View All Products
                        </Link>
                    </HighlightedOutlineButton>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts

