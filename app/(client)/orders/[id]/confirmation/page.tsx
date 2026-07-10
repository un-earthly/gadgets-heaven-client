"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Loader2, ClipboardList, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import { apiFetch } from "@/lib/api-client"

interface OrderItem {
  productId: string
  quantity: number
  price: number
  name: string
  subtotal: number
  variantAttributes?: Record<string, string>
}

interface OrderType {
  id: string
  status: string
  subtotal: string | number
  shippingCost: string | number
  totalAmount: string | number
  shippingAddress: string
  paymentMethod: string
  paymentStatus: string
  trackingNumber?: string
  courierProvider?: string
  items: OrderItem[]
  createdAt: string
}

export default function OrderConfirmationPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const [order, setOrder] = useState<OrderType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params?.id) {
      apiFetch<OrderType>(`/orders/${params.id}`)
        .then((data) => setOrder(data))
        .catch((err) => {
          console.error("Error loading order confirmation:", err)
          router.push("/products")
        })
        .finally(() => setLoading(false))
    }
  }, [params?.id, router])

  if (loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        </div>
      </PageWrapper>
    )
  }

  if (!order) {
    return null
  }

  const items = order.items || []

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto py-12 space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-3">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold tracking-tight">Order Placed Successfully!</h1>
          <p className="text-muted-foreground text-sm">
            Thank you for shopping with us. Your order <span className="font-semibold text-zinc-900 dark:text-zinc-100">#{order.id.slice(0, 8)}</span> has been recorded.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Order Details */}
          <Card>
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-md font-semibold flex justify-between items-center">
                <span>Receipt Summary</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              {/* Items */}
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">
                        {item.name}
                      </p>
                      {item.variantAttributes && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {Object.entries(item.variantAttributes)
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(", ")}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">
                        ৳{Number(item.price).toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <span className="font-medium">৳{Number(item.subtotal).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Price Calculation */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>৳{Number(order.subtotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping (Steadfast)</span>
                  <span>৳{Number(order.shippingCost).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-2 border-t">
                  <span>Total Paid</span>
                  <span className="text-orange-600 dark:text-orange-500">৳{Number(order.totalAmount).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery & Payment Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Delivery address snapshot */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5 text-muted-foreground">
                  <Truck className="h-4 w-4" /> Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1 text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {order.shippingAddress}
              </CardContent>
            </Card>

            {/* Payment status and courier */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5 text-muted-foreground">
                  <ClipboardList className="h-4 w-4" /> Order Info
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-3">
                <div>
                  <span className="text-muted-foreground block">Payment Status</span>
                  <span className="font-semibold uppercase tracking-wider text-[10px] bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-700 dark:text-zinc-300">
                    {order.paymentStatus}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Order Status</span>
                  <span className="font-semibold uppercase tracking-wider text-[10px] bg-orange-100 dark:bg-orange-950/20 px-2 py-0.5 rounded text-orange-700 dark:text-orange-400">
                    {order.status}
                  </span>
                </div>
                {order.trackingNumber && (
                  <div>
                    <span className="text-muted-foreground block">Steadfast Tracking Code</span>
                    <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                      {order.trackingNumber}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button asChild variant="outline" className="flex gap-2">
            <Link href="/account">
              <ClipboardList className="h-4 w-4" />
              View My Orders
            </Link>
          </Button>
          <Button asChild className="flex gap-2 bg-orange-600 hover:bg-orange-700">
            <Link href="/products">
              <ShoppingBag className="h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  )
}
