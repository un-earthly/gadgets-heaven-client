import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Star, MessageSquare, Flag, ThumbsUp,
  Filter, CheckCircle, XCircle
} from 'lucide-react';

const ManageReviewsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Product Reviews</h1>
          <p className="text-muted-foreground">Manage and moderate customer reviews</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Search reviews..."
            className="w-[300px]"
          />
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2,845</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </div>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">4.5/5.0</div>
                <p className="text-xs text-green-600">+0.2 this month</p>
              </div>
              <Star className="h-4 w-4 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Need moderation</p>
              </div>
              <Flag className="h-4 w-4 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Helpful Votes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">12.4k</div>
                <p className="text-xs text-green-600">+856 this month</p>
              </div>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Review Management</CardTitle>
              <CardDescription>Moderate and manage product reviews</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reviews</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Helpful</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  product: "iPhone 15 Pro",
                  customer: "John Doe",
                  rating: 5,
                  review: "Excellent product, great camera quality!",
                  helpful: 24,
                  status: "approved",
                  date: "2024-03-20"
                },
                {
                  product: "MacBook Air M3",
                  customer: "Jane Smith",
                  rating: 4,
                  review: "Good performance but expensive",
                  helpful: 12,
                  status: "pending",
                  date: "2024-03-19"
                },
                {
                  product: "AirPods Pro",
                  customer: "Bob Johnson",
                  rating: 3,
                  review: "Average sound quality",
                  helpful: 8,
                  status: "approved",
                  date: "2024-03-18"
                }
              ].map((review, i) => (
                <TableRow key={i}>
                  <TableCell>{review.product}</TableCell>
                  <TableCell>{review.customer}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {review.rating}
                      <Star className="h-4 w-4 ml-1 text-yellow-400" />
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {review.review}
                  </TableCell>
                  <TableCell>{review.helpful} votes</TableCell>
                  <TableCell>
                    <Badge variant={
                      review.status === "approved" ? "default" :
                        review.status === "pending" ? "secondary" : "destructive"
                    }>
                      {review.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <XCircle className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
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

export default ManageReviewsPage;
