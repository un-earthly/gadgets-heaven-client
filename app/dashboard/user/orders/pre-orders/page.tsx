import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, CreditCard, Package, Filter, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const preOrders = [
  {
    id: 1,
    product: "PlayStation 6",
    image: "/images/ps6.jpg",
    price: 599.99,
    releaseDate: "2024-12-15",
    status: "Confirmed",
    paymentStatus: "Partial",
    depositPaid: 99.99,
    remaining: 500.00
  },
  {
    id: 2,
    product: "iPhone 16 Pro",
    image: "/images/iphone16.jpg",
    price: 1299.99,
    releaseDate: "2024-09-20",
    status: "Pending",
    paymentStatus: "Not Paid",
    depositPaid: 0,
    remaining: 1299.99
  }
];

const PreOrdersPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Pre-Orders</h1>
          <p className="text-muted-foreground">Manage your upcoming product reservations</p>
        </div>
        <Button>
          <Package className="mr-2 h-4 w-4" />
          Browse Pre-Order Items
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Pre-Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reserved</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,899.98</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Releases</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Deposit Paid</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$99.99</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pre-orders..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Pre-Orders Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {preOrders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <div className="flex gap-4 p-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <Package className="h-12 w-12 text-gray-400" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{order.product}</h3>
                    <p className="text-sm text-muted-foreground">
                      Release Date: {order.releaseDate}
                    </p>
                  </div>
                  <Badge variant={order.status === "Confirmed" ? "default" : "secondary"}>
                    {order.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Total Price:</span>
                    <span className="font-medium">${order.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Deposit Paid:</span>
                    <span className="font-medium">${order.depositPaid}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Remaining:</span>
                    <span className="font-medium">${order.remaining}</span>
                  </div>
                </div>
                <div className="pt-4 flex gap-2">
                  <Button className="flex-1" variant="outline">View Details</Button>
                  {order.paymentStatus === "Not Paid" && (
                    <Button className="flex-1">Pay Deposit</Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {preOrders.length === 0 && (
        <Card className="p-12 text-center">
          <div className="space-y-4">
            <Package className="h-12 w-12 text-muted-foreground mx-auto" />
            <h3 className="text-lg font-medium">No Pre-Orders Yet</h3>
            <p className="text-muted-foreground">
              Browse our upcoming products and secure your pre-order today.
            </p>
            <Button>Browse Products</Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default PreOrdersPage;
