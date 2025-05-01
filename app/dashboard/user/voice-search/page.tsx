import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, History, Search } from 'lucide-react';

const VoiceSearchPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Voice Search</h1>
          <p className="text-muted-foreground">Search products using your voice</p>
        </div>
      </div>

      <Card className="text-center p-12">
        <CardContent className="space-y-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
            <Mic className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Tap to Speak</h2>
            <p className="text-muted-foreground">Say what you&quot;re looking for</p>
          </div>
          <Button size="lg" className="rounded-full">
            Start Speaking
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Voice Searches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {['Wireless headphones', 'iPhone charger', 'Gaming mouse'].map((search, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-accent rounded-md">
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4 text-muted-foreground" />
                  <span>{search}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceSearchPage;
