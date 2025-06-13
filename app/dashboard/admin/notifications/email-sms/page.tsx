import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Users, Send, BookTemplate, Clock, BarChart } from 'lucide-react';

const SendEmailSMSAlertsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Email & SMS Alerts</h1>
          <p className="text-muted-foreground">Send and manage communication campaigns</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BookTemplate className="mr-2 h-4 w-4" />
            Templates
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24,582</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <Send className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">98.5%</div>
                <p className="text-xs text-muted-foreground">Average success</p>
              </div>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">In use</p>
              </div>
              <BookTemplate className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recipients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">15,420</div>
                <p className="text-xs text-muted-foreground">Active subscribers</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Composer */}
      <Card>
        <CardHeader>
          <CardTitle>New Campaign</CardTitle>
          <CardDescription>Create and send new email or SMS campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList>
              <TabsTrigger value="email">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </TabsTrigger>
              <TabsTrigger value="sms">
                <MessageSquare className="mr-2 h-4 w-4" />
                SMS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-4">
              <Input placeholder="Subject Line" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="welcome">Welcome Email</SelectItem>
                  <SelectItem value="promo">Promotion</SelectItem>
                  <SelectItem value="alert">Alert</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Email content..." className="min-h-[200px]" />
            </TabsContent>

            <TabsContent value="sms" className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alert">Alert Message</SelectItem>
                  <SelectItem value="promo">Promotion</SelectItem>
                  <SelectItem value="reminder">Reminder</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="SMS content..." className="min-h-[100px]" />
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Recipient Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="active">Active Users</SelectItem>
                <SelectItem value="inactive">Inactive Users</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Clock className="mr-2 h-4 w-4" />
                Schedule
              </Button>
              <Button className="flex-1">
                <Send className="mr-2 h-4 w-4" />
                Send Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Campaigns */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
          <CardDescription>Track recent message campaigns and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "March Newsletter",
                type: "email",
                recipients: 12500,
                delivered: 12450,
                status: "sent",
                date: "2024-03-15"
              },
              {
                name: "Service Alert",
                type: "sms",
                recipients: 5000,
                delivered: 4980,
                status: "sent",
                date: "2024-03-14"
              },
              {
                name: "Spring Sale",
                type: "email",
                recipients: 15000,
                delivered: 0,
                status: "scheduled",
                date: "2024-03-21"
              }
            ].map((campaign, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  {campaign.type === 'email' ?
                    <Mail className="h-4 w-4" /> :
                    <MessageSquare className="h-4 w-4" />
                  }
                  <div>
                    <p className="font-medium">{campaign.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {campaign.delivered} / {campaign.recipients} delivered
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={
                    campaign.status === "sent" ? "default" :
                      campaign.status === "scheduled" ? "secondary" : "destructive"
                  }>
                    {campaign.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{campaign.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendEmailSMSAlertsPage;
