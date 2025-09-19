"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  GitCompare,
  X,
  Eye,
  ChevronUp,
  ChevronDown,
  Trash2
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useComparison } from "@/contexts/comparison-context"
import { cn } from "@/lib/utils"

export default function ComparisonFAB() {
  const { compareProducts, removeFromComparison, clearComparison } = useComparison()
  const [isExpanded, setIsExpanded] = useState(false)

  if (compareProducts.length === 0) {
    return null
  }

  const generateCompareUrl = () => {
    const productIds = compareProducts.map(p => p.id).join(',')
    return `/products/compare?products=${productIds}`
  }

  return (
    <div>
      {/* Expanded View */}
      {isExpanded && (
        <Card className="mb-4 w-80 max-h-96 bottom-20 right-0 absolute overflow-hidden shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">Compare Products</h3>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {compareProducts.length}/{4}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearComparison}
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {compareProducts.map(product => (
                <div key={product.id} className="flex items-center gap-3 p-2 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium line-clamp-1">{product.name}</p>
                    <p className="text-xs text-orange-600">${product.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromComparison(product.id)}
                    className="h-6 w-6 p-0 text-zinc-500 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              <Button asChild size="sm" className="flex-1">
                <Link href={generateCompareUrl()}>
                  <Eye className="h-3 w-3 mr-1" />
                  Compare
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(false)}
              >
                <ChevronDown className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* FAB Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm",
          "border-orange-200 dark:border-orange-800",
          "text-orange-500 dark:text-orange-400",
          "hover:bg-orange-50 dark:hover:bg-orange-950/50",
          "hover:text-orange-600 dark:hover:text-orange-300",
          "shadow-lg shadow-orange-500/10",
          "transition-all duration-300"
        )}
      >
        <GitCompare className="h-6 w-6" />

        {/* Badge */}
        <Badge
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs"
        >
          {compareProducts.length}
        </Badge>

      </Button>
    </div>
  )
}