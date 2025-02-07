import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Activity, Users, AlertCircle, Clock,
  Search, Filter, Download, MoreVertical
} from 'lucide-react';

const ActivityLogsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Activity Logs</h1>
          <p className="text-muted-foreground">Monitor user activities and system events</p>
        </div>
        <div className="flex gap-2">
          <Input 
            placeholder="Search activities..." 
            className="w-[300px]"
            prefix={<Search className="h-4 w-4" />}
          />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24,521</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">1,482</div>
                <p className="text-xs text-muted-foreground">Today</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-red-600">Needs attention</p>
              </div>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Peak Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2-4 PM</div>
                <p className="text-xs text-muted-foreground">Today</p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent user activities and system events</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activities</SelectItem>
                  <SelectItem value="user">User Actions</SelectItem>
                  <SelectItem value="system">System Events</SelectItem>
                  <SelectItem value="security">Security Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  time: "2 minutes ago",
                  user: "John Doe",
                  action: "Login",
                  type: "security",
                  details: "Successful login attempt",
                  status: "success"
                },
                {
                  time: "15 minutes ago",
                  user: "Jane Smith",
                  action: "Update Profile",
                  type: "user",
                  details: "Changed account settings",
                  status: "info"
                },
                {
                  time: "1 hour ago",
                  user: "System",
                  action: "Backup",
                  type: "system",
                  details: "Automated backup completed",
                  status: "success"
                }
              ].map((log, i) => (
                <TableRow key={i}>
                  <TableCell>{log.time}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>
                    <Badge variant={
                      log.type === "security" ? "destructive" :
                      log.type === "system" ? "secondary" : "default"
                    }>
                      {log.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.details}</TableCell>
                  <TableCell>
                    <Badge variant={log.status === "success" ? "success" : "secondary"}>
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
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

export default ActivityLogsPage;
