import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Download, Filter, Search, AlertCircle, CheckCircle, ArrowUpDown } from 'lucide-react';

const InvoicesBillingPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Invoices & Billing</h1>
          <p className="text-muted-foreground">Track and manage payment records</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>Create Invoice</Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$128,450</div>
                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
              </div>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">Invoices awaiting payment</p>
              </div>
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payment Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">94.8%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold text-red-600">$12,340</div>
                <p className="text-xs text-muted-foreground">15 invoices overdue</p>
              </div>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Invoice Management</CardTitle>
              <CardDescription>View and manage all invoices</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Search invoices..." 
                className="w-[300px]"
                prefix={`${<Search className="h-4 w-4" />}`}
              />
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "INV-001",
                  customer: "Tech Solutions Inc",
                  amount: 2499.99,
                  issueDate: "2024-03-15",
                  dueDate: "2024-04-15",
                  status: "Paid"
                },
                {
                  id: "INV-002",
                  customer: "Global Systems",
                  amount: 1799.99,
                  issueDate: "2024-03-20",
                  dueDate: "2024-04-20",
                  status: "Pending"
                },
                {
                  id: "INV-003",
                  customer: "Digital Services",
                  amount: 3299.99,
                  issueDate: "2024-03-10",
                  dueDate: "2024-04-10",
                  status: "Overdue"
                }
              ].map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>{invoice.issueDate}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant={
                      invoice.status === "Paid" ? "default" :
                      invoice.status === "Pending" ? "secondary" : "destructive"
                    }>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing 3 of 100 invoices
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoicesBillingPage;
