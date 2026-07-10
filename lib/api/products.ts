import { apiFetch } from '@/lib/api-client';

export interface ApiProductVariant {
  id: string;
  productId: string;
  attributes: Record<string, string>;
  sku: string;
  stockQuantity: number;
  priceOverride: string | number | null;
}

export interface ApiProduct {
  id: string;
  name: string;
  description: string;
  price: string | number;
  stockQuantity: number;
  status: 'draft' | 'published' | 'out_of_stock' | 'discontinued';
  images: string[] | null;
  categories: string[];
  specifications: Record<string, unknown> | null;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  brand: string | null;
  sku: string | null;
  discountPercentage: number;
  variants: ApiProductVariant[];
}

export function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export function variantPrice(
  product: ApiProduct,
  variant?: ApiProductVariant | null,
): number {
  const override = variant?.priceOverride;
  if (override !== null && override !== undefined) {
    return Number(override);
  }
  return Number(product.price);
}

export async function fetchProduct(id: string): Promise<ApiProduct> {
  return apiFetch<ApiProduct>(`/products/${id}`);
}

export async function fetchProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
  categories?: string[];
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  inStock?: boolean;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}): Promise<{ items: ApiProduct[]; total: number }> {
  const query = new URLSearchParams();
  if (params?.page) query.set('page', String(params.page));
  if (params?.limit) query.set('limit', String(params.limit));
  if (params?.search) query.set('search', params.search);
  if (params?.categories && params.categories.length > 0) {
    params.categories.forEach((cat) => query.append('categories', cat));
  }
  if (params?.minPrice !== undefined) query.set('minPrice', String(params.minPrice));
  if (params?.maxPrice !== undefined) query.set('maxPrice', String(params.maxPrice));
  if (params?.brand) query.set('brand', params.brand);
  if (params?.inStock !== undefined) query.set('inStock', String(params.inStock));
  if (params?.sortBy) query.set('sortBy', params.sortBy);
  if (params?.sortOrder) query.set('sortOrder', params.sortOrder);
  const qs = query.toString();
  return apiFetch<{ items: ApiProduct[]; total: number }>(
    `/products${qs ? `?${qs}` : ''}`,
  );
}

export async function addToCart(item: {
  productId: string;
  variantId?: string;
  quantity: number;
}): Promise<unknown> {
  return apiFetch('/cart/items', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function fetchCart(): Promise<any> {
  return apiFetch('/cart');
}

export async function updateCartItem(itemId: string, quantity: number): Promise<any> {
  return apiFetch(`/cart/items/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify({ quantity }),
  });
}

export async function removeCartItem(itemId: string): Promise<any> {
  return apiFetch(`/cart/items/${itemId}`, {
    method: 'DELETE',
  });
}
