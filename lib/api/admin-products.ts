import { apiFetch } from '@/lib/api-client';
import { ApiProduct, ApiProductVariant } from '@/lib/api/products';

export interface ProductInput {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  status?: string;
  categories: string[];
  brand?: string;
  sku?: string;
  images?: string[];
}

export interface VariantInput {
  attributes: Record<string, string>;
  sku: string;
  stockQuantity: number;
  priceOverride?: number;
}

export async function createProduct(input: ProductInput): Promise<ApiProduct> {
  return apiFetch<ApiProduct>('/products', {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

export async function updateProduct(
  id: string,
  input: Partial<ProductInput>,
): Promise<ApiProduct> {
  return apiFetch<ApiProduct>(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input),
  });
}

export async function deleteProduct(id: string): Promise<void> {
  await apiFetch(`/products/${id}`, { method: 'DELETE' });
}

export async function createVariant(
  productId: string,
  input: VariantInput,
): Promise<ApiProductVariant> {
  return apiFetch<ApiProductVariant>(`/products/${productId}/variants`, {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

export async function updateVariant(
  productId: string,
  variantId: string,
  input: Partial<VariantInput>,
): Promise<ApiProductVariant> {
  return apiFetch<ApiProductVariant>(
    `/products/${productId}/variants/${variantId}`,
    {
      method: 'PUT',
      body: JSON.stringify(input),
    },
  );
}

export async function deleteVariant(
  productId: string,
  variantId: string,
): Promise<void> {
  await apiFetch(`/products/${productId}/variants/${variantId}`, {
    method: 'DELETE',
  });
}
