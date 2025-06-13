import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Users, Clock, MousePointer, TrendingUp,
  Download, ArrowUpRight
} from 'lucide-react';

const UserBehaviorPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">User Behavior Analysis</h1>
          <p className="text-muted-foreground">Track user engagement and patterns</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24,582</div>
                <p className="text-xs flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  12.5% vs last month
                </p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">8m 45s</div>
                <p className="text-xs flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  5.2% vs last month
                </p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">3.8%</div>
                <p className="text-xs text-green-600">+0.5% vs last month</p>
              </div>
              <MousePointer className="h-4 w-4 text-muted-foreground" />

            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">68.2%</div>
                <p className="text-xs text-green-600">+2.1% vs last month</p>
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Engagement */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feature Usage</CardTitle>
            <CardDescription>Most used platform features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { feature: "Product Search", usage: 85, users: 20450 },
                { feature: "Cart Management", usage: 65, users: 15680 },
                { feature: "Wishlist", usage: 45, users: 10920 }
              ].map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{feature.feature}</span>
                    <span>{feature.users.toLocaleString()} users</span>
                  </div>
                  <Progress value={feature.usage} />
                  <p className="text-xs text-muted-foreground">
                    {feature.usage}% engagement rate
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Flow</CardTitle>
            <CardDescription>Common user navigation patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Path</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Conversion</TableHead>
                  <TableHead>Bounce Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { path: "Home → Product → Cart", users: 12450, conversion: 4.2, bounce: 25 },
                  { path: "Search → Product → Cart", users: 8920, conversion: 3.8, bounce: 30 },
                  { path: "Category → Product → Cart", users: 6840, conversion: 3.5, bounce: 28 }
                ].map((flow, i) => (
                  <TableRow key={i}>
                    <TableCell>{flow.path}</TableCell>
                    <TableCell>{flow.users.toLocaleString()}</TableCell>
                    <TableCell>{flow.conversion}%</TableCell>
                    <TableCell>{flow.bounce}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>User Activity Timeline</CardTitle>
          <CardDescription>Recent user interactions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { event: "Product View", details: "iPhone 15 Pro", users: 450, time: "5 minutes ago" },
              { event: "Add to Cart", details: "MacBook Air M3", users: 280, time: "15 minutes ago" },
              { event: "Purchase", details: "AirPods Pro", users: 125, time: "30 minutes ago" }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{activity.event}</p>
                  <p className="text-sm text-muted-foreground">{activity.details}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{activity.users} users</p>
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

export default UserBehaviorPage;
