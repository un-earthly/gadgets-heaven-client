import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const recommendations = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise-cancelling, 30-hour battery life",
        image: "/placeholder.svg?height=200&width=200",
        tag: "Trending Now",
    },
    {
        id: 2,
        name: "Smart Home Hub",
        description: "Control all your smart devices",
        image: "/placeholder.svg?height=200&width=200",
        tag: "Popular Picks",
    },
    {
        id: 3,
        name: "Fitness Tracker",
        description: "Track your health and workouts",
        image: "/placeholder.svg?height=200&width=200",
        tag: "Just for You",
    },
    {
        id: 4,
        name: "Portable Charger",
        description: "20000mAh, fast charging",
        image: "/placeholder.svg?height=200&width=200",
        tag: "Trending Now",
    },
]

const PersonalizedRecommendations = () => {
    return (
        <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Personalized Recommendations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recommendations.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="relative">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto mb-4"
                                />
                                <Badge className="absolute top-2 right-2">{product.tag}</Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <Link href={`/product/${product.id}`} className="text-orange-600 hover:underline">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PersonalizedRecommendations

