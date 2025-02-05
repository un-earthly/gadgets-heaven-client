import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Clock, AlertCircle } from 'lucide-react';

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const appointments = [
  {
    id: 1,
    service: "Laptop Repair",
    date: "2024-03-20",
    time: "10:00 AM",
    technician: "John Smith",
    priority: "High"
  }
];

const RescheduleModifyPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reschedule Service</h1>
          <p className="text-muted-foreground">Modify your service appointment</p>
        </div>
        <Button variant="outline" className="text-red-500 hover:text-red-600">
          Cancel Service
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Appointment */}
        <Card>
          <CardHeader>
            <CardTitle>Current Appointment</CardTitle>
            <CardDescription>Your scheduled service details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Service</label>
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="Select service to modify" />
                </SelectTrigger>
                <SelectContent>
                  {appointments.map((apt) => (
                    <SelectItem key={apt.id} value={apt.id.toString()}>
                      {apt.service} - {apt.date}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Current Date</span>
                <span className="font-medium">March 20, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Current Time</span>
                <span className="font-medium">10:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Technician</span>
                <span className="font-medium">John Smith</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Appointment */}
        <Card>
          <CardHeader>
            <CardTitle>New Appointment</CardTitle>
            <CardDescription>Select your preferred date and time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Calendar
              mode="single"
              className="rounded-md border"
            />
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Available Time Slots</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant="outline"
                    className="justify-start"
                    size="sm"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modification Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Modification Details</CardTitle>
            <CardDescription>Provide reason for rescheduling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Reason for Rescheduling</label>
              <Textarea
                placeholder="Please provide a brief explanation..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Service Priority</label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-orange-800">
                  Rescheduling Policy
                </p>
                <p className="text-sm text-orange-700">
                  You can reschedule your service up to 24 hours before the appointment.
                  Late cancellations may incur a fee.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel Changes</Button>
        <Button>Confirm Reschedule</Button>
      </div>
    </div>
  );
};

export default RescheduleModifyPage;
