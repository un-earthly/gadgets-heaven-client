import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Settings, Mail, Database, Key,
  Globe, Shield, Save,
  RefreshCcw, Terminal, Server
} from 'lucide-react';

const SystemConfigurationPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">System Configuration</h1>
          <p className="text-muted-foreground">Manage system settings and preferences</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <Badge variant="default">Operational</Badge>
                <p className="text-xs text-muted-foreground mt-1">All systems normal</p>
              </div>
              <Server className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Backup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2h ago</div>
                <p className="text-xs text-muted-foreground">Auto-backup enabled</p>
              </div>
              <Database className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">API Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <Badge variant="default">Active</Badge>
                <p className="text-xs text-muted-foreground mt-1">3 integrations</p>
              </div>
              <Terminal className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">1d ago</div>
                <p className="text-xs text-muted-foreground">By Admin</p>
              </div>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <CardTitle>General Settings</CardTitle>
            </div>
            <CardDescription>Configure basic system preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Site Name</label>
              <Input placeholder="Gadgets Heaven" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Admin Email</label>
              <Input placeholder="admin@example.com" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Maintenance Mode</p>
                <p className="text-xs text-muted-foreground">Temporarily disable site access</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Email Configuration */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <CardTitle>Email Configuration</CardTitle>
            </div>
            <CardDescription>Setup email server settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">SMTP Server</label>
              <Input placeholder="smtp.example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">SMTP Port</label>
              <Input placeholder="587" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Enable SSL</p>
                <p className="text-xs text-muted-foreground">Use secure connection</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4" />
              <CardTitle>API Keys</CardTitle>
            </div>
            <CardDescription>Manage integration keys</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Payment Gateway API Key</label>
              <Input type="password" placeholder="••••••••••••••••" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Storage Service Key</label>
              <Input type="password" placeholder="••••••••••••••••" />
            </div>
            <Button variant="outline" className="w-full">
              <Key className="mr-2 h-4 w-4" />
              Generate New Key
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <CardTitle>Security Settings</CardTitle>
            </div>
            <CardDescription>Configure security preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Require 2FA for admin access</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Session Timeout</p>
                <p className="text-xs text-muted-foreground">Auto logout after inactivity</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">IP Whitelist</p>
                <p className="text-xs text-muted-foreground">Restrict admin access by IP</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemConfigurationPage;
