import { apiFetch } from '@/lib/api-client';

export interface DashboardMetrics {
  todayOrderCount: number;
  weekOrderCount: number;
  todayRevenue: number;
  weekRevenue: number;
  lowStockProductCount: number;
}

export async function fetchDashboardMetrics(): Promise<DashboardMetrics> {
  return apiFetch<DashboardMetrics>('/admin/dashboard/metrics');
}
