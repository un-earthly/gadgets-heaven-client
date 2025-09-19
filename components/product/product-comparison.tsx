"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Star, ShoppingCart, Heart, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products, Product } from "@/data"
import { cn } from "@/lib/utils"
import { useComparison } from "@/contexts/comparison-context"

interface ProductComparisonProps {
  onClose?: () => void
}

export default function ProductComparison({ onClose }: ProductComparisonProps) {
  const { compareProducts, addToComparison, removeFromComparison } = useComparison()
  const [availableProducts] = useState(products.slice(0, 10)) // Show first 10 for selection

  const addProduct = (product: Product) => {
    if (compareProducts.length < 4 && !compareProducts.find(p => p.id === product.id)) {
      addToComparison(product)
    }
  }

  const removeProduct = (productId: number) => {
    removeFromComparison(productId)
  }

  // Get all unique specification categories
  const allSpecCategories = Array.from(
    new Set(
      compareProducts.flatMap(product =>
        product.specifications.map(spec => spec.category)
      )
    )
  )

  // Get all unique features
  const allFeatures = Array.from(
    new Set(compareProducts.flatMap(product => product.features))
  )

  if (compareProducts.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Product Comparison</CardTitle>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-zinc-400 mb-4">
              <Plus className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium mb-2">No products to compare</h3>
            <p className="text-zinc-600 mb-6">
              Add products to start comparing their features and specifications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {availableProducts.slice(0, 6).map(product => (
                <Card key={product.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm line-clamp-2 mb-2">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-orange-600">
                        ${product.price}
                      </span>
                      <Button size="sm" onClick={() => addProduct(product)}>
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Product Comparison ({compareProducts.length}/4)</CardTitle>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <td className="w-48 p-4"></td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4 min-w-[280px]">
                      <Card className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProduct(product.id)}
                          className="absolute top-2 right-2 z-10 h-6 w-6 p-0"
                        >
                          <X className="h-3 w-3" />
                        </Button>

                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <CardContent className="p-4">
                          <Link href={`/products/${product.id}`}>
                            <h3 className="font-semibold hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                              {product.name}
                            </h3>
                          </Link>

                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm ml-1">{product.rating}</span>
                              <span className="text-xs text-zinc-500 ml-1">
                                ({product.reviewCount})
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            {product.originalPrice && (
                              <span className="text-sm text-zinc-500 line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                            <span className="text-xl font-bold text-orange-600">
                              ${product.price}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">
                              <ShoppingCart className="h-3 w-3 mr-1" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </td>
                  ))}

                  {/* Add Product Column */}
                  {compareProducts.length < 4 && (
                    <td className="p-4 min-w-[280px]">
                      <Card className="h-full flex items-center justify-center min-h-[400px] border-dashed">
                        <div className="text-center">
                          <Plus className="h-8 w-8 mx-auto text-zinc-400 mb-2" />
                          <p className="text-sm text-zinc-600 mb-4">Add another product</p>
                          <div className="space-y-2">
                            {availableProducts
                              .filter(p => !compareProducts.find(cp => cp.id === p.id))
                              .slice(0, 3)
                              .map(product => (
                                <Button
                                  key={product.id}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => addProduct(product)}
                                  className="w-full text-xs"
                                >
                                  {product.name.slice(0, 20)}...
                                </Button>
                              ))}
                          </div>
                        </div>
                      </Card>
                    </td>
                  )}
                </tr>
              </thead>

              <tbody>
                {/* Basic Info */}
                <tr className="border-t">
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Brand</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">
                      <Badge variant="outline">{product.brand}</Badge>
                    </td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>

                <tr>
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Category</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">{product.category}</td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>

                <tr>
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Availability</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">
                      <Badge
                        variant={product.availability === 'in-stock' ? 'default' : 'destructive'}
                        className={cn(
                          product.availability === 'in-stock' && 'bg-green-500'
                        )}
                      >
                        {product.availability.replace('-', ' ')}
                      </Badge>
                    </td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>

                <tr>
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Stock</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">{product.stock} units</td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>

                {/* Specifications by Category */}
                {allSpecCategories.map(category => (
                  <React.Fragment key={category}>
                    <tr className="border-t">
                      <td colSpan={compareProducts.length + 2} className="p-4 font-semibold text-orange-600 bg-orange-50 dark:bg-orange-950">
                        {category}
                      </td>
                    </tr>
                    {Array.from(
                      new Set(
                        compareProducts
                          .flatMap(p => p.specifications.filter(s => s.category === category))
                          .map(s => s.name)
                      )
                    ).map(specName => (
                      <tr key={specName}>
                        <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">{specName}</td>
                        {compareProducts.map(product => {
                          const spec = product.specifications.find(s => s.name === specName)
                          return (
                            <td key={product.id} className="p-4">
                              {spec ? spec.value : '-'}
                            </td>
                          )
                        })}
                        {compareProducts.length < 4 && <td className="p-4"></td>}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}

                {/* Features Comparison */}
                <tr className="border-t">
                  <td colSpan={compareProducts.length + 2} className="p-4 font-semibold text-orange-600 bg-orange-50 dark:bg-orange-950">
                    Features
                  </td>
                </tr>
                {allFeatures.map(feature => (
                  <tr key={feature}>
                    <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">{feature}</td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="p-4 text-center">
                        {product.features.includes(feature) ? (
                          <Badge variant="default" className="bg-green-500">✓</Badge>
                        ) : (
                          <span className="text-zinc-400">-</span>
                        )}
                      </td>
                    ))}
                    {compareProducts.length < 4 && <td className="p-4"></td>}
                  </tr>
                ))}

                {/* Shipping & Warranty */}
                <tr className="border-t">
                  <td colSpan={compareProducts.length + 2} className="p-4 font-semibold text-orange-600 bg-orange-50 dark:bg-orange-950">
                    Shipping & Warranty
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Free Shipping</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">
                      {product.shippingInfo.freeShipping ? (
                        <Badge variant="default" className="bg-green-500">Yes</Badge>
                      ) : (
                        <Badge variant="outline">No</Badge>
                      )}
                    </td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Delivery Time</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">
                      {product.shippingInfo.estimatedDays} days
                    </td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-zinc-50 dark:bg-zinc-900">Warranty</td>
                  {compareProducts.map(product => (
                    <td key={product.id} className="p-4">{product.warranty}</td>
                  ))}
                  {compareProducts.length < 4 && <td className="p-4"></td>}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}