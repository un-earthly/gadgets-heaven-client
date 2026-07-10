import { apiFetch } from '@/lib/api-client';

export interface TenantSettings {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  themePrimaryColor?: string;
  themeSecondaryColor?: string;
  contactPhone?: string;
  contactEmail?: string;
  simpleMode: boolean;
  sslcommerzStoreId?: string;
  whatsappPhoneNumberId?: string;
  hasSslcommerzStorePassword?: boolean;
  hasSteadfastApiKey?: boolean;
  hasSteadfastSecretKey?: boolean;
  hasWhatsappAccessToken?: boolean;
}

export interface UpdateTenantBrandingInput {
  name?: string;
  logoUrl?: string;
  themePrimaryColor?: string;
  themeSecondaryColor?: string;
  contactPhone?: string;
  contactEmail?: string;
  simpleMode?: boolean;
}

export interface UpdateTenantCredentialsInput {
  sslcommerzStoreId?: string;
  sslcommerzStorePassword?: string;
  steadfastApiKey?: string;
  steadfastSecretKey?: string;
  whatsappPhoneNumberId?: string;
  whatsappAccessToken?: string;
}

export async function fetchTenantSettings(): Promise<TenantSettings> {
  return apiFetch<TenantSettings>('/admin/tenant-settings');
}

export async function updateTenantBranding(
  input: UpdateTenantBrandingInput,
): Promise<TenantSettings> {
  return apiFetch<TenantSettings>('/admin/tenant-settings', {
    method: 'PUT',
    body: JSON.stringify(input),
  });
}

export async function updateTenantCredentials(
  input: UpdateTenantCredentialsInput,
): Promise<TenantSettings> {
  return apiFetch<TenantSettings>('/admin/tenant-settings/credentials', {
    method: 'PUT',
    body: JSON.stringify(input),
  });
}
