"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Package, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageWrapper from "@/components/shared/PageWrapper"
import PageHeader from "@/components/shared/PageHeader"

// Mock data - replace with actual cart data management
const cartItems = [
    {
        id: 1,
        name: "Smart Watch Pro",
        price: 299.99,
        quantity: 1,
        image: "/smart-watch.png",
        stock: 10
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 149.99,
        quantity: 2,
        image: "/smart-watch.png",
        stock: 15
    }
]

export default function CartPage() {
    const [items, setItems] = useState(cartItems)

    const updateQuantity = (id: number, newQuantity: number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, Math.min(newQuantity, item.stock)) } : item
        ))
    }

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id))
    }

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shipping = 9.99
    const total = subtotal + shipping

    if (items.length === 0) {
        return (
            <PageWrapper>
                <div className="py-12 text-center">
                    <div className="mb-6">
                        <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                    <p className="text-muted-foreground mb-8">
                        Looks like you haven't added anything to your cart yet
                    </p>
                    <Button asChild>
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
                    {items.map((item) => (
                        <Card key={item.id}>
                            <CardContent className="flex gap-4 p-4">
                                <div className="relative h-24 w-24 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">${item.price.toFixed(2)} each</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </Button>
                                            <span className="w-12 text-center">{item.quantity}</span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                disabled={item.quantity >= item.stock}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Order Summary */}
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                                <CreditCard className="mr-2 h-4 w-4" />
                                Checkout
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/products">
                                    <Package className="mr-2 h-4 w-4" />
                                    Continue Shopping
                                </Link>
                            </Button>
                        </div>

                        <div className="text-sm text-muted-foreground">
                            <p>Free shipping on orders over $50</p>
                            <p>30-day easy returns</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PageWrapper>
    )
} 