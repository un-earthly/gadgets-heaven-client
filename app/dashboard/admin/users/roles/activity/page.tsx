import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  History, Filter, Download, Search,
  Shield, Users, AlertCircle, Clock
} from 'lucide-react';

const RoleActivityPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Role Activity Log</h1>
          <p className="text-muted-foreground">Track role and permission changes</p>
        </div>
        <div className="flex gap-2">
          <Input 
            placeholder="Search activities..." 
            className="w-[300px]"
            prefix={<Search className="h-4 w-4" />}
          />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Log
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
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <History className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Role Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Users Affected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">Role updates</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Critical Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-red-600">Needs review</p>
              </div>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent role and permission changes</CardDescription>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Changed By</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  timestamp: "2024-03-20 14:30",
                  action: "Permission Added",
                  role: "Editor",
                  user: "Admin",
                  details: "Added content management access",
                  status: "completed"
                },
                {
                  timestamp: "2024-03-20 12:15",
                  action: "Role Created",
                  role: "Support Team",
                  user: "System Admin",
                  details: "New role for support staff",
                  status: "completed"
                },
                {
                  timestamp: "2024-03-19 16:45",
                  action: "Permission Modified",
                  role: "Manager",
                  user: "Admin",
                  details: "Updated user management rights",
                  status: "pending"
                }
              ].map((activity, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {activity.timestamp}
                    </div>
                  </TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{activity.role}</Badge>
                  </TableCell>
                  <TableCell>{activity.user}</TableCell>
                  <TableCell>{activity.details}</TableCell>
                  <TableCell>
                    <Badge variant={activity.status === "completed" ? "success" : "secondary"}>
                      {activity.status}
                    </Badge>
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

export default RoleActivityPage;