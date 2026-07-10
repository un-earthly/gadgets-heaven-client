"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Settings, Database, Key,
  Globe, Save, RefreshCcw, Loader2
} from 'lucide-react';
import {
  fetchTenantSettings,
  updateTenantBranding,
  updateTenantCredentials,
  TenantSettings,
} from '@/lib/api/admin-tenant-settings';

export default function SystemConfigurationPage() {
  const [settings, setSettings] = useState<TenantSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingBranding, setSavingBranding] = useState(false);
  const [savingCredentials, setSavingCredentials] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [themePrimaryColor, setThemePrimaryColor] = useState('');
  const [themeSecondaryColor, setThemeSecondaryColor] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [simpleMode, setSimpleMode] = useState(true);

  // Credentials form states
  const [sslcommerzStoreId, setSslcommerzStoreId] = useState('');
  const [sslcommerzStorePassword, setSslcommerzStorePassword] = useState('');
  const [steadfastApiKey, setSteadfastApiKey] = useState('');
  const [steadfastSecretKey, setSteadfastSecretKey] = useState('');

  const loadSettings = () => {
    setLoading(true);
    fetchTenantSettings()
      .then((t) => {
        setSettings(t);
        setName(t.name || '');
        setLogoUrl(t.logoUrl || '');
        setThemePrimaryColor(t.themePrimaryColor || '');
        setThemeSecondaryColor(t.themeSecondaryColor || '');
        setContactPhone(t.contactPhone || '');
        setContactEmail(t.contactEmail || '');
        setSimpleMode(t.simpleMode);
        setSslcommerzStoreId(t.sslcommerzStoreId || '');
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleSaveBranding = async () => {
    setSavingBranding(true);
    setError(null);
    try {
      const updated = await updateTenantBranding({
        name,
        logoUrl,
        themePrimaryColor,
        themeSecondaryColor,
        contactPhone,
        contactEmail,
        simpleMode,
      });
      setSettings(updated);
      alert('Branding settings updated successfully!');
      // Reload page to update layout simpleMode state
      window.location.reload();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSavingBranding(false);
    }
  };

  const handleSaveCredentials = async () => {
    setSavingCredentials(true);
    setError(null);
    try {
      const updated = await updateTenantCredentials({
        sslcommerzStoreId,
        sslcommerzStorePassword: sslcommerzStorePassword || undefined,
        steadfastApiKey: steadfastApiKey || undefined,
        steadfastSecretKey: steadfastSecretKey || undefined,
      });
      setSettings(updated);
      setSslcommerzStorePassword('');
      setSteadfastApiKey('');
      setSteadfastSecretKey('');
      alert('Integration credentials updated successfully!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSavingCredentials(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">System Configuration</h1>
          <p className="text-muted-foreground">Manage branding, simple mode, and API credentials</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={loadSettings}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reload
          </Button>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 font-medium bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200">
          {error}
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Branding & General Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <CardTitle>Business Branding</CardTitle>
            </div>
            <CardDescription>Configure colors, logo, and basic tenant identity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Store Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Logo URL</Label>
              <Input value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Primary Theme Color</Label>
                <Input value={themePrimaryColor} onChange={(e) => setThemePrimaryColor(e.target.value)} placeholder="#000000" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Secondary Theme Color</Label>
                <Input value={themeSecondaryColor} onChange={(e) => setThemeSecondaryColor(e.target.value)} placeholder="#ffffff" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Contact Phone</Label>
                <Input value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Contact Email</Label>
                <Input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
              </div>
            </div>

            {/* Simple Mode Toggle */}
            <div className="flex items-center justify-between p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-900 mt-4">
              <div>
                <p className="text-sm font-medium">Simple Mode (Base Tier)</p>
                <p className="text-xs text-muted-foreground">Hides advanced warehouse, promotions, and installments dashboards from the navigation sidebar</p>
              </div>
              <Switch checked={simpleMode} onCheckedChange={setSimpleMode} />
            </div>

            <Button onClick={handleSaveBranding} className="w-full mt-4" disabled={savingBranding}>
              {savingBranding && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Branding Settings
            </Button>
          </CardContent>
        </Card>

        {/* Integration Credentials (Encrypted at Rest) */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4" />
              <CardTitle>API & Gateway Credentials</CardTitle>
            </div>
            <CardDescription>Configure external integrations. Secrets are encrypted at rest using AES-256-GCM.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Label>SSLCommerz Store ID</Label>
                {settings?.hasSslcommerzStorePassword && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Configured</Badge>
                )}
              </div>
              <Input value={sslcommerzStoreId} onChange={(e) => setSslcommerzStoreId(e.target.value)} placeholder="Store ID" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>SSLCommerz Store Password</Label>
              <Input
                type="password"
                value={sslcommerzStorePassword}
                onChange={(e) => setSslcommerzStorePassword(e.target.value)}
                placeholder={settings?.hasSslcommerzStorePassword ? "•••••••• (Leave blank to keep unchanged)" : "New Password"}
              />
            </div>
            <div className="border-t pt-4 my-2" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Label>Steadfast API Key</Label>
                {settings?.hasSteadfastApiKey && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Configured</Badge>
                )}
              </div>
              <Input
                type="password"
                value={steadfastApiKey}
                onChange={(e) => setSteadfastApiKey(e.target.value)}
                placeholder={settings?.hasSteadfastApiKey ? "•••••••• (Leave blank to keep unchanged)" : "API Key"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Label>Steadfast Secret Key</Label>
                {settings?.hasSteadfastSecretKey && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Configured</Badge>
                )}
              </div>
              <Input
                type="password"
                value={steadfastSecretKey}
                onChange={(e) => setSteadfastSecretKey(e.target.value)}
                placeholder={settings?.hasSteadfastSecretKey ? "•••••••• (Leave blank to keep unchanged)" : "Secret Key"}
              />
            </div>

            <Button onClick={handleSaveCredentials} className="w-full mt-4" disabled={savingCredentials}>
              {savingCredentials && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Credentials
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
