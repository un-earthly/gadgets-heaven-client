"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, X, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products, Product } from "@/data"
import { cn } from "@/lib/utils"

interface RecentlyViewedProps {
  className?: string
  maxItems?: number
  showTitle?: boolean
  layout?: 'horizontal' | 'vertical'
}

export default function RecentlyViewed({
  className,
  maxItems = 6,
  showTitle = true,
  layout = 'horizontal'
}: RecentlyViewedProps) {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([])

  useEffect(() => {
    // Load recently viewed products from localStorage
    const loadRecentlyViewed = () => {
      try {
        const stored = localStorage.getItem('recentlyViewed')
        if (stored) {
          const productIds = JSON.parse(stored) as number[]
          const recentProducts = productIds
            .map(id => products.find(p => p.id === id))
            .filter(Boolean) as Product[]
          setRecentlyViewed(recentProducts.slice(0, maxItems))
        }
      } catch (error) {
        console.error('Error loading recently viewed products:', error)
      }
    }

    loadRecentlyViewed()

    // Listen for storage changes (when user views products in other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'recentlyViewed') {
        loadRecentlyViewed()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [maxItems])

  const removeFromRecentlyViewed = (productId: number) => {
    try {
      const stored = localStorage.getItem('recentlyViewed')
      if (stored) {
        const productIds = JSON.parse(stored) as number[]
        const updatedIds = productIds.filter(id => id !== productId)
        localStorage.setItem('recentlyViewed', JSON.stringify(updatedIds))
        setRecentlyViewed(prev => prev.filter(p => p.id !== productId))
      }
    } catch (error) {
      console.error('Error removing from recently viewed:', error)
    }
  }

  const clearRecentlyViewed = () => {
    localStorage.removeItem('recentlyViewed')
    setRecentlyViewed([])
  }

  if (recentlyViewed.length === 0) {
    return null
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="group hover:shadow-lg transition-all duration-200 relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => removeFromRecentlyViewed(product.id)}
        className="absolute top-2 right-2 z-10 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
      >
        <X className="h-3 w-3" />
      </Button>

      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {product.originalPrice && (
          <Badge className="absolute top-2 left-2 bg-red-500">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </Badge>
        )}
        {product.availability === 'out-of-stock' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold hover:text-orange-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
            <span className="text-sm text-zinc-500 ml-1">({product.reviewCount})</span>
          </div>
          <Badge variant="outline" className="text-xs">{product.brand}</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-zinc-500 line-through mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-orange-600">
              ${product.price}
            </span>
          </div>
        </div>

        <Button
          className="w-full mt-3"
          size="sm"
          disabled={product.availability === 'out-of-stock'}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.availability === 'out-of-stock' ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className={className}>
      {showTitle && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-orange-500" />
            <h2 className="text-xl font-semibold">Recently Viewed</h2>
            <Badge variant="secondary">{recentlyViewed.length}</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={clearRecentlyViewed}>
            Clear All
          </Button>
        </div>
      )}

      <div className={cn(
        layout === 'horizontal'
          ? "flex gap-4 overflow-x-auto pb-4"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      )}>
        {recentlyViewed.map(product => (
          <div
            key={product.id}
            className={cn(
              layout === 'horizontal' && "flex-shrink-0 w-64"
            )}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Hook to add products to recently viewed
export const useRecentlyViewed = () => {
  const addToRecentlyViewed = (productId: number) => {
    try {
      const stored = localStorage.getItem('recentlyViewed')
      let productIds: number[] = []

      if (stored) {
        productIds = JSON.parse(stored)
      }

      // Remove if already exists and add to beginning
      productIds = productIds.filter(id => id !== productId)
      productIds.unshift(productId)

      // Keep only last 20 items
      productIds = productIds.slice(0, 20)

      localStorage.setItem('recentlyViewed', JSON.stringify(productIds))

      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent('recentlyViewedUpdated'))
    } catch (error) {
      console.error('Error adding to recently viewed:', error)
    }
  }

  return { addToRecentlyViewed }
}