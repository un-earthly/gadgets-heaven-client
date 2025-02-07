import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Heart, Bell, Eye, Share2, Trash2, AlertCircle, ShoppingCart, Settings } from 'lucide-react';

const WishlistAlertsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Wishlist Alerts</h1>
          <p className="text-muted-foreground">Track your favorite items and get notified</p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Alert Settings
        </Button>
      </div>

      {/* Alert Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Watched Items</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Active items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Price Alerts</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active alerts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Back in Stock</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Items tracked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Shared Lists</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Active shares</p>
          </CardContent>
        </Card>
      </div>

      {/* Wishlist Items */}
      <Card>
        <CardHeader>
          <CardTitle>Watched Items</CardTitle>
          <CardDescription>Items you're tracking for updates</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>Target Price</TableHead>
                <TableHead>Stock Status</TableHead>
                <TableHead>Alert Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "MacBook Air M3",
                  price: "$1299",
                  target: "$1199",
                  stock: "In Stock",
                  alert: "Price Drop"
                },
                {
                  name: "AirPods Pro 2",
                  price: "$249",
                  target: "$219",
                  stock: "Low Stock",
                  alert: "Both"
                },
                {
                  name: "iPad Pro 12.9",
                  price: "$1099",
                  target: "$999",
                  stock: "Out of Stock",
                  alert: "Stock"
                }
              ].map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.target}</TableCell>
                  <TableCell>
                    <Badge variant={
                      item.stock === "In Stock" ? "default" :
                        item.stock === "Low Stock" ? "secondary" : "destructive"
                    }>
                      {item.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.alert}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
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
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Customize your alert preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Price Drop Alerts</label>
                <p className="text-sm text-muted-foreground">Get notified of price reductions</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Back in Stock</label>
                <p className="text-sm text-muted-foreground">Alerts when items are available</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Low Stock Warnings</label>
                <p className="text-sm text-muted-foreground">Notify when stock is running low</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Your latest wishlist alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "Price Drop", item: "MacBook Air M3", message: "Price dropped by $100", time: "2h ago" },
              { type: "Low Stock", item: "AirPods Pro 2", message: "Only 3 left in stock", time: "5h ago" }
            ].map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">{alert.item}</p>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{alert.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WishlistAlertsPage;
