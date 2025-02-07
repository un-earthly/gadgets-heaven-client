import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, Gift, Trophy, DollarSign, 
  Plus, Star, UserPlus, ArrowUpRight 
} from 'lucide-react';

const ReferralLoyaltyProgramsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Referral & Loyalty Programs</h1>
          <p className="text-muted-foreground">Manage customer rewards and referrals</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Program
        </Button>
      </div>

      {/* Program Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">8,549</div>
                <p className="text-xs text-muted-foreground">In loyalty program</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$24,580</div>
                <p className="text-xs text-muted-foreground">Rewards issued</p>
              </div>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">45.8%</div>
                <p className="text-xs text-muted-foreground">Referral success</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Programs Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Loyalty Tiers */}
        <Card>
          <CardHeader>
            <CardTitle>Loyalty Tiers</CardTitle>
            <CardDescription>Member levels and benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Bronze", members: 5240, points: "0-1000", benefits: 3 },
                { name: "Silver", members: 2450, points: "1001-5000", benefits: 5 },
                { name: "Gold", members: 859, points: "5001+", benefits: 8 }
              ].map((tier, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{tier.name}</p>
                      <span className="text-sm text-muted-foreground">
                        {tier.members} members
                      </span>
                    </div>
                    <div className="mt-1 flex justify-between text-sm text-muted-foreground">
                      <span>{tier.points} points</span>
                      <span>{tier.benefits} benefits</span>
                    </div>
                    <Progress value={
                      tier.name === "Bronze" ? 65 :
                      tier.name === "Silver" ? 45 : 25
                    } className="mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Referral Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Referral Performance</CardTitle>
            <CardDescription>Program effectiveness metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Channel</TableHead>
                  <TableHead>Referrals</TableHead>
                  <TableHead>Conversion</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { channel: "Email", referrals: 450, conversion: 48, revenue: 12450 },
                  { channel: "Social", referrals: 325, conversion: 42, revenue: 8920 },
                  { channel: "Direct", referrals: 470, conversion: 52, revenue: 15680 }
                ].map((data, i) => (
                  <TableRow key={i}>
                    <TableCell>{data.channel}</TableCell>
                    <TableCell>{data.referrals}</TableCell>
                    <TableCell>{data.conversion}%</TableCell>
                    <TableCell>${data.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest program events and rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "referral", user: "John Doe", event: "Referred 3 new customers", reward: 150 },
              { type: "loyalty", user: "Jane Smith", event: "Reached Gold tier", reward: 500 },
              { type: "redemption", user: "Bob Johnson", event: "Redeemed store credit", reward: 200 }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  {activity.type === 'referral' ? <UserPlus className="h-4 w-4" /> :
                   activity.type === 'loyalty' ? <Trophy className="h-4 w-4" /> :
                   <Gift className="h-4 w-4" />}
                  <div>
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.event}</p>
                  </div>
                </div>
                <Badge variant="outline">
                  +{activity.reward} points
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralLoyaltyProgramsPage;
