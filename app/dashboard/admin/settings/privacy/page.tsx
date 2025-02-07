import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, Cookie, Trash2, Save,
  FileText, Lock, UserCheck, AlertTriangle,
  Clock, Settings, Download, CheckCircle 
} from 'lucide-react';
import { Select } from '@/components/ui/select';

const DataPrivacyPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Privacy Settings</h1>
          <p className="text-muted-foreground">Manage data privacy and protection settings</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Settings
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">GDPR Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <Badge variant="success">Compliant</Badge>
                <p className="text-xs text-muted-foreground mt-1">Last checked: 2h ago</p>
              </div>
              <ShieldCheck className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Consents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">15,240</div>
                <p className="text-xs text-muted-foreground">User agreements</p>
              </div>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Data Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Pending requests</p>
              </div>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <CardTitle>Privacy Policy</CardTitle>
            </div>
            <CardDescription>Manage your privacy policy content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Last Updated</label>
              <Input type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Policy Content</label>
              <Textarea className="min-h-[200px]" placeholder="Enter your privacy policy..." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Cookie className="h-4 w-4" />
              <CardTitle>Cookie Settings</CardTitle>
            </div>
            <CardDescription>Configure cookie consent and tracking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Essential Cookies</p>
                <p className="text-xs text-muted-foreground">Required for site functionality</p>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Analytics Cookies</p>
                <p className="text-xs text-muted-foreground">Track site usage and performance</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Marketing Cookies</p>
                <p className="text-xs text-muted-foreground">Enable personalized advertisements</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <CardTitle>Data Retention</CardTitle>
            </div>
            <CardDescription>Set data retention policies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">User Data</p>
                <p className="text-xs text-muted-foreground">Personal information retention</p>
              </div>
              <Select>
                <option>30 days</option>
                <option>90 days</option>
                <option>1 year</option>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Analytics Data</p>
                <p className="text-xs text-muted-foreground">Usage statistics retention</p>
              </div>
              <Select>
                <option>6 months</option>
                <option>1 year</option>
                <option>2 years</option>
              </Select>
            </div>
            <Button variant="outline" className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Expired Data
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <CardTitle>Data Protection</CardTitle>
            </div>
            <CardDescription>Configure data security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Data Encryption</p>
                <p className="text-xs text-muted-foreground">Encrypt stored user data</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Anonymous Analytics</p>
                <p className="text-xs text-muted-foreground">Collect anonymous usage data</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Data Breach Alerts</p>
                <p className="text-xs text-muted-foreground">Enable security notifications</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataPrivacyPage;
