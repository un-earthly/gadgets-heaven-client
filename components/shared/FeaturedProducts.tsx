import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { ShoppingCart } from "lucide-react"

const products = [
    {
        id: 1,
        name: "Smart Watch",
        price: 199.99,
        image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg",
        badge: "Best Seller",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 149.99,
        image: "https://gadgetnmusic.com/wp-content/uploads/2023/11/SoundPEATS-Air4-Lite-Wireless-Earbuds-5.jpg",
        badge: "New",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Smartphone",
        price: 699.99,
        image: "https://images.samsung.com/is/image/samsung/p6pim/bd/2501/gallery/bd-galaxy-s25-s938-sm-s938bzbcbkd-thumb-544698306?$UX_EXT2_PNG$",
        badge: "Featured",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Laptop",
        price: 999.99,
        image: "https://techterms.com/img/xl/laptop_586.png",
        badge: "Limited Stock",
        rating: 4.6,
    }
];
const FeaturedProducts = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <span className="text-orange-500 font-medium">Our Collection</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium gadgets and tech accessories
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="group relative hover:shadow-lg transition-shadow">
                            {product.badge && (
                                <span className="absolute top-4 right-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                                    {product.badge}
                                </span>
                            )}
                            <CardHeader className="pt-8 px-6">
                                <div className="h-48 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-40 w-40 object-contain group-hover:scale-105 transition-transform"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="px-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-2xl font-bold text-orange-500">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        ★ {product.rating}
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 flex gap-2">
                                <Button variant="outline" className="flex-1" asChild>
                                    <Link href={`/product/${product.id}`}>Details</Link>
                                </Button>
                                <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
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

