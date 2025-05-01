import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Calendar, AlertCircle, Box, CheckCircle, } from 'lucide-react';

const ServiceSubscriptionsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Service Subscriptions</h1>
          <p className="text-muted-foreground">Manage your active subscriptions and plans</p>
        </div>
        <Button>View All Plans</Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Services active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">April 1, 2024</div>
            <p className="text-xs text-muted-foreground">$149.98 due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Monthly</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$149.98</div>
            <p className="text-xs text-muted-foreground">All subscriptions</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Subscriptions */}
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            name: "Business Pro Plan",
            price: "$99.99/mo",
            status: "Active",
            nextBilling: "Apr 1, 2024",
            features: ["Unlimited Products", "Priority Support", "Analytics"],
            usage: 75
          },
          {
            name: "Storage Plus",
            price: "$49.99/mo",
            status: "Active",
            nextBilling: "Apr 1, 2024",
            features: ["500GB Storage", "Backup", "File Sharing"],
            usage: 45
          }
        ].map((subscription, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{subscription.name}</CardTitle>
                  <CardDescription>{subscription.price}</CardDescription>
                </div>
                <Badge>{subscription.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next billing</span>
                  <span>{subscription.nextBilling}</span>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Usage</label>
                  <Progress value={subscription.usage} />
                  <p className="text-xs text-muted-foreground text-right">{subscription.usage}% used</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Features included:</label>
                <ul className="space-y-2">
                  {subscription.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Change Plan</Button>
              <Button variant="destructive">Cancel</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Recent subscription charges</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Invoice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: "Mar 1, 2024", plan: "Business Pro", amount: "$99.99", status: "Paid" },
                { date: "Mar 1, 2024", plan: "Storage Plus", amount: "$49.99", status: "Paid" },
                { date: "Feb 1, 2024", plan: "Business Pro", amount: "$99.99", status: "Paid" }
              ].map((bill, i) => (
                <TableRow key={i}>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>{bill.plan}</TableCell>
                  <TableCell>{bill.amount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{bill.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Download</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Cancellation Notice */}
      <Card className="border-destructive">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-destructive">Cancellation Policy</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Canceling your subscription will stop future billing. You'll retain access to services
            until the end of your current billing period. No refunds are provided for unused time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceSubscriptionsPage;
