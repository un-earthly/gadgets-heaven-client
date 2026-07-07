"use client";

import React, { createContext, useContext } from 'react';

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  themePrimaryColor?: string;
  themeSecondaryColor?: string;
  contactPhone?: string;
  contactEmail?: string;
  footerText?: string;
  activePaymentMethods?: string[];
  activeCourier?: string;
  // When true (base tier), the admin dashboard hides advanced sections
  // (installments, payouts, flash-sales, coupons, advanced roles/access).
  // UI-only: the underlying APIs stay fully functional and tenant-guarded.
  simpleMode?: boolean;
}

interface TenantContextProps {
  tenant: Tenant;
}

const TenantContext = createContext<TenantContextProps | undefined>(undefined);

export function TenantProvider({
  children,
  tenant,
}: {
  children: React.ReactNode;
  tenant: Tenant;
}) {
  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context.tenant;
}

/**
 * Converts a hex color string (e.g. "#ea580c" or "#059669") to HSL space-separated values
 * ready to be set on Tailwind HSL CSS variables (e.g. "24 95% 53%").
 */
export function hexToHslValues(hex: string): string {
  let cleanedHex = hex.replace('#', '');
  if (cleanedHex.length === 3) {
    cleanedHex = cleanedHex.split('').map(c => c + c).join('');
  }
  
  const r = parseInt(cleanedHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanedHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanedHex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
