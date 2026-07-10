"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2, ArrowLeft, Calendar, DollarSign, Truck, ClipboardList, ShieldCheck } from "lucide-react"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import PageHeader from "@/components/shared/PageHeader"
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

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()
  
  const [order, setOrder] = useState<OrderType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/auth/login?redirect=/account/orders/${params?.id}`)
    }
  }, [user, authLoading, router, params?.id])

  useEffect(() => {
    if (user && params?.id) {
      apiFetch<OrderType>(`/orders/${params.id}`)
        .then((data) => setOrder(data))
        .catch((err) => {
          console.error("Error loading order:", err)
          router.push("/account/orders")
        })
        .finally(() => setLoading(false))
    }
  }, [user, params?.id, router])

  if (authLoading || loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        </div>
      </PageWrapper>
    )
  }

  if (!user || !order) return null

  const items = order.items || []

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back navigation */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="text-zinc-600 hover:text-zinc-950">
            <Link href="/account/orders" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to History
            </Link>
          </Button>
        </div>

        <PageHeader
          badge={`Order #${order.id.slice(0, 8)}`}
          title="Order Details"
          description={`Placed on ${new Date(order.createdAt).toLocaleDateString()} at ${new Date(order.createdAt).toLocaleTimeString()}`}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Items & Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-md font-semibold">Ordered Items</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                      <div>
                        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
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
                      <span className="font-medium text-zinc-950 dark:text-white">
                        ৳{Number(item.subtotal).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Subtotals */}
                <div className="space-y-2 text-sm pt-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>৳{Number(order.subtotal).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Truck className="h-4 w-4 text-zinc-400" /> Shipping (Steadfast)
                    </span>
                    <span>৳{Number(order.shippingCost).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-base pt-2">
                    <span>Grand Total</span>
                    <span className="text-orange-600 dark:text-orange-500">৳{Number(order.totalAmount).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Status Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-md font-semibold">Delivery & Status</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                {/* Status Badges */}
                <div className="space-y-3">
                  <div>
                    <span className="text-muted-foreground block mb-1">Order Status</span>
                    <span className="font-semibold uppercase tracking-wider text-[10px] bg-orange-100 dark:bg-orange-950/20 px-2.5 py-0.5 rounded text-orange-700 dark:text-orange-400">
                      {order.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Payment Status</span>
                    <span className="font-semibold uppercase tracking-wider text-[10px] bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 rounded text-zinc-700 dark:text-zinc-300">
                      {order.paymentStatus}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Payment Method</span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 capitalize">
                      {order.paymentMethod === "sslcommerz" ? "Online Payment" : order.paymentMethod}
                    </span>
                  </div>
                </div>

                <Separator />

                {/* Tracking Reference */}
                <div className="space-y-2">
                  <span className="text-muted-foreground block">Shipping Tracking Details</span>
                  {order.trackingNumber ? (
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border rounded-md font-mono">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {order.trackingNumber}
                      </p>
                      <p className="text-[10px] text-zinc-500 mt-1 capitalize">
                        Courier: {order.courierProvider}
                      </p>
                    </div>
                  ) : (
                    <p className="text-zinc-500 italic">Tracking status will be updated once shipped.</p>
                  )}
                </div>

                <Separator />

                {/* Immutable Shipping Address snapshot */}
                <div className="space-y-2">
                  <span className="text-muted-foreground block">Delivery Address</span>
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border rounded-md whitespace-pre-line leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {order.shippingAddress}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
