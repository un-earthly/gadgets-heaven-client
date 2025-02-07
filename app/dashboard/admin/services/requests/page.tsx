import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { 
  Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle,
  Search, Filter, User, X 
} from 'lucide-react';

const BookingRequestsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Service Booking Requests</h1>
          <p className="text-muted-foreground">Manage service appointments and requests</p>
        </div>
        <div className="flex gap-2">
          <Input 
            placeholder="Search requests..." 
            className="w-[300px]"
            prefix={<Search className="h-4 w-4" />}
          />
          <Button>New Booking</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">8 pending approval</p>
              </div>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">45m</div>
                <p className="text-xs text-green-600">-10m from last week</p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-green-600">+2% this month</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">With bookings</p>
              </div>
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Booking Requests</CardTitle>
              <CardDescription>Manage service booking requests</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Requests</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "BK-001",
                  service: "Device Repair",
                  customer: "John Doe",
                  date: "2024-03-21",
                  time: "10:00 AM",
                  status: "pending",
                  payment: "unpaid"
                },
                {
                  id: "BK-002",
                  service: "Screen Replacement",
                  customer: "Jane Smith",
                  date: "2024-03-21",
                  time: "2:30 PM",
                  status: "approved",
                  payment: "paid"
                },
                {
                  id: "BK-003",
                  service: "Battery Service",
                  customer: "Bob Johnson",
                  date: "2024-03-22",
                  time: "11:15 AM",
                  status: "completed",
                  payment: "paid"
                }
              ].map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{booking.date}</span>
                      <span className="text-sm text-muted-foreground">{booking.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      booking.status === "completed" ? "success" :
                      booking.status === "approved" ? "default" : "secondary"
                    }>
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={booking.payment === "paid" ? "success" : "destructive"}>
                      {booking.payment}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">View</Button>
                      {booking.status === "pending" && (
                        <>
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingRequestsPage;
