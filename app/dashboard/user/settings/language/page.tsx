import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  { code: 'en', name: 'English', region: 'United States', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', region: 'Spain', flag: '🇪🇸' },
  { code: 'fr', name: 'French', region: 'France', flag: '🇫🇷' },
  { code: 'de', name: 'German', region: 'Germany', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', region: 'Italy', flag: '🇮🇹' },
  { code: 'jp', name: 'Japanese', region: 'Japan', flag: '🇯🇵' }
];

const MultiLanguageSupportPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Language Settings</h1>
          <p className="text-muted-foreground">Customize your language preferences</p>
        </div>
        <Button>Save Changes</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Primary Language</CardTitle>
            <CardDescription>Select your main interface language</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="en" className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.code} className="relative">
                  <RadioGroupItem
                    value={lang.code}
                    id={lang.code}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor={lang.code}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span className="text-2xl mb-2">{lang.flag}</span>
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.region}</span>
                  </label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regional Settings</CardTitle>
            <CardDescription>Configure your location preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Format</label>
              <Select defaultValue="mdy">
                <SelectTrigger>
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time Format</label>
              <Select defaultValue="12">
                <SelectTrigger>
                  <SelectValue placeholder="Select time format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12-hour (AM/PM)</SelectItem>
                  <SelectItem value="24">24-hour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">First Day of Week</label>
              <Select defaultValue="sun">
                <SelectTrigger>
                  <SelectValue placeholder="Select first day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sun">Sunday</SelectItem>
                  <SelectItem value="mon">Monday</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Advanced Language Settings</CardTitle>
            <CardDescription>Additional language preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Auto-Translate Content</label>
                <p className="text-sm text-muted-foreground">
                  Automatically translate content not in your primary language
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Show Original Text</label>
                <p className="text-sm text-muted-foreground">
                  Display original text alongside translations
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Multi-Language Reviews</label>
                <p className="text-sm text-muted-foreground">
                  Show reviews in all languages
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultiLanguageSupportPage;
