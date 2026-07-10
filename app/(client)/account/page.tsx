"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { User, LogOut, MapPin, ClipboardList, ShieldAlert } from "lucide-react";

import AddressBook from "@/components/shared/address-book";

export default function AccountPage() {
    const router = useRouter();
    const { user, logoutCustomer, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/auth/login");
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return (
            <div className="container mx-auto p-6 max-w-4xl text-center py-20">
                <p className="text-muted-foreground animate-pulse">Loading your account session...</p>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl space-y-6 py-12">
            <div className="flex justify-between items-center border-b pb-4">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight">My Account</h1>
                    <p className="text-muted-foreground">Welcome back, {user.firstName || "Customer"}</p>
                </div>
                <Button variant="destructive" onClick={() => { logoutCustomer(); router.push("/auth/login"); }} className="flex gap-2">
                    <LogOut className="h-4 w-4" /> Sign Out
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Left pane: Profile Overview */}
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <User className="h-5 w-5 text-orange-500" />
                            Personal Info
                        </CardTitle>
                        <CardDescription>Your registered details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label className="text-muted-foreground text-xs uppercase">Full Name</Label>
                            <p className="font-semibold text-sm">{user.firstName} {user.lastName}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-xs uppercase">Email Address</Label>
                            <p className="font-semibold text-sm">{user.email}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-xs uppercase">Role</Label>
                            <p className="font-semibold text-sm capitalize">{user.role}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Pane: Address Book & Orders */}
                <div className="md:col-span-2 space-y-6">
                    {/* Address Book */}
                    <Card>
                        <CardContent className="p-6">
                            <AddressBook />
                        </CardContent>
                    </Card>

                    {/* Quick Links */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <ClipboardList className="h-5 w-5 text-orange-500" />
                                Orders & Purchases
                            </CardTitle>
                            <CardDescription>Track your active orders and history</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col sm:flex-row gap-4">
                            <Link href="/account/orders" className="w-full">
                                <Button variant="outline" className="w-full justify-start text-orange-600 hover:text-orange-700">
                                    <ClipboardList className="mr-2 h-4 w-4" /> View Order History
                                </Button>
                            </Link>
                            <Link href="/track-order" className="w-full">
                                <Button variant="outline" className="w-full justify-start text-zinc-600 hover:text-zinc-700">
                                    Track Active Order
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
