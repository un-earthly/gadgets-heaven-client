import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Users, ShoppingBag, Activity, UserCheck,
  Filter, Settings, MoreHorizontal
} from 'lucide-react';

const CustomerAccountsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Customer Accounts</h1>
          <p className="text-muted-foreground">Manage customer profiles and activity</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Search customers..."
            className="w-[300px]"

          />
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">15,842</div>
                <p className="text-xs text-muted-foreground">Active accounts</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">284</div>
                <p className="text-xs text-green-600">+12% this month</p>
              </div>
              <UserCheck className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">3.5</div>
                <p className="text-xs text-muted-foreground">Per customer</p>
              </div>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-muted-foreground">Online users</p>
              </div>
              <Activity className="h-4 w-4 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>View and manage customer accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "John Doe",
                  email: "john@example.com",
                  orders: 12,
                  spent: 1245.50,
                  lastActive: "2 hours ago",
                  status: "active"
                },
                {
                  name: "Jane Smith",
                  email: "jane@example.com",
                  orders: 8,
                  spent: 845.20,
                  lastActive: "1 day ago",
                  status: "active"
                },
                {
                  name: "Bob Johnson",
                  email: "bob@example.com",
                  orders: 3,
                  spent: 245.80,
                  lastActive: "1 week ago",
                  status: "inactive"
                }
              ].map((customer, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>${customer.spent.toFixed(2)}</TableCell>
                  <TableCell>{customer.lastActive}</TableCell>
                  <TableCell>
                    <Badge variant="default">
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest customer actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Placed Order", customer: "John Doe", details: "Order #12345", time: "5 min ago" },
                { action: "Updated Profile", customer: "Jane Smith", details: "Changed shipping address", time: "2 hours ago" },
                { action: "Account Created", customer: "Bob Johnson", details: "New registration", time: "1 day ago" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.customer} • {activity.details}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>User categorization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { segment: "Regular Customers", count: 8450, growth: "+5%" },
                { segment: "New Users", count: 2840, growth: "+12%" },
                { segment: "VIP Members", count: 945, growth: "+3%" }
              ].map((segment, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{segment.segment}</p>
                    <p className="text-sm text-muted-foreground">{segment.count} users</p>
                  </div>
                  <Badge variant="outline">{segment.growth}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerAccountsPage;
