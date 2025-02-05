import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Package, Upload, Download, Calculator, FileText, TrendingUp, Truck, Clock } from 'lucide-react';

const bulkOrders = [
  {
    id: "BO-2024-001",
    product: "LED Monitors - 27inch",
    quantity: 50,
    totalPrice: 15000,
    status: "Processing",
    deliveryDate: "2024-04-15",
    paymentTerms: "Net 30"
  },
  {
    id: "BO-2024-002",
    product: "Wireless Keyboards",
    quantity: 100,
    totalPrice: 5000,
    status: "Confirmed",
    deliveryDate: "2024-04-20",
    paymentTerms: "Net 45"
  }
];

const BulkOrdersB2BPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">B2B Bulk Orders</h1>
          <p className="text-muted-foreground">Manage your wholesale and bulk purchases</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Order List
          </Button>
          <Button>
            <Package className="mr-2 h-4 w-4" />
            New Bulk Order
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$20,000</div>
            <p className="text-xs text-muted-foreground">Current orders value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Delivery</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Scheduled this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5-7 days</div>
            <p className="text-xs text-muted-foreground">Average processing</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Order Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Order Calculator</CardTitle>
          <CardDescription>Calculate bulk pricing and discounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium">Product</label>
              <Input placeholder="Select product" />
            </div>
            <div>
              <label className="text-sm font-medium">Quantity</label>
              <Input type="number" placeholder="Enter quantity" />
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Price
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Bulk Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Active Bulk Orders</CardTitle>
          <CardDescription>Monitor your current bulk order status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery Date</TableHead>
                <TableHead>Payment Terms</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bulkOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>${order.totalPrice}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Confirmed" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.deliveryDate}</TableCell>
                  <TableCell>{order.paymentTerms}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <FileText className="h-8 w-8 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Bulk Order Guide</h3>
                <p className="text-sm text-muted-foreground">Download our comprehensive guide</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Calculator className="h-8 w-8 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Pricing Tiers</h3>
                <p className="text-sm text-muted-foreground">View volume-based discounts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Download className="h-8 w-8 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Order Template</h3>
                <p className="text-sm text-muted-foreground">Download bulk order template</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BulkOrdersB2BPage;
