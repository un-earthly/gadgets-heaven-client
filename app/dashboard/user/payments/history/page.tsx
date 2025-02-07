import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Filter, Search, Calendar, ArrowDownUp } from 'lucide-react';

const transactions = [
  {
    id: "TRX-001",
    date: "2024-03-15",
    description: "Monthly Subscription - Business Pro",
    amount: 99.99,
    status: "Completed",
    method: "Visa •••• 4242"
  },
  {
    id: "TRX-002",
    date: "2024-03-10",
    description: "iPhone 15 Pro - Installment Payment",
    amount: 250.00,
    status: "Completed",
    method: "Apple Pay"
  },
  {
    id: "TRX-003",
    date: "2024-03-05",
    description: "Storage Plus - Monthly",
    amount: 49.99,
    status: "Failed",
    method: "Mastercard •••• 8888"
  }
];

const BillingHistoryPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payment History</h1>
          <p className="text-muted-foreground">View and manage your payment records</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export History
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>A list of your recent payments</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input className="pl-8" placeholder="Search transactions..." />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.id}</TableCell>
                  <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
                  <TableCell>{tx.description}</TableCell>
                  <TableCell>${tx.amount.toFixed(2)}</TableCell>
                  <TableCell>{tx.method}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={tx.status === "Completed" ? "default" : 
                              tx.status === "Failed" ? "destructive" : "secondary"}
                    >
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Receipt
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing 3 of 50 transactions
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods Used</CardTitle>
          <CardDescription>Summary of payment methods in your transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { method: "Credit Cards", count: 15, amount: 1249.99 },
              { method: "Digital Wallets", count: 8, amount: 599.99 },
              { method: "Bank Transfers", count: 3, amount: 799.99 }
            ].map((method, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <h3 className="font-medium">{method.method}</h3>
                <p className="text-2xl font-bold mt-2">${method.amount}</p>
                <p className="text-sm text-muted-foreground">{method.count} transactions</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingHistoryPage;
