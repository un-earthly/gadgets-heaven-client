"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2, ShieldCheck, MapPin, Truck, CreditCard } from "lucide-react"
import PageWrapper from "@/components/shared/PageWrapper"
import PageHeader from "@/components/shared/PageHeader"
import AddressBook from "@/components/shared/address-book"
import { fetchCart } from "@/lib/api/products"
import { apiFetch } from "@/lib/api-client"

interface Address {
  id: string
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode?: string
  country: string
  phoneNumber: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()
  
  const [cart, setCart] = useState<any>(null)
  const [cartLoading, setCartLoading] = useState(true)
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"sslcommerz" | "cod">("sslcommerz")
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/auth/login?redirect=/checkout`)
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (user) {
      fetchCart()
        .then((data: any) => {
          setCart(data)
          if (!data || !data.items || data.items.length === 0) {
            router.push("/cart")
          }
        })
        .catch((err) => console.error("Error loading cart:", err))
        .finally(() => setCartLoading(false))
    }
  }, [user, router])

  if (authLoading || cartLoading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        </div>
      </PageWrapper>
    )
  }

  if (!user || !cart || !cart.items || cart.items.length === 0) {
    return null
  }

  const subtotal = Number(cart.subtotal || 0)
  const shippingCost = 100
  const tax = Number(cart.tax || 0)
  const total = subtotal + shippingCost + tax

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      setErrorMessage("Please select a shipping address.")
      return
    }

    setIsPlacingOrder(true)
    setErrorMessage(null)

    try {
      // 1. Create the order
      const order = await apiFetch<any>("/orders/checkout", {
        method: "POST",
        body: JSON.stringify({
          cartId: cart.id,
          addressId: selectedAddress.id,
          paymentMethod,
        }),
      })

      if (paymentMethod === "cod") {
        // Direct confirmation for Cash on Delivery
        router.push(`/orders/${order.id}/confirmation`)
      } else {
        // Online hosted checkout redirect
        const paymentSession = await apiFetch<{ redirectUrl: string }>("/payments/initiate", {
          method: "POST",
          body: JSON.stringify({
            orderId: order.id,
            name: `${selectedAddress.firstName} ${selectedAddress.lastName}`,
            phone: selectedAddress.phoneNumber,
          }),
        })

        if (paymentSession?.redirectUrl) {
          window.location.href = paymentSession.redirectUrl
        } else {
          throw new Error("Could not retrieve payment gateway redirect link.")
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to process checkout. Please try again.")
      setIsPlacingOrder(false)
    }
  }

  return (
    <PageWrapper>
      <PageHeader
        badge="Checkout"
        title="Secure Checkout"
        description="Verify your delivery details and choose a payment option to complete your purchase"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Columns - Address & Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                Shipping Address
              </CardTitle>
              <CardDescription>Select an address below or add a new one</CardDescription>
            </CardHeader>
            <CardContent>
              <AddressBook
                onSelect={(addr) => {
                  setSelectedAddress(addr)
                  setErrorMessage(null)
                }}
                selectedId={selectedAddress?.id}
              />
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-orange-500" />
                Payment Method
              </CardTitle>
              <CardDescription>Select your preferred payment option</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {/* SSLCommerz Online Payment */}
                <label
                  className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "sslcommerz"
                      ? "border-orange-500 bg-orange-50/50 dark:bg-orange-950/10 ring-2 ring-orange-500/10"
                      : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="sslcommerz"
                    checked={paymentMethod === "sslcommerz"}
                    onChange={() => setPaymentMethod("sslcommerz")}
                    className="mt-1 text-orange-600 focus:ring-orange-500"
                  />
                  <div>
                    <span className="font-semibold text-sm block">Pay Online</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      Pay securely via cards, mobile banking (bKash, Nagad), or internet banking (SSLCommerz gateway)
                    </span>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-orange-500 bg-orange-50/50 dark:bg-orange-950/10 ring-2 ring-orange-500/10"
                      : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-1 text-orange-600 focus:ring-orange-500"
                  />
                  <div>
                    <span className="font-semibold text-sm block">Cash on Delivery (COD)</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      Pay with cash when your shipment is delivered by the courier to your doorstep
                    </span>
                  </div>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Order Summary */}
        <div className="space-y-4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {cart.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-xs">
                    <span className="text-zinc-600 dark:text-zinc-400 line-clamp-1 max-w-[200px]">
                      {item.product?.name} <span className="font-medium">x{item.quantity}</span>
                    </span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      ৳{Number(item.subtotal).toFixed(2)}
                    </span>
                  </div>
                ))}

                <Separator className="my-2" />

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">৳{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Truck className="h-4 w-4 text-zinc-400" /> Shipping (Steadfast)
                  </span>
                  <span className="font-medium">৳{shippingCost.toFixed(2)}</span>
                </div>
                {tax > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span className="font-medium">৳{tax.toFixed(2)}</span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>৳{total.toFixed(2)}</span>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 text-xs rounded-md border border-red-100 dark:border-red-900/50">
                  {errorMessage}
                </div>
              )}

              <Button
                className="w-full bg-orange-600 hover:bg-orange-700"
                size="lg"
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Place Order
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  )
}
