import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, DollarSign, Clock, AlertCircle, CreditCard, ArrowRight } from 'lucide-react';

const InstallmentPlansPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Installment Plans</h1>
          <p className="text-muted-foreground">Manage your active installment payments</p>
        </div>
        <Button variant="outline">Payment History</Button>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Current installments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450</div>
            <p className="text-xs text-muted-foreground">Remaining payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apr 15</div>
            <p className="text-xs text-muted-foreground">$350 due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Current</div>
            <p className="text-xs text-muted-foreground">All payments up to date</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Installment Plans */}
      <div className="grid gap-6">
        {[
          {
            product: "MacBook Pro M3",
            totalAmount: 2999,
            remaining: 1999,
            monthlyPayment: 250,
            remainingPayments: 8,
            nextDate: "Apr 15, 2024",
            progress: 33
          },
          {
            product: "iPhone 15 Pro",
            totalAmount: 999,
            remaining: 451,
            monthlyPayment: 100,
            remainingPayments: 5,
            nextDate: "Apr 20, 2024",
            progress: 55
          }
        ].map((plan, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{plan.product}</CardTitle>
                  <CardDescription>
                    ${plan.monthlyPayment}/month • {plan.remainingPayments} payments remaining
                  </CardDescription>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Amount</span>
                  <span>${plan.totalAmount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Remaining Balance</span>
                  <span>${plan.remaining}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next Payment Date</span>
                  <span>{plan.nextDate}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span>{plan.progress}%</span>
                </div>
                <Progress value={plan.progress} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Details</Button>
              <Button>Pay Early</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Payment Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Payments</CardTitle>
          <CardDescription>Next 3 months payment schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Due Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: "Apr 15, 2024", product: "MacBook Pro M3", amount: 250, status: "Pending" },
                { date: "Apr 20, 2024", product: "iPhone 15 Pro", amount: 100, status: "Pending" },
                { date: "May 15, 2024", product: "MacBook Pro M3", amount: 250, status: "Scheduled" }
              ].map((payment, i) => (
                <TableRow key={i}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.product}</TableCell>
                  <TableCell>${payment.amount}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === "Pending" ? "default" : "secondary"}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Pay Now</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Early Payment Notice */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>Early Payment Benefits</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Pay off your installments early and save on interest! Early payments have no additional fees.
            Contact support to learn more about early payment discounts.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstallmentPlansPage;
