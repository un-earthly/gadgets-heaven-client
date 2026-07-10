import { apiFetch } from '@/lib/api-client';

export interface ApiOrder {
  id: string;
  tenantId: string;
  status: string;
  totalAmount: number;
  subtotal: number;
  shippingCost: number;
  shippingAddress: string;
  billingAddress: string;
  trackingNumber?: string;
  courierProvider?: string;
  consignmentId?: string;
  trackingStatus?: string;
  isPaid: boolean;
  paymentType: string;
  paymentStatus: string;
  paymentMethod?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: {
    recipientName?: string;
    recipientPhone?: string;
    statusHistory?: Array<{
      status: string;
      updatedAt: string;
    }>;
  };
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
    name: string;
    subtotal: number;
    variantId?: string;
    variantAttributes?: Record<string, string>;
  }>;
}

export async function fetchAdminOrders(params: {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}): Promise<{ items: ApiOrder[]; total: number }> {
  const query = new URLSearchParams();
  if (params.search) query.set('search', params.search);
  if (params.status) query.set('status', params.status);
  if (params.page) query.set('page', String(params.page));
  if (params.limit) query.set('limit', String(params.limit));

  return apiFetch<{ items: ApiOrder[]; total: number }>(`/admin/orders?${query.toString()}`);
}

export async function fetchAdminOrderDetail(id: string): Promise<ApiOrder> {
  return apiFetch<ApiOrder>(`/admin/orders/${id}`);
}

export async function updateAdminOrderStatus(
  id: string,
  status: string,
): Promise<ApiOrder> {
  return apiFetch<ApiOrder>(`/admin/orders/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  });
}
