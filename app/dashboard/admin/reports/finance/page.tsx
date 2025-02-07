import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, TrendingUp, CreditCard, Receipt,
  Download, Calendar, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const FinancialOverviewPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financial Overview</h1>
          <p className="text-muted-foreground">Monitor financial performance and metrics</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
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
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$842,250</div>
                <p className="text-xs flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  15.3% vs last month
                </p>
              </div>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$245,850</div>
                <p className="text-xs flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  8.4% vs last month
                </p>
              </div>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$128,450</div>
                <p className="text-xs flex items-center text-red-600">
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                  2.3% vs last month
                </p>
              </div>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$1,250</div>
                <p className="text-xs flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  5.2% vs last month
                </p>
              </div>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
          <CardDescription>Revenue by product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { category: "Electronics", revenue: 425000, growth: 12.5 },
              { category: "Accessories", revenue: 285000, growth: 8.2 },
              { category: "Services", revenue: 132250, growth: 15.8 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span>${item.revenue.toLocaleString()}</span>
                </div>
                <Progress value={item.revenue / 5000} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{(item.revenue / 842250 * 100).toFixed(1)}% of total</span>
                  <span className="text-green-600">+{item.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest financial activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "TRX-001",
                  type: "Sale",
                  amount: 2499.99,
                  status: "completed",
                  date: "2024-03-20"
                },
                {
                  id: "TRX-002",
                  type: "Refund",
                  amount: -599.99,
                  status: "processed",
                  date: "2024-03-19"
                },
                {
                  id: "TRX-003",
                  type: "Sale",
                  amount: 1299.99,
                  status: "pending",
                  date: "2024-03-19"
                }
              ].map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell className={transaction.amount < 0 ? "text-red-600" : ""}>
                    ${Math.abs(transaction.amount)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      transaction.status === "completed" ? "success" :
                      transaction.status === "processed" ? "default" : "secondary"
                    }>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialOverviewPage;
