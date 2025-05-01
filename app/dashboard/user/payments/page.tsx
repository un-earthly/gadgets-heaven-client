import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, Shield, Wallet, CheckCircle2 } from 'lucide-react';

const PaymentMethodsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payment Methods</h1>
          <p className="text-muted-foreground">Manage your payment options</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>
      </div>

      {/* Saved Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { type: 'Visa', last4: '4242', expiry: '04/25', isDefault: true },
          { type: 'Mastercard', last4: '8888', expiry: '12/24', isDefault: false }
        ].map((card, i) => (
          <Card key={i} className={`relative ${card.isDefault ? 'border-primary' : ''}`}>
            {card.isDefault && (
              <Badge className="absolute top-3 right-3">
                Default
              </Badge>
            )}
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <CreditCard className="h-8 w-8 text-muted-foreground" />
                <div className="text-right">
                  <p className="font-semibold">{card.type}</p>
                  <p className="text-sm text-muted-foreground">•••• {card.last4}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Expires</span>
                  <span>{card.expiry}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                  <Button variant="outline" size="sm" className="flex-1">Remove</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Card Placeholder */}
        <Card className="border-dashed">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-center cursor-pointer hover:bg-accent">
            <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="font-medium">Add New Card</p>
            <p className="text-sm text-muted-foreground">Support for all major providers</p>
          </CardContent>
        </Card>
      </div>

      {/* Digital Wallets */}
      <Card>
        <CardHeader>
          <CardTitle>Digital Wallets</CardTitle>
          <CardDescription>Connect your preferred digital payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: 'Apple Pay', connected: true },
            { name: 'Google Pay', connected: false },
            { name: 'PayPal', connected: true }
          ].map((wallet, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{wallet.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {wallet.connected ? 'Connected' : 'Not connected'}
                  </p>
                </div>
              </div>
              <Button variant={wallet.connected ? "outline" : "default"}>
                {wallet.connected ? 'Disconnect' : 'Connect'}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>Configure your payment preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Auto-pay Enabled</label>
              <p className="text-sm text-muted-foreground">
                Automatically pay recurring bills
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Payment Notifications</label>
              <p className="text-sm text-muted-foreground">
                Get notified about payment activities
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Security Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Payment Security</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>All cards are encrypted and stored securely</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Protected by industry-standard SSL encryption</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Compliant with PCI DSS standards</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethodsPage;
