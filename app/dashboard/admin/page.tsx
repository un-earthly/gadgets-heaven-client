"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowUp, ShoppingCart, Package } from 'lucide-react';
import { fetchDashboardMetrics, DashboardMetrics } from '@/lib/api/admin-dashboard';
import Link from 'next/link';

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardMetrics()
      .then(setMetrics)
      .catch((err) => setError(err.message || 'Failed to fetch metrics'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="p-6 text-red-600 font-medium">
        Error loading dashboard: {error}
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Operations Dashboard</h1>
          <p className="text-muted-foreground">Real-time overview of your store operations</p>
        </div>
      </div>

      {/* Priority Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-yellow-50/50 dark:bg-yellow-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today&apos;s Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">{metrics.todayOrderCount}</div>
              <Badge variant="secondary">Today</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50/50 dark:bg-blue-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Week&apos;s Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">{metrics.weekOrderCount}</div>
              <Badge variant="outline">Weekly</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50/50 dark:bg-green-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today&apos;s Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">৳{metrics.todayRevenue.toFixed(2)}</div>
              <div className="flex items-center text-green-600 text-xs font-semibold">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                <span>Today</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50/50 dark:bg-purple-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Weekly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">৳{metrics.weekRevenue.toFixed(2)}</div>
              <div className="flex items-center text-purple-600 text-xs font-semibold">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                <span>This Week</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Inventory Alert */}
        <Card className="border-red-100 dark:border-red-950">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-400">Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-red-600 dark:text-red-400">
                  {metrics.lowStockProductCount}
                </p>
                <p className="text-sm text-muted-foreground">
                  Products are low on stock (stock quantity ≤ 5)
                </p>
              </div>
              <Package className="h-8 w-8 text-red-500" />
            </div>
            <Link href="/dashboard/admin/inventory/products" passHref>
              <Button className="w-full mt-2" variant="outline">
                Manage Inventory
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Order Action Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">{metrics.weekOrderCount}</p>
                <p className="text-sm text-muted-foreground">
                  Total active shipments and bookings this week
                </p>
              </div>
              <ShoppingCart className="h-8 w-8 text-zinc-500" />
            </div>
            <Link href="/dashboard/admin/orders/tracking" passHref>
              <Button className="w-full mt-2">
                Manage Orders
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
