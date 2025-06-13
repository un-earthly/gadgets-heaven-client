import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WarehouseDashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Warehouse Management</h1>
          <p className="text-muted-foreground">Monitor and manage warehouse operations</p>
        </div>
        <Button>Add Warehouse</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { name: "New York", status: "Active", capacity: "82%", orders: 156 },
          { name: "Los Angeles", status: "Active", capacity: "65%", orders: 89 },
          { name: "Chicago", status: "Maintenance", capacity: "45%", orders: 34 },
          { name: "Miami", status: "Active", capacity: "71%", orders: 67 }
        ].map((warehouse, i) => (
          <Card key={i} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{warehouse.name}</CardTitle>
              <Badge variant={warehouse.status === "Active" ? "default" : "secondary"}>
                {warehouse.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="font-medium">{warehouse.capacity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Orders</span>
                  <span className="font-medium">{warehouse.orders}</span>
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transfers</CardTitle>
            <CardDescription>Inter-warehouse movements</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { from: "New York", to: "Los Angeles", items: 45, status: "In Transit" },
                  { from: "Chicago", to: "Miami", items: 23, status: "Completed" }
                ].map((transfer, i) => (
                  <TableRow key={i}>
                    <TableCell>{transfer.from}</TableCell>
                    <TableCell>{transfer.to}</TableCell>
                    <TableCell>{transfer.items}</TableCell>
                    <TableCell>
                      <Badge variant={transfer.status === "Completed" ? "default" : "secondary"}>
                        {transfer.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Staff Overview</CardTitle>
            <CardDescription>Warehouse personnel status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { location: "New York", staff: 24, shifts: 3, manager: "John Smith" },
                { location: "Los Angeles", staff: 18, shifts: 2, manager: "Sarah Johnson" }
              ].map((staff, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{staff.location}</p>
                    <p className="text-sm text-muted-foreground">
                      {staff.staff} Staff • {staff.shifts} Shifts
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">View Schedule</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WarehouseDashboardPage;
