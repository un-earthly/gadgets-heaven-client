import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Gift, Users, DollarSign, Copy, Facebook, Twitter, Mail, Award } from 'lucide-react';

const referralHistory = [
  {
    id: 1,
    friend: "John Doe",
    status: "Completed",
    reward: "$25",
    date: "2024-03-15"
  },
  {
    id: 2,
    friend: "Sarah Smith",
    status: "Pending",
    reward: "$25",
    date: "2024-03-14"
  }
];

const ReferEarnPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Refer & Earn</h1>
          <p className="text-muted-foreground">Share with friends and earn rewards</p>
        </div>
        <Button>View Rewards History</Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$600</div>
            <p className="text-xs text-muted-foreground">Total earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Awaiting completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">Conversion rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Code */}
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Code</CardTitle>
          <CardDescription>Share this code with your friends</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value="JOHN2024"
              readOnly
              className="font-mono text-lg"
            />
            <Button variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Facebook className="mr-2 h-4 w-4" />
              Share on Facebook
            </Button>
            <Button variant="outline" className="flex-1">
              <Twitter className="mr-2 h-4 w-4" />
              Share on Twitter
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="mr-2 h-4 w-4" />
              Share via Email
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>Simple steps to earn rewards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">1</div>
              <div>
                <h3 className="font-medium">Share Your Code</h3>
                <p className="text-sm text-muted-foreground">Send your unique referral code to friends</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">2</div>
              <div>
                <h3 className="font-medium">Friends Sign Up</h3>
                <p className="text-sm text-muted-foreground">They create an account using your code</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">3</div>
              <div>
                <h3 className="font-medium">Earn Rewards</h3>
                <p className="text-sm text-muted-foreground">Get $25 when they make their first purchase</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referral History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Referrals</CardTitle>
          <CardDescription>Track your referral status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Friend</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reward</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referralHistory.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell className="font-medium">{referral.friend}</TableCell>
                  <TableCell>{referral.date}</TableCell>
                  <TableCell>
                    <Badge variant={referral.status === "Completed" ? "default" : "secondary"}>
                      {referral.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{referral.reward}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferEarnPage;
