"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react"
import {
  ApiProduct,
  fetchProduct,
  variantPrice,
  addToCart,
} from "@/lib/api/products"
import VariantSelector, {
  findMatchingVariant,
  isSelectionComplete,
} from "@/components/product/variant-selector"

export default function ApiProductDetail({ productId }: { productId: string }) {
  const [product, setProduct] = useState<ApiProduct | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const [addedMessage, setAddedMessage] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetchProduct(productId)
      .then((p) => {
        if (!cancelled) setProduct(p)
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message)
      })
    return () => {
      cancelled = true
    }
  }, [productId])

  const hasVariants = (product?.variants?.length ?? 0) > 0
  const selectedVariant = useMemo(
    () =>
      product && hasVariants
        ? findMatchingVariant(product.variants, selected)
        : null,
    [product, hasVariants, selected],
  )
  const selectionComplete =
    !hasVariants ||
    (product ? isSelectionComplete(product.variants, selected) : false)

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <AlertCircle className="h-10 w-10 mx-auto text-red-500 mb-4" />
        <p className="text-lg font-medium">Product could not be loaded</p>
        <p className="text-sm text-zinc-500 mt-1">{error}</p>
        <Button asChild className="mt-6">
          <Link href="/products">Back to products</Link>
        </Button>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </div>
    )
  }

  const price = variantPrice(product, selectedVariant)
  const availableStock = hasVariants
    ? (selectedVariant?.stockQuantity ?? null)
    : product.stockQuantity

  // Variant-specific out-of-stock is distinct from whole-product out-of-stock
  const allVariantsOut =
    hasVariants && product.variants.every((v) => v.stockQuantity <= 0)
  const productOut = hasVariants
    ? allVariantsOut
    : product.stockQuantity <= 0 || product.status === "out_of_stock"
  const selectedOut =
    hasVariants && selectionComplete && (selectedVariant?.stockQuantity ?? 0) <= 0

  const canAddToCart =
    !productOut && selectionComplete && !selectedOut && quantity > 0

  const handleAddToCart = async () => {
    setAdding(true)
    setAddedMessage(null)
    try {
      await addToCart({
        productId: product.id,
        variantId: selectedVariant?.id,
        quantity,
      })
      setAddedMessage("Added to cart")
    } catch (e) {
      setAddedMessage(e instanceof Error ? e.message : "Could not add to cart")
    } finally {
      setAdding(false)
    }
  }

  const images = product.images?.length ? product.images : ["/placeholder.png"]

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-zinc-600 mb-8">
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-orange-600">
          Products
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.brand && <Badge variant="outline">{product.brand}</Badge>}
              {productOut ? (
                <Badge variant="destructive">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Out of Stock
                </Badge>
              ) : (
                <Badge variant="default" className="bg-green-500">
                  <Check className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              )}
              {hasVariants && !productOut && (
                <Badge variant="secondary">Multiple options</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-zinc-500">
                ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-3xl font-bold text-[var(--brand-primary,#ea580c)]">
            ৳{price.toFixed(2)}
          </div>

          {hasVariants && (
            <VariantSelector
              variants={product.variants}
              selected={selected}
              onChange={setSelected}
            />
          )}

          {hasVariants && !selectionComplete && (
            <p className="text-sm text-zinc-500">
              Select options to see availability
            </p>
          )}
          {selectedOut && (
            <p className="text-sm text-red-600 font-medium">
              This option is out of stock — try another combination
            </p>
          )}
          {selectionComplete && !selectedOut && availableStock !== null && (
            <p className="text-sm text-zinc-500">{availableStock} available</p>
          )}

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 min-w-[3rem] text-center">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setQuantity((q) =>
                    availableStock !== null
                      ? Math.min(availableStock, q + 1)
                      : q + 1,
                  )
                }
                disabled={availableStock !== null && quantity >= availableStock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              className="flex-1"
              size="lg"
              disabled={!canAddToCart || adding}
              onClick={handleAddToCart}
            >
              {adding ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <ShoppingCart className="h-4 w-4 mr-2" />
              )}
              {productOut
                ? "Out of Stock"
                : selectedOut
                  ? "Option Unavailable"
                  : "Add to Cart"}
            </Button>
          </div>
          {addedMessage && (
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {addedMessage}
            </p>
          )}

          <Card>
            <CardContent className="p-6">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
