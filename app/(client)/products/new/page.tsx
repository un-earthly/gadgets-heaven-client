"use client"

import { newArrivals } from "@/data"
import { Star, Sparkles } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import ProductCard from "@/components/product/product-card"

export default function NewArrivalsPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="Just Arrived"
                title="New Arrivals"
                description="Discover our latest tech innovations and gadgets"
            />

            {/* Featured New Arrivals */}
            <section className="mb-16">
                <SectionHeader
                    title="Featured Products"
                    description="Our most exciting new releases"
                    icon={Star}
                    gradient="from-orange-500 to-orange-600"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newArrivals.featured.map((product) => {
                        // Convert NewArrival to Product format for ProductCard
                        const productData = {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                            originalPrice: undefined,
                            images: [product.image],
                            category: "New Arrivals",
                            brand: "Featured",
                            stock: 10,
                            rating: product.rating,
                            reviewCount: Math.floor(Math.random() * 100) + 20,
                            variants: undefined,
                            specifications: [],
                            features: ["New Arrival", "Featured Product"],
                            tags: ["new", "featured"],
                            availability: "in-stock" as const,
                            shippingInfo: {
                                freeShipping: true,
                                estimatedDays: 2,
                                weight: 1
                            },
                            warranty: "1 Year Limited Warranty",
                            returnPolicy: "30-day return policy",
                            relatedProducts: []
                        }
                        
                        return (
                            <ProductCard 
                                key={product.id} 
                                product={productData}
                                showCompareButton={true}
                            />
                        )
                    })}
                </div>
            </section>

            {/* Other New Arrivals */}
            <section>
                <SectionHeader
                    title="Latest Additions"
                    description="Fresh tech just added to our collection"
                    icon={Sparkles}
                    gradient="from-orange-400 to-orange-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newArrivals.latest.map((product) => {
                        // Convert NewArrival to Product format for ProductCard
                        const productData = {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                            originalPrice: undefined,
                            images: [product.image],
                            category: "New Arrivals",
                            brand: "Latest",
                            stock: 15,
                            rating: product.rating,
                            reviewCount: Math.floor(Math.random() * 50) + 10,
                            variants: undefined,
                            specifications: [],
                            features: ["New Arrival", "Latest Addition"],
                            tags: ["new", "latest"],
                            availability: "in-stock" as const,
                            shippingInfo: {
                                freeShipping: true,
                                estimatedDays: 2,
                                weight: 1
                            },
                            warranty: "1 Year Limited Warranty",
                            returnPolicy: "30-day return policy",
                            relatedProducts: []
                        }
                        
                        return (
                            <ProductCard 
                                key={product.id} 
                                product={productData}
                                showCompareButton={true}
                            />
                        )
                    })}
                </div>
            </section>
        </PageWrapper>
    )
} 