import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { CreditCard, DollarSign, AlertTriangle, Users, Calendar, Search, ArrowUpDown, Filter } from 'lucide-react';

const InstallmentPlansPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Installment Plans Management</h1>
          <p className="text-muted-foreground">Monitor and manage customer installment plans</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>New Plan</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">1,234</div>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Due This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">$45,670</div>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overdue Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">85</div>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">94.5%</div>
              <Progress value={94.5} className="w-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Installment Plans */}
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>Active Installment Plans</CardTitle>
              <CardDescription>Monitor ongoing installment plans and payment status</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Search plans..." 
                className="w-[300px]"
                prefix={`${<Search className="h-4 w-4" />}`}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Next Due</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  customer: "John Doe",
                  product: "MacBook Pro M3",
                  total: 2499.99,
                  paid: 1249.99,
                  remaining: 1250.00,
                  nextDue: "2024-04-15",
                  status: "Current"
                },
                {
                  customer: "Jane Smith",
                  product: "iPhone 15 Pro",
                  total: 999.99,
                  paid: 333.33,
                  remaining: 666.66,
                  nextDue: "2024-04-10",
                  status: "Overdue"
                }
              ].map((plan, i) => (
                <TableRow key={i}>
                  <TableCell>{plan.customer}</TableCell>
                  <TableCell>{plan.product}</TableCell>
                  <TableCell>${plan.total.toFixed(2)}</TableCell>
                  <TableCell>${plan.paid.toFixed(2)}</TableCell>
                  <TableCell>${plan.remaining.toFixed(2)}</TableCell>
                  <TableCell>{plan.nextDue}</TableCell>
                  <TableCell>
                    <Badge variant={plan.status === "Current" ? "default" : "destructive"}>
                      {plan.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payment Schedule</CardTitle>
            <CardDescription>Upcoming payments for next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Apr 15", amount: 45670, count: 125 },
                { date: "Apr 30", amount: 38450, count: 98 },
                { date: "May 15", amount: 52340, count: 145 }
              ].map((schedule, i) => (
                <div key={i} className="flex items-center justify-between p-2 border rounded">
                  <div>
                    <p className="font-medium">{schedule.date}</p>
                    <p className="text-sm text-muted-foreground">{schedule.count} payments due</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${schedule.amount}</p>
                    <p className="text-sm text-muted-foreground">Total due</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>Account risk distribution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Low Risk (0-30 days)</span>
                <span>865 accounts</span>
              </div>
              <Progress value={70} className="bg-green-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Medium Risk (31-60 days)</span>
                <span>284 accounts</span>
              </div>
              <Progress value={20} className="bg-yellow-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>High Risk (60+ days)</span>
                <span>85 accounts</span>
              </div>
              <Progress value={10} className="bg-red-100" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstallmentPlansPage;
