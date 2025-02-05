import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Users, TrendingUp, Search, Plus, Heart, MessageSquare, Eye } from 'lucide-react';

const forumCategories = [
  { name: "Tech Support", count: 156, color: "bg-blue-100 text-blue-800" },
  { name: "Product Discussion", count: 89, color: "bg-green-100 text-green-800" },
  { name: "Tips & Tricks", count: 234, color: "bg-purple-100 text-purple-800" },
  { name: "News & Updates", count: 67, color: "bg-orange-100 text-orange-800" }
];

const discussions = [
  {
    id: 1,
    title: "Best practices for MacBook battery life",
    category: "Tips & Tricks",
    author: "Sarah Chen",
    avatar: "/avatars/sarah.jpg",
    replies: 24,
    views: 1205,
    likes: 45,
    isHot: true,
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    title: "iPhone 15 Pro Camera Features Discussion",
    category: "Product Discussion",
    author: "Mike Johnson",
    avatar: "/avatars/mike.jpg",
    replies: 18,
    views: 892,
    likes: 32,
    isHot: true,
    lastActivity: "5 hours ago"
  }
];

const CommunityForumPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Community Forum</h1>
          <p className="text-muted-foreground">Join the discussion with fellow tech enthusiasts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Discussion
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Discussions</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">546</div>
            <p className="text-xs text-muted-foreground">+8 new today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Community Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3k</div>
            <p className="text-xs text-muted-foreground">Active users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hot Topics</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Trending discussions</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Categories */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search discussions..."
              className="pl-8"
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {forumCategories.map((category) => (
            <Badge
              key={category.name}
              variant="outline"
              className={`${category.color} whitespace-nowrap`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Discussions */}
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={discussion.avatar} />
                  <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">
                          by {discussion.author}
                        </span>
                        <Badge variant="secondary">{discussion.category}</Badge>
                        {discussion.isHot && (
                          <Badge variant="destructive">Hot 🔥</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {discussion.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {discussion.likes} likes
                    </div>
                    <span className="ml-auto">
                      Last activity {discussion.lastActivity}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
};

export default CommunityForumPage;
