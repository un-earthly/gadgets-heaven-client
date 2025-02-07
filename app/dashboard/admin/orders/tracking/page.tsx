import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TruckIcon, PackageSearch, MapPin, Clock, 
  Search, Filter, AlertCircle, CheckCircle 
} from 'lucide-react';

const OrderTrackingPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Order Tracking</h1>
          <p className="text-muted-foreground">Track and manage order deliveries</p>
        </div>
        <div className="flex gap-2">
          <Input 
            placeholder="Search order ID..." 
            className="w-[250px]"
            prefix={<Search className="h-4 w-4" />}
          />
          <Button>Track Order</Button>
        </div>
      </div>

      {/* Tracking Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">Active shipments</p>
              </div>
              <TruckIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Out for Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">Expected today</p>
              </div>
              <PackageSearch className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2.4d</div>
                <p className="text-xs text-muted-foreground">Transit time</p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On-Time Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">96.5%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Deliveries Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Active Deliveries</CardTitle>
              <CardDescription>Track current order shipments</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Shipments</SelectItem>
                <SelectItem value="transit">In Transit</SelectItem>
                <SelectItem value="delivery">Out for Delivery</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expected</TableHead>
                <TableHead>Tracking</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "ORD-001",
                  customer: "John Doe",
                  destination: "New York, NY",
                  carrier: "FedEx",
                  status: "in-transit",
                  expected: "2024-03-22",
                  tracking: "FX1234567890"
                },
                {
                  id: "ORD-002",
                  customer: "Jane Smith",
                  destination: "Los Angeles, CA",
                  carrier: "UPS",
                  status: "out-for-delivery",
                  expected: "2024-03-21",
                  tracking: "1Z999AA1234567890"
                },
                {
                  id: "ORD-003",
                  customer: "Bob Johnson",
                  destination: "Chicago, IL",
                  carrier: "USPS",
                  status: "delayed",
                  expected: "2024-03-23",
                  tracking: "9400123456789"
                }
              ].map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.destination}</TableCell>
                  <TableCell>{order.carrier}</TableCell>
                  <TableCell>
                    <Badge variant={
                      order.status === "in-transit" ? "default" :
                      order.status === "out-for-delivery" ? "success" : "destructive"
                    }>
                      {order.status.replace(/-/g, ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.expected}</TableCell>
                  <TableCell>
                    <span className="font-mono text-sm">{order.tracking}</span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing 3 of 156 shipments
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderTrackingPage;
