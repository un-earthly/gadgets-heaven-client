"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  GitCompare,
  Eye,
  Check,
  AlertCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/data"
import { useComparison } from "@/contexts/comparison-context"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  showCompareButton?: boolean
  layout?: 'grid' | 'list'
  className?: string
}

export default function ProductCard({ 
  product, 
  showCompareButton = true, 
  layout = 'grid',
  className 
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToComparison, removeFromComparison, isInComparison, compareProducts, maxProducts } = useComparison()
  
  const inComparison = isInComparison(product.id)
  const canAddToComparison = compareProducts.length < maxProducts

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (inComparison) {
      removeFromComparison(product.id)
    } else if (canAddToComparison) {
      addToComparison(product)
    }
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const getAvailabilityBadge = () => {
    switch (product.availability) {
      case 'in-stock':
        return (
          <Badge variant="default" className="bg-green-500">
            <Check className="h-3 w-3 mr-1" />
            In Stock
          </Badge>
        )
      case 'out-of-stock':
        return (
          <Badge variant="destructive">
            <AlertCircle className="h-3 w-3 mr-1" />
            Out of Stock
          </Badge>
        )
      case 'pre-order':
        return (
          <Badge variant="secondary" className="bg-blue-500 text-white">
            Pre-order
          </Badge>
        )
      default:
        return null
    }
  }

  if (layout === 'list') {
    return (
      <Card className={cn("group hover:shadow-lg transition-all duration-200 flex", className)}>
        <div className="relative w-48 flex-shrink-0 overflow-hidden">
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
        
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between h-full">
            <div className="flex-1 pr-4">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                {product.description}
              </p>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium ml-1">{product.rating}</span>
                  <span className="text-sm text-zinc-500 ml-1">({product.reviewCount})</span>
                </div>
                <Badge variant="outline" className="text-xs">{product.brand}</Badge>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {product.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {getAvailabilityBadge()}
                {product.shippingInfo.freeShipping && (
                  <Badge variant="outline" className="text-xs text-green-600">
                    Free Shipping
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  {product.originalPrice && (
                    <span className="text-sm text-zinc-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-xl font-bold text-orange-600">
                    ${product.price}
                  </span>
                </div>
                {product.shippingInfo.freeShipping && (
                  <p className="text-xs text-green-600">Free Shipping</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleWishlistToggle}
                    className="h-8 w-8 p-0"
                  >
                    <Heart className={cn(
                      "h-4 w-4",
                      isWishlisted && "fill-red-500 text-red-500"
                    )} />
                  </Button>
                  
                  {showCompareButton && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCompareToggle}
                      disabled={!canAddToComparison && !inComparison}
                      className={cn(
                        "h-8 w-8 p-0",
                        inComparison && "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400"
                      )}
                    >
                      <GitCompare className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <Button 
                  size="sm"
                  disabled={product.availability === 'out-of-stock'}
                  className="min-w-[120px]"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.availability === 'out-of-stock' ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-200", className)}>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.originalPrice && (
            <Badge className="bg-red-500">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleWishlistToggle}
            className="h-8 w-8 p-0"
          >
            <Heart className={cn(
              "h-4 w-4",
              isWishlisted && "fill-red-500 text-red-500"
            )} />
          </Button>
          
          {showCompareButton && (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCompareToggle}
              disabled={!canAddToComparison && !inComparison}
              className={cn(
                "h-8 w-8 p-0",
                inComparison && "bg-orange-500 text-white hover:bg-orange-600"
              )}
            >
              <GitCompare className="h-4 w-4" />
            </Button>
          )}
          
          <Button
            variant="secondary"
            size="sm"
            asChild
            className="h-8 w-8 p-0"
          >
            <Link href={`/products/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>

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
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
            <span className="text-sm text-zinc-500 ml-1">({product.reviewCount})</span>
          </div>
          <Badge variant="outline" className="text-xs">{product.brand}</Badge>
        </div>

        <div className="flex items-center justify-between mb-3">
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
          {getAvailabilityBadge()}
        </div>

        {product.shippingInfo.freeShipping && (
          <p className="text-xs text-green-600 mb-3">✓ Free shipping</p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          disabled={product.availability === 'out-of-stock'}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.availability === 'out-of-stock' ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  )
}