import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Shield, Users, Key, History,
  Plus, Settings, UserCheck
} from 'lucide-react';

const RolesPermissionsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Roles & Permissions</h1>
          <p className="text-muted-foreground">Manage user roles and access rights</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">Active roles</p>
              </div>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assigned Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">124</div>
                <p className="text-xs text-muted-foreground">With roles</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">Permission sets</p>
              </div>
              <Key className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Last 7 days</p>
              </div>
              <History className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Role Management</CardTitle>
          <CardDescription>Configure roles and their permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role Name</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Super Admin", users: 3, level: 1, created: "2024-01-15", status: "active" },
                { name: "Manager", users: 8, level: 2, created: "2024-01-20", status: "active" },
                { name: "Editor", users: 15, level: 3, created: "2024-02-01", status: "active" },
                { name: "Viewer", users: 98, level: 4, created: "2024-02-15", status: "active" }
              ].map((role, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{role.name}</TableCell>
                  <TableCell>{role.users} users</TableCell>
                  <TableCell>Level {role.level}</TableCell>
                  <TableCell>{role.created}</TableCell>
                  <TableCell>
                    <Badge variant={role.status === "active" ? "secondary" : "secondary"}>
                      {role.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
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
            <CardTitle>Permission Matrix</CardTitle>
            <CardDescription>Configure access rights per role</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Permission</TableHead>
                  <TableHead>Admin</TableHead>
                  <TableHead>Manager</TableHead>
                  <TableHead>Editor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  "View Dashboard",
                  "Manage Users",
                  "Edit Content",
                  "Delete Records"
                ].map((permission, i) => (
                  <TableRow key={i}>
                    <TableCell>{permission}</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={i < 3} /></TableCell>
                    <TableCell><Checkbox checked={i < 2} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Changes</CardTitle>
            <CardDescription>Latest role and permission updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Role Updated", user: "Admin", details: "Modified Editor permissions", time: "2 hours ago" },
                { action: "User Assigned", user: "John Doe", details: "Added to Manager role", time: "5 hours ago" },
                { action: "Permission Added", user: "Admin", details: "New access right created", time: "1 day ago" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <UserCheck className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">
                        By {activity.user} • {activity.details}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RolesPermissionsPage;
