import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Zap, Plus, Calendar, DollarSign,
  Users,
  Package
} from 'lucide-react';

const FlashSalesPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Flash Sales</h1>
          <p className="text-muted-foreground">Manage time-limited promotional sales</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Flash Sale
        </Button>
      </div>

      {/* Flash Sale Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Currently running</p>
              </div>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$45,289</div>
                <p className="text-xs text-muted-foreground">From flash sales</p>
              </div>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">On sale</p>
              </div>
              <Package className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Participants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2,450</div>
                <p className="text-xs text-muted-foreground">Unique buyers</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Flash Sales */}
      <Card>
        <CardHeader>
          <CardTitle>Active & Upcoming Sales</CardTitle>
          <CardDescription>Monitor ongoing and scheduled flash sales</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sale Name</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Spring Flash",
                  products: 45,
                  discount: "30%",
                  start: "2024-03-21 09:00",
                  end: "2024-03-21 21:00",
                  progress: 75,
                  status: "active"
                },
                {
                  name: "Weekend Special",
                  products: 68,
                  discount: "25%",
                  start: "2024-03-23 00:00",
                  end: "2024-03-24 23:59",
                  progress: 0,
                  status: "scheduled"
                },
                {
                  name: "Tech Deals",
                  products: 43,
                  discount: "40%",
                  start: "2024-03-21 10:00",
                  end: "2024-03-21 18:00",
                  progress: 85,
                  status: "active"
                }
              ].map((sale, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{sale.name}</TableCell>
                  <TableCell>{sale.products} items</TableCell>
                  <TableCell>{sale.discount}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm">Start: {sale.start}</div>
                      <div className="text-sm">End: {sale.end}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Progress value={sale.progress} />
                      <span className="text-xs text-muted-foreground">
                        {sale.progress}% complete
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      sale.status === "active" ? "default" : "secondary"
                    }>
                      {sale.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Performance Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription>Revenue and order metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Spring Flash", revenue: 15420, orders: 245 },
                { label: "Tech Deals", revenue: 28450, orders: 412 }
              ].map((sale, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{sale.label}</span>
                    <span>${sale.revenue.toLocaleString()}</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    {sale.orders} orders placed
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
            <CardDescription>Next 7 days flash sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Weekend Special", date: "Mar 23-24", products: 68 },
                { name: "Mobile Mania", date: "Mar 25", products: 35 },
                { name: "Gadget Sale", date: "Mar 27", products: 42 }
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{event.products} products</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlashSalesPage;
