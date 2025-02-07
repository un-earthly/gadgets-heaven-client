import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Package, ShoppingCart, Wrench, DollarSign, Users, 
  AlertCircle, CheckCircle, Clock, ArrowUp, ArrowDown 
} from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header with Quick Stats */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Operations Dashboard</h1>
          <p className="text-muted-foreground">Real-time overview of business operations</p>
        </div>
        <Button>Generate Report</Button>
      </div>

      {/* Priority Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-yellow-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">45</div>
              <Badge variant="secondary">Needs Action</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">12</div>
              <Badge variant="destructive">Critical</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Service Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">28</div>
              <Badge variant="outline">Active</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">$12,450</div>
              <div className="flex items-center text-green-600">
                <ArrowUp className="h-4 w-4" />
                <span>18%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Operations Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Order Processing */}
        <Card>
          <CardHeader>
            <CardTitle>Order Processing</CardTitle>
            <CardDescription>Current order status distribution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>New Orders</span>
                <span>24</span>
              </div>
              <Progress value={40} className="bg-blue-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing</span>
                <span>18</span>
              </div>
              <Progress value={30} className="bg-yellow-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Ready for Shipment</span>
                <span>12</span>
              </div>
              <Progress value={20} className="bg-green-100" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Orders</Button>
          </CardFooter>
        </Card>

        {/* Service Management */}
        <Card>
          <CardHeader>
            <CardTitle>Service Requests</CardTitle>
            <CardDescription>Active service queue status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service Type</TableHead>
                  <TableHead>Queue</TableHead>
                  <TableHead>Wait Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Repairs</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>~2 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Installations</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>~1 hour</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Consultations</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>~30 mins</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Manage Services</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest system events and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "2 mins ago", event: "New order #1234 received", type: "order" },
              { time: "15 mins ago", event: "Inventory alert: iPhone 13 Pro (5 units left)", type: "inventory" },
              { time: "45 mins ago", event: "Service completed for ticket #ST892", type: "service" },
              { time: "1 hour ago", event: "Bulk order approved for Business Client", type: "order" }
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-2 rounded hover:bg-accent">
                <div className={`p-2 rounded ${
                  activity.type === 'order' ? 'bg-blue-100' :
                  activity.type === 'inventory' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  {activity.type === 'order' ? <ShoppingCart className="h-4 w-4" /> :
                   activity.type === 'inventory' ? <Package className="h-4 w-4" /> :
                   <Wrench className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.event}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
