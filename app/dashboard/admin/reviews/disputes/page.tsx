import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertCircle, Clock, CheckCircle
} from 'lucide-react';

const DisputeResolutionPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution</h1>
          <p className="text-muted-foreground">Manage and resolve customer disputes</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Search disputes..."
            className="w-[300px]"
          />
          <Button>Create Case</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Open Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">Active disputes</p>
              </div>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2.5d</div>
                <p className="text-xs text-muted-foreground">Per case</p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-green-600">+5% this month</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-red-600">Needs immediate attention</p>
              </div>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
          <CardDescription>Manage ongoing dispute cases</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "DSP-001",
                  customer: "John Doe",
                  orderId: "ORD-2024-001",
                  type: "Refund Request",
                  priority: "high",
                  status: "open",
                  created: "2024-03-20"
                },
                {
                  id: "DSP-002",
                  customer: "Jane Smith",
                  orderId: "ORD-2024-015",
                  type: "Product Issue",
                  priority: "medium",
                  status: "in-progress",
                  created: "2024-03-19"
                },
                {
                  id: "DSP-003",
                  customer: "Bob Johnson",
                  orderId: "ORD-2024-022",
                  type: "Shipping Delay",
                  priority: "low",
                  status: "escalated",
                  created: "2024-03-18"
                }
              ].map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell className="font-medium">{dispute.id}</TableCell>
                  <TableCell>{dispute.customer}</TableCell>
                  <TableCell>{dispute.orderId}</TableCell>
                  <TableCell>{dispute.type}</TableCell>
                  <TableCell>
                    <Badge variant={
                      dispute.priority === "high" ? "destructive" :
                        dispute.priority === "medium" ? "secondary" : "default"
                    }>
                      {dispute.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      dispute.status === "open" ? "secondary" :
                        dispute.status === "in-progress" ? "default" :
                          dispute.status === "escalated" ? "destructive" : "default"
                    }>
                      {dispute.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{dispute.created}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Update</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resolution Timeline</CardTitle>
            <CardDescription>Average time by dispute type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Refund Request", time: "2.1 days", cases: 15 },
                { type: "Product Issue", time: "3.2 days", cases: 12 },
                { type: "Shipping Delay", time: "1.8 days", cases: 8 }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.type}</span>
                    <span>{item.time}</span>
                  </div>
                  <Progress value={
                    item.type === "Refund Request" ? 70 :
                      item.type === "Product Issue" ? 45 : 85
                  } />
                  <p className="text-xs text-muted-foreground">
                    {item.cases} active cases
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Priority Queue</CardTitle>
            <CardDescription>High priority cases requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "DSP-001", issue: "Payment dispute", deadline: "2h remaining" },
                { id: "DSP-005", issue: "Damaged product", deadline: "4h remaining" },
                { id: "DSP-008", issue: "Missing item", deadline: "5h remaining" }
              ].map((priority, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{priority.id}</p>
                    <p className="text-sm text-muted-foreground">{priority.issue}</p>
                  </div>
                  <Badge variant="destructive">{priority.deadline}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;
