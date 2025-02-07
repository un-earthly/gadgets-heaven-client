import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { DollarSign, Settings, RefreshCcw } from 'lucide-react';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸', rate: 1 },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺', rate: 0.92 },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧', rate: 0.79 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵', rate: 148.35 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺', rate: 1.53 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦', rate: 1.35 }
];

const MultiCurrencySupportPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Currency Settings</h1>
          <p className="text-muted-foreground">Manage your currency preferences</p>
        </div>
        <Button>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Update Rates
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Primary Currency</CardTitle>
            <CardDescription>Select your preferred currency for all transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="USD" className="grid grid-cols-2 gap-4">
              {currencies.map((currency) => (
                <div key={currency.code} className="relative">
                  <RadioGroupItem
                    value={currency.code}
                    id={currency.code}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor={currency.code}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-2">{currency.flag}</span>
                    <span className="font-semibold">{currency.code}</span>
                    <span className="text-sm text-muted-foreground">{currency.name}</span>
                  </label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Display Preferences</CardTitle>
            <CardDescription>Customize how prices are shown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Show Currency Symbol</label>
                <p className="text-sm text-muted-foreground">Display currency symbols before prices</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Automatic Currency Conversion</label>
                <p className="text-sm text-muted-foreground">Convert prices to your local currency</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Show Original Price</label>
                <p className="text-sm text-muted-foreground">Display original price alongside converted amount</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Price Preview</CardTitle>
            <CardDescription>See how prices will be displayed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg border bg-muted/50">
                <p className="text-sm text-muted-foreground">Original Price</p>
                <p className="text-2xl font-semibold">$999.99</p>
              </div>
              <div className="p-4 rounded-lg border bg-muted/50">
                <p className="text-sm text-muted-foreground">With Tax</p>
                <p className="text-2xl font-semibold">$1,099.99</p>
              </div>
              <div className="p-4 rounded-lg border bg-muted/50">
                <p className="text-sm text-muted-foreground">Converted (EUR)</p>
                <p className="text-2xl font-semibold">€919.99</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Exchange Rates</CardTitle>
            <CardDescription>Current exchange rates against USD</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {currencies.filter(c => c.code !== 'USD').map((currency) => (
                <div key={currency.code} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{currency.flag}</span>
                    <span>{currency.code}</span>
                  </div>
                  <span className="font-mono">{currency.rate}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultiCurrencySupportPage;
