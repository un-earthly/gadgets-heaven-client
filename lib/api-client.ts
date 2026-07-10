export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

export function getTenantSlug(): string {
  if (typeof window === 'undefined') return 'gadgets-heaven';

  const hostname = window.location.hostname;
  const parts = hostname.split('.');
  if (parts.length > 1) {
    const possibleSlug = parts[0];
    if (possibleSlug !== 'localhost' && possibleSlug !== 'www' && possibleSlug !== 'api') {
      return possibleSlug;
    }
  }
  
  return localStorage.getItem('tenant_slug') || 'gadgets-heaven';
}

export function getOrCreateGuestSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('guest_session_id');
  if (!id) {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      id = crypto.randomUUID();
    } else {
      // Fallback simple UUID generator
      id = 'f71a3674-d456-4c74-ac4f-' + Math.random().toString(16).substring(2, 14).padEnd(12, '0');
    }
    localStorage.setItem('guest_session_id', id);
  }
  return id;
}

export async function apiFetch<T = unknown>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers || {});
  
  // Set the tenant slug header resolved from current domain context
  headers.set('x-tenant-slug', getTenantSlug());
  
  // Attach auth token if available in local storage
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  } else {
    // If not authenticated, attach guest session ID
    const guestId = getOrCreateGuestSessionId();
    if (guestId) {
      headers.set('x-guest-session-id', guestId);
    }
  }
  
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'API Request failed');
  }
  
  return response.json() as Promise<T>;
}
