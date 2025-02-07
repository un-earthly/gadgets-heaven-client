import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Shield, Zap, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Bronze",
    icon: Star,
    points: "0-1000",
    benefits: [
      "Basic Support",
      "Standard Shipping",
      "Early Access to Sales",
      "Birthday Bonus Points"
    ],
    color: "border-zinc-200"
  },
  {
    name: "Silver",
    icon: Shield,
    points: "1000-5000",
    benefits: [
      "Priority Support",
      "Free Shipping",
      "Exclusive Deals",
      "2x Points on Purchases",
      "Monthly Rewards"
    ],
    color: "border-primary"
  },
  {
    name: "Gold",
    icon: Crown,
    points: "5000-10000",
    benefits: [
      "24/7 VIP Support",
      "Express Shipping",
      "VIP Events Access",
      "3x Points on Purchases",
      "Quarterly Gifts",
      "Price Match Guarantee"
    ],
    color: "border-yellow-500"
  },
  {
    name: "Platinum",
    icon: Zap,
    points: "10000+",
    benefits: [
      "Dedicated Account Manager",
      "Free Premium Shipping",
      "Early Product Access",
      "4x Points on Purchases",
      "Monthly Gifts",
      "Extended Returns",
      "Special Events Priority"
    ],
    color: "border-purple-500"
  }
];

const LoyaltyTiersPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Loyalty Tiers</h1>
          <p className="text-muted-foreground">Explore the benefits of each tier level</p>
        </div>
      </div>

      {/* Current Status */}
      <Card className="bg-primary/5 border-primary">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Current Tier</p>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Silver Member</h2>
              </div>
              <p className="text-sm text-muted-foreground">2,450 points earned this year</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next Tier</p>
              <p className="font-medium">2,550 points to Gold</p>
              <Progress value={45} className="w-[200px] mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tier Grid */}
      <div className="grid gap-6 md:grid-cols-4">
        {tiers.map((tier, i) => (
          <Card key={i} className={`relative ${tier.color}`}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <tier.icon className="h-5 w-5" />
                <CardTitle>{tier.name}</CardTitle>
              </div>
              <CardDescription>{tier.points} points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {tier.name === "Silver" ? (
                <Badge variant="default" className="w-full justify-center">
                  Current Tier
                </Badge>
              ) : (
                <Button variant="outline" className="w-full">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Benefits Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Benefits Comparison</CardTitle>
          <CardDescription>Detailed comparison of benefits across tiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Benefit</th>
                  {tiers.map((tier, i) => (
                    <th key={i} className="p-4 text-center">{tier.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Support Level",
                  "Shipping Benefits",
                  "Points Multiplier",
                  "Special Access",
                  "Bonus Rewards"
                ].map((benefit, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 font-medium">{benefit}</td>
                    {tiers.map((tier, j) => (
                      <td key={j} className="p-4 text-center">
                        <Check className="h-4 w-4 mx-auto text-green-500" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoyaltyTiersPage;
