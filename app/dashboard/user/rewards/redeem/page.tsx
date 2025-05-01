import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Filter, Search, Clock, ArrowRight, Tag } from 'lucide-react';

const rewards = [
  {
    id: 1,
    name: "$50 Store Credit",
    category: "Vouchers",
    points: 5000,
    value: "$50",
    popularity: "Most Popular",
    description: "Redeem for store-wide purchases"
  },
  {
    id: 2,
    name: "Free Express Shipping",
    category: "Shipping",
    points: 1000,
    value: "$15",
    expires: "30 days",
    description: "Valid for one purchase"
  },
  {
    id: 3,
    name: "Premium Support",
    category: "Services",
    points: 2000,
    duration: "3 months",
    description: "24/7 priority support access"
  }
];

const RedeemPointsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Redeem Points</h1>
          <p className="text-muted-foreground">Exchange your points for exclusive rewards</p>
        </div>
        <Button variant="outline">Redemption History</Button>
      </div>

      {/* Points Status */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Available Points</p>
              <h2 className="text-3xl font-bold">2,450</h2>
            </div>
            <div className="text-right">
              <p className="text-sm">Next Reward at</p>
              <p className="text-xl font-semibold">5,000 points</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search rewards..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="vouchers">Vouchers</SelectItem>
            <SelectItem value="shipping">Shipping</SelectItem>
            <SelectItem value="services">Services</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Rewards Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {rewards.map((reward) => (
          <Card key={reward.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{reward.name}</CardTitle>
                  <CardDescription>{reward.category}</CardDescription>
                </div>
                {reward.popularity && (
                  <Badge variant="secondary">{reward.popularity}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-bold">{reward.points}</span>
                  <span className="text-muted-foreground">points</span>
                </div>
                {reward.value && (
                  <Badge variant="outline">Value: {reward.value}</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{reward.description}</p>
              {reward.expires && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Expires in {reward.expires}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={2450 < reward.points}>
                {2450 < reward.points ? (
                  `${reward.points - 2450} more points needed`
                ) : (
                  <>
                    Redeem Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Featured Deals */}
      <Card>
        <CardHeader>
          <CardTitle>Special Offers</CardTitle>
          <CardDescription>Limited time redemption deals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Double Value Voucher", points: 7500, discount: "50% OFF", ends: "2 days" },
            { name: "Flash Sale Reward", points: 3000, discount: "25% OFF", ends: "12 hours" }
          ].map((offer, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Tag className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">{offer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {offer.points} points • Ends in {offer.ends}
                  </p>
                </div>
              </div>
              <Badge variant="destructive">{offer.discount}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RedeemPointsPage;
