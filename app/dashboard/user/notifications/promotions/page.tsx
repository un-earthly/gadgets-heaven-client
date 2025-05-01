import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Tag, Clock, Percent, Share2, Zap, FlameKindling, Gift } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: "Spring Tech Sale",
    discount: "25% OFF",
    category: "Electronics",
    validUntil: "2024-04-30",
    code: "SPRING25",
    remaining: 75,
    total: 100,
    type: "Featured"
  },
  {
    id: 2,
    title: "Flash Deal: MacBook Pro",
    discount: "$200 OFF",
    category: "Laptops",
    validUntil: "2024-03-25",
    code: "FLASH200",
    remaining: 5,
    total: 50,
    type: "Flash"
  }
];

const PromotionsOffersPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Promotions & Offers</h1>
          <p className="text-muted-foreground">Exclusive deals and limited-time offers</p>
        </div>
        <Button variant="outline">My Saved Offers</Button>
      </div>

      {/* Featured Promotions */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Active Deals", count: "12", icon: Tag },
          { title: "Ending Soon", count: "3", icon: Clock },
          { title: "Total Savings", amount: "$345", icon: Percent }
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count || stat.amount}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Offers</TabsTrigger>
          <TabsTrigger value="flash">Flash Deals</TabsTrigger>
          <TabsTrigger value="exclusive">Exclusive</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {promotions.map((promo) => (
            <Card key={promo.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{promo.title}</h3>
                      {promo.type === "Flash" && (
                        <Badge variant="destructive">
                          <Zap className="h-3 w-3 mr-1" />
                          Flash Deal
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{promo.category}</p>
                  </div>
                  <Badge variant="secondary" className="text-lg">
                    {promo.discount}
                  </Badge>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Valid until</span>
                    <span className="font-medium">{new Date(promo.validUntil).toLocaleDateString()}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Remaining</span>
                      <span className="font-medium">{promo.remaining} of {promo.total}</span>
                    </div>
                    <Progress value={(promo.remaining / promo.total) * 100} />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Promo Code:</p>
                      <code className="px-2 py-1 bg-muted rounded text-sm">{promo.code}</code>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button size="sm">Claim Offer</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Time-Limited Offers */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FlameKindling className="h-5 w-5 text-red-500" />
            <CardTitle>Hot Deals</CardTitle>
          </div>
          <CardDescription>Limited-time offers ending soon</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {[
            { name: "iPhone Bundle", discount: "15% OFF", hours: 12 },
            { name: "Gaming Accessories", discount: "30% OFF", hours: 6 }
          ].map((deal, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">{deal.name}</h3>
                  <p className="text-sm text-muted-foreground">Ends in {deal.hours} hours</p>
                </div>
                <Badge>{deal.discount}</Badge>
              </div>
              <Button className="w-full" variant="outline">View Deal</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Personalized Offers */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            <CardTitle>Just For You</CardTitle>
          </div>
          <CardDescription>Personalized offers based on your interests</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Tech Enthusiast", discount: "Extra 10% OFF", category: "Electronics" },
            { title: "Premium User", discount: "Free Shipping", category: "All Orders" },
            { title: "Birthday Special", discount: "$50 OFF", category: "Any Purchase" }
          ].map((offer, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-medium">{offer.title}</h3>
                <p className="text-2xl font-bold">{offer.discount}</p>
                <p className="text-sm text-muted-foreground">on {offer.category}</p>
                <Button className="w-full" variant="outline">Activate</Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PromotionsOffersPage;
