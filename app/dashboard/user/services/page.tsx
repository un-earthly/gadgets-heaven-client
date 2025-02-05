import React from 'react';
import { Calendar, Clock, Settings, Plus, History, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const activeServices = [
  {
    id: 1,
    name: "Laptop Repair",
    status: "In Progress",
    appointmentDate: "2024-03-20",
    technician: "John Smith",
    priority: "High"
  },
  {
    id: 2,
    name: "Phone Screen Replacement",
    status: "Scheduled",
    appointmentDate: "2024-03-22",
    technician: "Sarah Johnson",
    priority: "Medium"
  }
];

const serviceHistory = [
  {
    id: "SRV-001",
    service: "PC Maintenance",
    date: "2024-03-01",
    status: "Completed",
    rating: 5
  },
  {
    id: "SRV-002",
    service: "Data Recovery",
    date: "2024-02-15",
    status: "Completed",
    rating: 4
  }
];

const MyServicesPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Services</h1>
          <p className="text-muted-foreground">Manage your service appointments and repairs</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Book New Service
        </Button>
      </div>

      {/* Service Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Services */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Active Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {activeServices.map((service) => (
            <Card key={service.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>Appointment: {service.appointmentDate}</CardDescription>
                  </div>
                  <Badge variant={service.status === "In Progress" ? "default" : "secondary"}>
                    {service.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Technician</span>
                    <span>{service.technician}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Priority</span>
                    <span>{service.priority}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service History */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Service History</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service ID</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serviceHistory.map((history) => (
                <TableRow key={history.id}>
                  <TableCell className="font-medium">{history.id}</TableCell>
                  <TableCell>{history.service}</TableCell>
                  <TableCell>{history.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{history.status}</Badge>
                  </TableCell>
                  <TableCell>{history.rating}/5</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default MyServicesPage;
