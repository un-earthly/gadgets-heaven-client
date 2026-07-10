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
