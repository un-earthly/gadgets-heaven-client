import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter, Edit, Trash2, MessageCircle, ThumbsUp } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    productName: "Sony WH-1000XM4",
    productImage: "/images/headphones.jpg",
    rating: 5,
    review: "Excellent noise cancellation and sound quality. Battery life is impressive!",
    date: "2024-03-15",
    likes: 12,
    status: "Published",
    verified: true
  },
  {
    id: 2,
    productName: "MacBook Pro M2",
    productImage: "/images/macbook.jpg",
    rating: 4,
    review: "Great performance, but the price point is a bit high.",
    date: "2024-03-10",
    likes: 8,
    status: "Published",
    verified: true
  }
];

const MyReviewsPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Reviews</h1>
          <p className="text-muted-foreground">Manage your product reviews and ratings</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Helpful Votes</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Input placeholder="Search reviews..." />
        </div>
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="rating-high">Highest Rating</SelectItem>
            <SelectItem value="rating-low">Lowest Rating</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{review.productName}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{review.review}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <Badge variant="secondary">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      {review.likes} helpful
                    </Badge>
                    {review.verified && (
                      <Badge variant="outline" className="text-green-600">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {reviews.length === 0 && (
        <Card className="p-12 text-center">
          <div className="space-y-4">
            <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto" />
            <h3 className="text-lg font-medium">No Reviews Yet</h3>
            <p className="text-muted-foreground">
              You haven't written any reviews yet. Share your experience with others!
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default MyReviewsPage;
