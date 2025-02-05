import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    name: "MacBook Pro M3",
    category: "Laptops",
    price: 1999.99,
    match: "98%",
    image: "/products/macbook.jpg"
  },
  // More recommendations...
];

const RecommendationsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Personalized Recommendations</h1>
          <p className="text-muted-foreground">Products picked just for you</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {recommendations.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-6">
              <div className="aspect-square bg-accent rounded-lg mb-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{product.name}</h3>
                  <Badge variant="secondary">{product.match} Match</Badge>
                </div>
                <p className="text-muted-foreground">${product.price}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    Not for me
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Interested
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
