import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Gift, Star, Clock, ArrowRight, Trophy, Crown, Target } from 'lucide-react';

const MyRewardsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Rewards</h1>
          <p className="text-muted-foreground">Track your rewards and redeem points</p>
        </div>
        <Button>Redeem Points</Button>
      </div>

      {/* Points Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Points</CardTitle>
            <Star className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450</div>
            <p className="text-xs opacity-90">+150 points this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Membership Level</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Gold</div>
            <p className="text-xs text-muted-foreground">50 points to Platinum</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rewards Redeemed</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Reward</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">450</div>
            <p className="text-xs text-muted-foreground">points needed</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Early Adopter", description: "Member since 2023", progress: 100, icon: Trophy },
          { title: "Shopping Spree", description: "Spend $1000 in a month", progress: 75, icon: Star },
          { title: "Review Master", description: "Write 10 reviews", progress: 40, icon: Award }
        ].map((achievement, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{achievement.title}</CardTitle>
              <achievement.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              <Progress value={achievement.progress} />
              <p className="text-xs text-right text-muted-foreground">{achievement.progress}% complete</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Available Rewards */}
      <Card>
        <CardHeader>
          <CardTitle>Available Rewards</CardTitle>
          <CardDescription>Redeem your points for these rewards</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            { name: "$10 Store Credit", points: 1000, image: "credit.png" },
            { name: "Free Shipping", points: 500, image: "shipping.png" },
            { name: "Premium Support", points: 2000, image: "support.png" }
          ].map((reward, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="aspect-square bg-accent rounded-lg mb-4" />
              <h3 className="font-medium">{reward.name}</h3>
              <p className="text-sm text-muted-foreground">{reward.points} points</p>
              <Button className="w-full mt-4" variant="outline">
                Redeem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your points history and redemptions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: "Mar 15, 2024", activity: "Purchase: iPhone 15", points: "+150", status: "Credited" },
                { date: "Mar 10, 2024", activity: "Redeem: Store Credit", points: "-1000", status: "Redeemed" },
                { date: "Mar 5, 2024", activity: "Review Bonus", points: "+50", status: "Credited" }
              ].map((activity, i) => (
                <TableRow key={i}>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.activity}</TableCell>
                  <TableCell className={activity.points.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {activity.points}
                  </TableCell>
                  <TableCell>
                    <Badge variant={activity.status === "Credited" ? "default" : "secondary"}>
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

export default MyRewardsPage;
