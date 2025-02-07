import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, DollarSign, Trash2, Eye, Settings, LineChart, ArrowDown, AlertTriangle } from 'lucide-react';

const PriceDropAlertsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Price Drop Alerts</h1>
          <p className="text-muted-foreground">Monitor prices and get notified of drops</p>
        </div>
        <Button>
          <Eye className="mr-2 h-4 w-4" />
          Add Product to Watch
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Products watched</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Price Drops</CardTitle>
            <ArrowDown className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$345</div>
            <p className="text-xs text-muted-foreground">If targets met</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alert Settings</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">All On</div>
            <p className="text-xs text-muted-foreground">Email & Push</p>
          </CardContent>
        </Card>
      </div>

      {/* Watched Products */}
      <Card>
        <CardHeader>
          <CardTitle>Watched Products</CardTitle>
          <CardDescription>Products you're tracking for price drops</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>Target Price</TableHead>
                <TableHead>Lowest Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { 
                  name: "MacBook Pro M3",
                  current: 1999.99,
                  target: 1799.99,
                  lowest: 1899.99,
                  status: "Watching"
                },
                {
                  name: "iPhone 15 Pro",
                  current: 899.99,
                  target: 849.99,
                  lowest: 879.99,
                  status: "Price Drop!"
                }
              ].map((product, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>${product.current}</TableCell>
                  <TableCell>${product.target}</TableCell>
                  <TableCell>${product.lowest}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === "Price Drop!" ? "destructive" : "secondary"}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <LineChart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Alert Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Customize how you receive alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Email Notifications</label>
                <p className="text-sm text-muted-foreground">Receive price alerts via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Push Notifications</label>
                <p className="text-sm text-muted-foreground">Get alerts on your device</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Daily Digest</label>
                <p className="text-sm text-muted-foreground">Summary of price changes</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert History</CardTitle>
            <CardDescription>Recent price drop notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { product: "iPhone 15 Pro", drop: "-$50", date: "2 hours ago" },
              { product: "MacBook Pro M3", drop: "-$100", date: "1 day ago" }
            ].map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-2 border rounded">
                <div>
                  <p className="font-medium">{alert.product}</p>
                  <p className="text-sm text-muted-foreground">{alert.date}</p>
                </div>
                <Badge variant="destructive">{alert.drop}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PriceDropAlertsPage;
