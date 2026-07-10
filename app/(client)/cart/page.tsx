"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Loader2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import PageHeader from "@/components/shared/PageHeader"
import { fetchCart, updateCartItem, removeCartItem } from "@/lib/api/products"

interface CartItem {
  id: string
  productId: string
  variantId: string | null
  quantity: number
  unitPrice: string | number
  subtotal: string | number
  product: {
    name: string
    images: string[] | null
    price: string | number
    stockQuantity: number
  }
}

interface CartType {
  id: string
  items: CartItem[]
  subtotal: string | number
  tax: string | number
  total: string | number
  discount: string | number
}

export default function CartPage() {
  const [cart, setCart] = useState<CartType | null>(null)
  const [loading, setLoading] = useState(true)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const loadCart = () => {
    fetchCart()
      .then((data) => {
        setCart(data as CartType)
      })
      .catch((err) => console.error("Error loading cart:", err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadCart()
  }, [])

  const handleUpdateQuantity = async (itemId: string, currentQty: number, change: number, maxStock: number) => {
    const newQty = currentQty + change
    if (newQty < 1 || newQty > maxStock) return

    setUpdatingId(itemId)
    try {
      const updated = await updateCartItem(itemId, newQty)
      setCart(updated as CartType)
    } catch (err) {
      console.error("Failed to update item quantity:", err)
    } finally {
      setUpdatingId(null)
    }
  }

  const handleRemoveItem = async (itemId: string) => {
    setUpdatingId(itemId)
    try {
      const updated = await removeCartItem(itemId)
      setCart(updated as CartType)
    } catch (err) {
      console.error("Failed to remove item:", err)
    } finally {
      setUpdatingId(null)
    }
  }

  if (loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        </div>
      </PageWrapper>
    )
  }

  const items = cart?.items || []
  const subtotal = Number(cart?.subtotal || 0)
  const tax = Number(cart?.tax || 0)
  const discount = Number(cart?.discount || 0)
  const total = Number(cart?.total || 0)

  if (items.length === 0) {
    return (
      <PageWrapper>
        <div className="py-24 text-center max-w-md mx-auto">
          <div className="mb-6 inline-flex p-4 rounded-full bg-orange-50 dark:bg-zinc-900 text-orange-500">
            <ShoppingCart className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Explore our collection of premium gadgets and tech accessories to add items to your cart.
          </p>
          <Button asChild size="lg">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <PageHeader
        badge="Shopping Cart"
        title="Your Cart"
        description="Review and manage your selected items"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const product = item.product
            const images = product?.images?.length ? product.images : ["/placeholder.png"]
            const maxStock = product?.stockQuantity || 10

            return (
              <Card key={item.id} className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-zinc-900/50">
                <CardContent className="flex gap-4 p-4 relative">
                  {updatingId === item.id && (
                    <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
                      <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
                    </div>
                  )}

                  <div className="relative h-24 w-24 flex-shrink-0 bg-zinc-50 dark:bg-zinc-900 rounded-md overflow-hidden border">
                    <Image
                      src={images[0]}
                      alt={product?.name || "Product"}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                          {product?.name || "Product"}
                        </h3>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ৳{Number(item.subtotal).toFixed(2)}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        ৳{Number(item.unitPrice).toFixed(2)} each
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity, -1, maxStock)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="w-12 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity, 1, maxStock)}
                          disabled={item.quantity >= maxStock}
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-zinc-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">৳{subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                    <span>Discount</span>
                    <span>-৳{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span className="font-medium">৳{tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>৳{total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  )
}