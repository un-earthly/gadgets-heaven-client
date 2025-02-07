import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Star, Clock, CheckCircle, MessageCircle, 
  TrendingUp, Download, BarChart2, ThumbsUp 
} from 'lucide-react';

const ServicePerformanceAnalyticsPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Service Performance Analytics</h1>
          <p className="text-muted-foreground">Monitor service quality and customer satisfaction</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">4.8/5.0</div>
                <p className="text-xs text-green-600">+0.3 vs last month</p>
              </div>
              <Star className="h-4 w-4 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2h 15m</div>
                <p className="text-xs text-green-600">-15m vs last month</p>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-green-600">+2.1% vs last month</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">2,845</div>
                <p className="text-xs text-green-600">+125 this month</p>
              </div>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rating Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Rating Distribution</CardTitle>
          <CardDescription>Customer ratings breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { stars: 5, count: 1850, percentage: 65 },
              { stars: 4, count: 680, percentage: 24 },
              { stars: 3, count: 215, percentage: 7 },
              { stars: 2, count: 85, percentage: 3 },
              { stars: 1, count: 15, percentage: 1 }
            ].map((rating) => (
              <div key={rating.stars} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center">
                    {rating.stars} <Star className="h-4 w-4 ml-1 text-yellow-400" />
                  </span>
                  <span>{rating.count} reviews</span>
                </div>
                <Progress value={rating.percentage} />
                <p className="text-xs text-muted-foreground">
                  {rating.percentage}% of total reviews
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
          <CardDescription>Latest customer feedback and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  customer: "John Doe",
                  service: "Product Support",
                  rating: 5,
                  comment: "Excellent service, very helpful staff",
                  date: "2024-03-20",
                  status: "resolved"
                },
                {
                  customer: "Jane Smith",
                  service: "Technical Support",
                  rating: 4,
                  comment: "Quick response, minor issues",
                  date: "2024-03-19",
                  status: "in-progress"
                },
                {
                  customer: "Bob Johnson",
                  service: "Returns",
                  rating: 3,
                  comment: "Process could be faster",
                  date: "2024-03-18",
                  status: "pending"
                }
              ].map((review, i) => (
                <TableRow key={i}>
                  <TableCell>{review.customer}</TableCell>
                  <TableCell>{review.service}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {review.rating}
                      <Star className="h-4 w-4 ml-1 text-yellow-400" />
                    </div>
                  </TableCell>
                  <TableCell>{review.comment}</TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>
                    <Badge variant={
                      review.status === "resolved" ? "success" :
                      review.status === "in-progress" ? "default" : "secondary"
                    }>
                      {review.status}
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

export default ServicePerformanceAnalyticsPage;
