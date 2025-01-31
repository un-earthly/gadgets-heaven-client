import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
    { id: 1, name: "Smart Watch", price: 199.99, image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg" },
    { id: 2, name: "Wireless Earbuds", price: 149.99, image: "https://gadgetnmusic.com/wp-content/uploads/2023/11/SoundPEATS-Air4-Lite-Wireless-Earbuds-5.jpg" },
    { id: 3, name: "Smartphone", price: 699.99, image: "https://images.samsung.com/is/image/samsung/p6pim/bd/2501/gallery/bd-galaxy-s25-s938-sm-s938bzbcbkd-thumb-544698306?$UX_EXT2_PNG$" },
    { id: 4, name: "Laptop", price: 999.99, image: "https://techterms.com/img/xl/laptop_586.png" },
]

const FeaturedProducts = () => {
    return (
        <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="mx-auto h-52 w-40 mb-4 object-contain"
                            />
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                            <div className="flex justify-between">
                                <Button asChild variant="outline">
                                    <Link href={`/product/${product.id}`}>View Details</Link>
                                </Button>
                                <Button>Add to Cart</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts

