"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2, ClipboardList, ShoppingBag, Eye, Calendar, DollarSign, Truck } from "lucide-react"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import PageHeader from "@/components/shared/PageHeader"
import { apiFetch } from "@/lib/api-client"

interface OrderType {
  id: string
  status: string
  totalAmount: string | number
  shippingAddress: string
  paymentMethod: string
  paymentStatus: string
  createdAt: string
  items: any[]
}

export default function OrderHistoryPage() {
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()
  const [orders, setOrders] = useState<OrderType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth/login?redirect=/account/orders")
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (user) {
      apiFetch<OrderType[]>("/orders")
        .then((data) => setOrders(data || []))
        .catch((err) => console.error("Error loading orders:", err))
        .finally(() => setLoading(false))
    }
  }, [user])

  if (authLoading || loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        </div>
      </PageWrapper>
    )
  }

  if (!user) return null

  return (
    <PageWrapper>
      <PageHeader
        badge="My Account"
        title="Order History"
        description="View your past purchases, tracking reference status, and checkout invoice receipts"
      />

      {orders.length === 0 ? (
        <Card className="text-center py-16 max-w-md mx-auto border-2 border-dashed">
          <CardContent className="space-y-4">
            <div className="inline-flex p-4 rounded-full bg-orange-50 dark:bg-zinc-900 text-orange-500">
              <ShoppingBag className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold">No orders found</h3>
            <p className="text-sm text-muted-foreground">
              You haven&apos;t placed any orders yet. Once you make a purchase, it will appear here.
            </p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/products">Shop Tech Catalog</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {orders.map((order) => (
            <Card key={order.id} className="transition-all hover:shadow-md dark:hover:shadow-zinc-900/50">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      Order #{order.id.slice(0, 8)}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400">
                      {order.status}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {order.paymentStatus}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3.5 w-3.5" />
                      ৳{Number(order.totalAmount).toFixed(2)}
                    </span>
                    <span className="flex items-center gap-1 capitalize">
                      <Truck className="h-3.5 w-3.5" />
                      {order.paymentMethod}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {order.items?.length || 0} product(s) ordered
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                    <Link href={`/account/orders/${order.id}`}>
                      <Eye className="h-4 w-4" /> View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </PageWrapper>
  )
}
