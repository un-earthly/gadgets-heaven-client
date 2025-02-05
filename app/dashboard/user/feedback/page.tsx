import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Upload, Camera, Send } from 'lucide-react';

const SubmitFeedbackPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Submit Feedback</h1>
          <p className="text-muted-foreground">Share your experience with us</p>
        </div>
        <Button variant="outline">View My Feedback History</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle>Product Feedback</CardTitle>
            <CardDescription>Tell us about your experience with our products</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Product</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product1">iPhone 15 Pro</SelectItem>
                  <SelectItem value="product2">MacBook Air M2</SelectItem>
                  <SelectItem value="product3">AirPods Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className="p-1 hover:text-yellow-400 transition-colors"
                  >
                    <Star className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Feedback Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select feedback type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product">Product Quality</SelectItem>
                  <SelectItem value="service">Customer Service</SelectItem>
                  <SelectItem value="delivery">Delivery Experience</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input placeholder="Brief summary of your feedback" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Detailed Feedback</label>
              <Textarea 
                placeholder="Please provide detailed feedback..."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-[150px]">
              <Camera className="mr-2 h-4 w-4" />
              Add Photos
            </Button>
            <Button className="w-[150px]">
              <Send className="mr-2 h-4 w-4" />
              Submit
            </Button>
          </CardFooter>
        </Card>

        {/* Guidelines and Tips */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feedback Guidelines</CardTitle>
              <CardDescription>Tips for providing effective feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li>Be specific about your experience</li>
                <li>Include relevant details and examples</li>
                <li>Keep it constructive and respectful</li>
                <li>Mention both positive and negative aspects</li>
                <li>Attach photos if relevant</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your feedback within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Response</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an acknowledgment and any follow-up questions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Action</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll take appropriate action based on your feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitFeedbackPage;
