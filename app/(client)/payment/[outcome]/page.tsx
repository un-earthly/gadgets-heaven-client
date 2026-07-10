"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, XCircle, AlertCircle, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import { apiFetch } from "@/lib/api-client"

export default function PaymentOutcomePage() {
  const params = useParams<{ outcome: string }>()
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const outcome = params?.outcome
  const tranId = searchParams.get("tran_id")
  
  const [resolving, setResolving] = useState(true)
  const [resolvedOrderId, setResolvedOrderId] = useState<string | null>(null)

  useEffect(() => {
    if (outcome === "success" && tranId) {
      // Fetch payments to resolve order ID
      apiFetch<any[]>("/payments")
        .then((payments) => {
          const matched = payments.find((p) => p.transactionId === tranId)
          if (matched?.orderId) {
            setResolvedOrderId(matched.orderId)
            // Redirect to confirmation screen immediately
            router.push(`/orders/${matched.orderId}/confirmation`)
          } else {
            setResolving(false)
          }
        })
        .catch((err) => {
          console.error("Error resolving payment transaction:", err)
          setResolving(false)
        })
    } else {
      setResolving(false)
    }
  }, [outcome, tranId, router])

  if (resolving) {
    return (
      <PageWrapper>
        <div className="flex flex-col justify-center items-center py-32 space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
          <p className="text-sm text-muted-foreground">Verifying payment transaction status...</p>
        </div>
      </PageWrapper>
    )
  }

  const isCancel = outcome === "cancel"

  return (
    <PageWrapper>
      <div className="max-w-md mx-auto py-16">
        <Card className="border-red-100 dark:border-red-950/20">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 inline-flex p-3 rounded-full bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400">
              {isCancel ? (
                <AlertCircle className="h-12 w-12" />
              ) : (
                <XCircle className="h-12 w-12" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold">
              {isCancel ? "Payment Cancelled" : "Payment Failed"}
            </CardTitle>
            <CardDescription className="text-sm mt-2">
              {isCancel
                ? "You cancelled the payment transaction. Your order remains pending."
                : "The payment gateway rejected the payment transaction. Please try checkout again."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/checkout">
                Try Checkout Again
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
