"use client"

import { deals } from "@/data"
import { Percent, Clock, Package } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import SectionHeader from "@/components/shared/SectionHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import ProductCard from "@/components/product/product-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DealsPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="Limited Time"
                title="Deals & Offers"
                description="Don't miss out on these amazing deals and special offers"
            />

            {/* Flash Sale Section */}
            <section className="mb-16">
                <SectionHeader
                    title="Flash Sale"
                    description="Limited time offers with incredible savings"
                    icon={Clock}
                    gradient="from-red-500 to-red-600"
                />
                
                {/* Countdown Timer */}
                <div className="text-center mb-8">
                    <Card className="inline-block p-4 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                        <CardContent className="p-0">
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-600">23</div>
                                    <div className="text-xs text-red-500">Hours</div>
                                </div>
                                <div className="text-red-600">:</div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-600">45</div>
                                    <div className="text-xs text-red-500">Minutes</div>
                                </div>
                                <div className="text-red-600">:</div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-600">12</div>
                                    <div className="text-xs text-red-500">Seconds</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.find(deal => deal.type === 'time-limited')?.products.map((product) => {
                        const productData = {
                            id: product.id,
                            name: product.name,
                            description: "Limited time flash sale offer",
                            price: product.discountedPrice,
                            originalPrice: product.originalPrice,
                            images: [product.image],
                            category: "Flash Sale",
                            brand: "Deal",
                            stock: Math.floor(Math.random() * 20) + 5,
                            rating: 4.5,
                            reviewCount: Math.floor(Math.random() * 100) + 50,
                            variants: undefined,
                            specifications: [],
                            features: ["Flash Sale", `${product.discount}% Off`],
                            tags: ["sale", "limited-time"],
                            availability: "in-stock" as const,
                            shippingInfo: {
                                freeShipping: true,
                                estimatedDays: 1,
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

            {/* Bundle Deals Section */}
            <section className="mb-16">
                <SectionHeader
                    title="Bundle Deals"
                    description="Save more when you buy together"
                    icon={Package}
                    gradient="from-blue-500 to-blue-600"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {deals.find(deal => deal.type === 'bundle')?.products.map((bundle) => (
                        <Card key={bundle.id} className="group hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl">{bundle.name}</CardTitle>
                                    <Badge className="bg-blue-500">
                                        Save ${bundle.savings}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-2">
                                        {bundle.items.map((item, index) => (
                                            <div key={index} className="text-center p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                                                <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-md mx-auto mb-2"></div>
                                                <p className="text-xs font-medium">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div>
                                            <span className="text-sm text-zinc-500 line-through mr-2">
                                                ${bundle.originalPrice}
                                            </span>
                                            <span className="text-2xl font-bold text-blue-600">
                                                ${bundle.bundlePrice}
                                            </span>
                                        </div>
                                        <Badge variant="outline" className="text-green-600 border-green-200">
                                            Save ${bundle.savings}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Clearance Section */}
            <section>
                <SectionHeader
                    title="Clearance Sale"
                    description="Last chance to grab these items at unbeatable prices"
                    icon={Percent}
                    gradient="from-orange-500 to-orange-600"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deals.find(deal => deal.type === 'clearance')?.products.map((product) => {
                        const productData = {
                            id: product.id,
                            name: product.name,
                            description: "Clearance sale - limited stock available",
                            price: product.discountedPrice,
                            originalPrice: product.originalPrice,
                            images: [product.image],
                            category: "Clearance",
                            brand: "Clearance",
                            stock: Math.floor(Math.random() * 5) + 1, // Low stock for clearance
                            rating: 4.2,
                            reviewCount: Math.floor(Math.random() * 80) + 20,
                            variants: undefined,
                            specifications: [],
                            features: ["Clearance Sale", `${product.discount}% Off`, "Limited Stock"],
                            tags: ["clearance", "final-sale"],
                            availability: "in-stock" as const,
                            shippingInfo: {
                                freeShipping: true,
                                estimatedDays: 3,
                                weight: 1
                            },
                            warranty: "1 Year Limited Warranty",
                            returnPolicy: "Final sale - no returns",
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