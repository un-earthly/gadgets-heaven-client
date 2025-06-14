import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceSchedulingPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Service Schedule</h1>
          <p className="text-muted-foreground">Manage service appointments and staff allocation</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="week">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day View</SelectItem>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="month">Month View</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Schedule
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Staff Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Smith", available: true, bookings: 4 },
                  { name: "Sarah Johnson", available: true, bookings: 3 },
                  { name: "Mike Brown", available: false, bookings: 0 }
                ].map((staff, i) => (
                  <div key={i} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="font-medium">{staff.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {staff.bookings} appointments today
                      </p>
                    </div>
                    <Badge variant="default">
                      {staff.available ? "Available" : "Off duty"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Schedule */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>March 18 - 24, 2024</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-center p-2 border-b">
                    <p className="font-medium">{day}</p>
                    <p className="text-sm text-muted-foreground">Mar {18 + i}</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { time: "09:00", service: "Screen Repair", customer: "John Doe" },
                      { time: "11:30", service: "Battery Replace", customer: "Jane Smith" },
                      { time: "14:00", service: "Diagnostics", customer: "Bob Johnson" }
                    ].map((appt, j) => (
                      <div key={j} className="p-2 bg-muted rounded text-sm">
                        <p className="font-medium">{appt.time}</p>
                        <p className="text-xs">{appt.service}</p>
                        <p className="text-xs text-muted-foreground">{appt.customer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceSchedulingPage;
