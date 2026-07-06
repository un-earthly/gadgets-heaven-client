import { headers } from 'next/headers';

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
}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

export async function getServerTenantBranding(): Promise<Tenant> {
  let slug = 'gadgets-heaven';

  try {
    const headersList = await headers();
    const host = headersList.get('host') || '';

    // Resolve slug from host
    const parts = host.split('.');
    if (parts.length > 1) {
      const possibleSlug = parts[0];
      if (possibleSlug !== 'localhost' && possibleSlug !== 'www' && possibleSlug !== 'api') {
        slug = possibleSlug;
      }
    }

    // Check custom header if present
    const slugHeader = headersList.get('x-tenant-slug');
    if (slugHeader) {
      slug = slugHeader;
    }
  } catch {
    // Fallback if headers() cannot be called
    slug = 'gadgets-heaven';
  }

  const response = await fetch(`${API_BASE_URL}/tenants/branding`, {
    headers: {
      'x-tenant-slug': slug,
    },
    next: { revalidate: 60 } // Cache for 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch branding for tenant: ${slug}`);
  }

  return response.json() as Promise<Tenant>;
}
