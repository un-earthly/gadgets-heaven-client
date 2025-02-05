import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Shield, 
  Download, 
  Trash2, 
  Bell, 
  Mail, 
  Cookie, 
  UserX,
  AlertTriangle 
} from 'lucide-react';

const PrivacyDataPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Privacy & Data Settings</h1>
          <p className="text-muted-foreground">Manage your privacy preferences and data</p>
        </div>
        <Button variant="outline">Download My Data</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Control your privacy preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Profile Visibility</label>
                <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Search Engine Indexing</label>
                <p className="text-sm text-muted-foreground">Allow search engines to show your profile</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Activity Status</label>
                <p className="text-sm text-muted-foreground">Show when you're active</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communication Preferences</CardTitle>
            <CardDescription>Manage how we contact you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Marketing Emails</label>
                <p className="text-sm text-muted-foreground">Receive product updates and offers</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Order Notifications</label>
                <p className="text-sm text-muted-foreground">Get updates about your orders</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Price Drop Alerts</label>
                <p className="text-sm text-muted-foreground">Notifications for wishlist items</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookie Preferences</CardTitle>
            <CardDescription>Manage website cookies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <Checkbox id="necessary" checked disabled />
              <div>
                <label htmlFor="necessary" className="text-sm font-medium">Necessary Cookies</label>
                <p className="text-sm text-muted-foreground">Required for the website to function</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox id="analytics" />
              <div>
                <label htmlFor="analytics" className="text-sm font-medium">Analytics Cookies</label>
                <p className="text-sm text-muted-foreground">Help us improve our website</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox id="marketing" />
              <div>
                <label htmlFor="marketing" className="text-sm font-medium">Marketing Cookies</label>
                <p className="text-sm text-muted-foreground">Used for targeted advertising</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
            <CardDescription>Control your personal data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Download My Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="mr-2 h-4 w-4" />
              Privacy Policy
            </Button>
            <Button variant="destructive" className="w-full justify-start">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Account Deletion Warning */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Delete Account
          </CardTitle>
          <CardDescription>
            Once you delete your account, there is no going back. Please be certain.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Deleting your account will:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
            <li>Remove all your personal information</li>
            <li>Cancel all active subscriptions</li>
            <li>Delete your review history</li>
            <li>Remove your wishlist items</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">
            <UserX className="mr-2 h-4 w-4" />
            Request Account Deletion
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PrivacyDataPage;
