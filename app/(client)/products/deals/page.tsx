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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {deals.find(deal => deal.type === 'time-limited')?.products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={{
                                    id: product.id,
                                    name: product.name,
                                    description: "Limited time flash sale offer",
                                    price: product.price,
                                    originalPrice: product.originalPrice,
                                    images: product.images,
                                    category: product.category,
                                    brand: product.brand,
                                    stock: product.stock,
                                    rating: product.rating,
                                    reviewCount: product.reviewCount,
                                    variants: product.variants,
                                    specifications: product.specifications,
                                    features: product.features,
                                    tags: product.tags,
                                    availability: product.availability,
                                    shippingInfo: product.shippingInfo,
                                    warranty: product.warranty,
                                    returnPolicy: product.returnPolicy,
                                    relatedProducts: product.relatedProducts,
                                }}
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
                    {deals.find(deal => deal.type === 'bundle')?.bundles?.map((bundle) => (
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
                        return (
                            <ProductCard
                                key={product.id}
                                product={{
                                    id: product.id,
                                    name: product.name,
                                    description: product.description,
                                    price: product.price,
                                    originalPrice: product.originalPrice,
                                    images: product.images,
                                    category: product.category,
                                    brand: product.brand,
                                    stock: product.stock,
                                    rating: product.rating,
                                    reviewCount: product.reviewCount,
                                    variants: product.variants,
                                    specifications: product.specifications,
                                    features: product.features,
                                    tags: product.tags,
                                    availability: product.availability,
                                    shippingInfo: product.shippingInfo,
                                    warranty: product.warranty,
                                    returnPolicy: product.returnPolicy,
                                    relatedProducts: product.relatedProducts,
                                }}
                                showCompareButton={true}
                            />
                        )
                    })}
                </div>
            </section>
        </PageWrapper>
    )
}