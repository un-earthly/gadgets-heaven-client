import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Upload, Smile, History } from 'lucide-react';

const AISupportPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">AI Support Assistant</h1>
          <p className="text-muted-foreground">Get instant help with your queries</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className="h-[600px]">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              🔧 Technical Support
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              💳 Billing Issues
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              📦 Order Status
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              🔄 Returns & Refunds
            </Button>
          </CardContent>
        </Card>

        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle>Chat with AI Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 overflow-auto p-4">
              {/* Chat messages would go here */}
            </div>
            <div className="border-t pt-4">
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
                <Input placeholder="Type your message..." />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AISupportPage;
