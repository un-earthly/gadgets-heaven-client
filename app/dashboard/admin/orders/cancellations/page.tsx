import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  RotateCcw, DollarSign, AlertCircle, CheckCircle, 
  Clock, Search, Filter, ArrowUpDown 
} from 'lucide-react';

const CancellationsRefundsPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Cancellations & Refunds</h1>
          <p className="text-muted-foreground">Process order cancellations and refund requests</p>
        </div>
        <Button>Process Batch Refunds</Button>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Awaiting action</p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">1.8d</div>
                <p className="text-xs text-muted-foreground">Average time</p>
              </div>
              <RotateCcw className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">92.5%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cancellation Requests Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Cancellation Requests</CardTitle>
              <CardDescription>Process and manage order cancellations</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Search requests..." 
                className="w-[300px]"
                prefix={<Search className="h-4 w-4" />}
              />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Requests</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "REF-001",
                  orderId: "ORD-2024-001",
                  customer: "John Doe",
                  amount: 249.99,
                  reason: "Wrong item received",
                  status: "pending",
                  submitted: "2024-03-20"
                },
                {
                  id: "REF-002",
                  orderId: "ORD-2024-015",
                  customer: "Jane Smith",
                  amount: 499.99,
                  reason: "Changed mind",
                  status: "processing",
                  submitted: "2024-03-19"
                },
                {
                  id: "REF-003",
                  orderId: "ORD-2024-022",
                  customer: "Bob Johnson",
                  amount: 149.99,
                  reason: "Defective product",
                  status: "completed",
                  submitted: "2024-03-18"
                }
              ].map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.orderId}</TableCell>
                  <TableCell>{request.customer}</TableCell>
                  <TableCell>${request.amount}</TableCell>
                  <TableCell>{request.reason}</TableCell>
                  <TableCell>
                    <Badge variant={
                      request.status === "completed" ? "success" :
                      request.status === "processing" ? "default" : "secondary"
                    }>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.submitted}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        disabled={request.status === "completed"}
                      >
                        Process
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing 3 of 24 requests
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

export default CancellationsRefundsPage;
