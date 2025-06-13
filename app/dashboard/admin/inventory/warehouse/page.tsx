import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Warehouse, LayersIcon,
  AlertTriangle, BarChart2, Map, Plus
} from 'lucide-react';

const WarehouseLocationsPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Warehouse Management</h1>
          <p className="text-muted-foreground">Monitor warehouse locations and inventory distribution</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Location
        </Button>
      </div>

      {/* Warehouse Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Active warehouses</p>
              </div>
              <Warehouse className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">250,000</div>
                <p className="text-xs text-muted-foreground">Square feet</p>
              </div>
              <LayersIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Storage Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Active zones</p>
              </div>
              <Map className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Space Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">78.5%</div>
                <p className="text-xs text-muted-foreground">Average across locations</p>
              </div>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Warehouse Locations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Warehouse Locations</CardTitle>
          <CardDescription>Overview of all warehouse facilities and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Location</TableHead>
                <TableHead>Zones</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Utilization</TableHead>
                <TableHead>Items Stored</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Main Warehouse",
                  zones: 8,
                  capacity: "100,000 sq ft",
                  utilization: 85,
                  items: 12500,
                  status: "Operational"
                },
                {
                  name: "East Wing Storage",
                  zones: 6,
                  capacity: "75,000 sq ft",
                  utilization: 92,
                  items: 9800,
                  status: "Near Capacity"
                },
                {
                  name: "South Facility",
                  zones: 5,
                  capacity: "50,000 sq ft",
                  utilization: 65,
                  items: 5200,
                  status: "Operational"
                }
              ].map((warehouse, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{warehouse.name}</TableCell>
                  <TableCell>{warehouse.zones} zones</TableCell>
                  <TableCell>{warehouse.capacity}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <Progress value={warehouse.utilization} />
                      <span className="text-sm text-muted-foreground">
                        {warehouse.utilization}% used
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{warehouse.items.toLocaleString()} items</TableCell>
                  <TableCell>
                    <Badge variant={
                      warehouse.status === "Operational" ? "default" :
                        warehouse.status === "Near Capacity" ? "secondary" : "destructive"
                    }>
                      {warehouse.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Zone Distribution */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Storage Distribution</CardTitle>
            <CardDescription>Item distribution across warehouse zones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { zone: "Electronics", usage: 85, items: 4500 },
                { zone: "Accessories", usage: 65, items: 3200 },
                { zone: "Components", usage: 45, items: 2800 }
              ].map((zone, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{zone.zone}</span>
                    <span>{zone.items} items</span>
                  </div>
                  <Progress value={zone.usage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Space Alerts</CardTitle>
            <CardDescription>Capacity warnings and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { message: "East Wing Storage reaching capacity", severity: "high" },
                { message: "Zone A-3 requires reorganization", severity: "medium" },
                { message: "South Facility optimal capacity", severity: "low" }
              ].map((alert, i) => (
                <div key={i} className={`p-4 rounded-lg border flex items-center gap-2 ${alert.severity === 'high' ? 'bg-red-50 border-red-200' :
                  alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-green-50 border-green-200'
                  }`}>
                  <AlertTriangle className={`h-4 w-4 ${alert.severity === 'high' ? 'text-red-500' :
                    alert.severity === 'medium' ? 'text-yellow-500' :
                      'text-green-500'
                    }`} />
                  <span className="text-sm">{alert.message}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WarehouseLocationsPage;
