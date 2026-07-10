"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  TruckIcon, Clock, CheckCircle, Search, Loader2, ArrowLeftRight
} from 'lucide-react';
import { fetchAdminOrders, fetchAdminOrderDetail, updateAdminOrderStatus, ApiOrder } from '@/lib/api/admin-orders';

export default function OrderTrackingPage() {
  const [orders, setOrders] = useState<ApiOrder[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters and Pagination
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const limit = 10;

  // Selected Order for Detail View
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<ApiOrder | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  const loadOrders = useCallback(() => {
    setLoading(true);
    fetchAdminOrders({
      search: search || undefined,
      status: statusFilter !== 'all' ? statusFilter : undefined,
      page,
      limit,
    })
      .then((res) => {
        setOrders(res.items);
        setTotal(res.total);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [search, statusFilter, page]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  // Load order details
  useEffect(() => {
    if (!selectedOrderId) {
      setSelectedOrder(null);
      return;
    }
    setDetailLoading(true);
    fetchAdminOrderDetail(selectedOrderId)
      .then(setSelectedOrder)
      .catch((err) => alert(`Failed to load order details: ${err.message}`))
      .finally(() => setDetailLoading(false));
  }, [selectedOrderId]);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setUpdatingStatusId(orderId);
    try {
      const updated = await updateAdminOrderStatus(orderId, newStatus);
      setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(updated);
      }
    } catch (err: any) {
      alert(`Failed to update status: ${err.message}`);
    } finally {
      setUpdatingStatusId(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'confirmed':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Confirmed</Badge>;
      case 'processing':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Processing</Badge>;
      case 'shipped':
        return <Badge variant="secondary" className="bg-purple-100 text-purple-800">Shipped</Badge>;
      case 'delivered':
        return <Badge variant="default" className="bg-green-100 text-green-800">Delivered</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Order Management</h1>
          <p className="text-muted-foreground">Track and manage order lifecycle and statuses</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-sm border">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Search by Customer Name, Email, or Order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="w-[180px]">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>Click View Details to manage items, payment information, and shipping status.</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Total Amount</TableHead>
                  <TableHead>Tracking Ref</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-xs">{order.id.slice(0, 8)}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{order.metadata?.recipientName || 'Guest Customer'}</p>
                        <p className="text-xs text-muted-foreground">{order.metadata?.recipientPhone || 'N/A'}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="capitalize">{order.paymentMethod || order.paymentType}</TableCell>
                    <TableCell>৳{Number(order.totalAmount).toFixed(2)}</TableCell>
                    <TableCell className="font-mono text-xs">{order.trackingNumber || '—'}</TableCell>
                    <TableCell className="text-xs">{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedOrderId(order.id)}>
                          View Details
                        </Button>
                        <Select
                          value={order.status}
                          onValueChange={(val) => handleStatusChange(order.id, val)}
                          disabled={updatingStatusId === order.id}
                        >
                          <SelectTrigger className="w-[130px] h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="shipped">Shipped</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing {orders.length} of {total} orders
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => p + 1)}
                disabled={page * limit >= total}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={!!selectedOrderId} onOpenChange={(open) => !open && setSelectedOrderId(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
          </DialogHeader>

          {detailLoading || !selectedOrder ? (
            <div className="py-12 flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Order Info */}
              <div className="grid grid-cols-2 gap-4 text-sm border-b pb-4">
                <div>
                  <p className="text-muted-foreground">Order ID</p>
                  <p className="font-mono text-xs">{selectedOrder.id}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <div>{getStatusBadge(selectedOrder.status)}</div>
                </div>
                <div>
                  <p className="text-muted-foreground">Payment Type</p>
                  <p className="capitalize font-semibold">{selectedOrder.paymentType} ({selectedOrder.paymentStatus})</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Steadfast Tracking Reference</p>
                  <p className="font-mono">{selectedOrder.trackingNumber || 'Not dispatched'}</p>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border-b pb-4">
                <p className="font-semibold text-sm mb-1 text-zinc-700 dark:text-zinc-300">Shipping Address (Snapshot)</p>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded text-sm font-mono whitespace-pre-line border">
                  {selectedOrder.shippingAddress || 'No shipping address provided'}
                </div>
              </div>

              {/* Items List */}
              <div className="border-b pb-4">
                <p className="font-semibold text-sm mb-2 text-zinc-700 dark:text-zinc-300">Order Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b last:border-b-0 py-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {item.variantAttributes && Object.keys(item.variantAttributes).length > 0 && (
                          <p className="text-xs text-muted-foreground">
                            {Object.entries(item.variantAttributes).map(([k, v]) => `${k}: ${v}`).join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p>৳{Number(item.price).toFixed(2)} x {item.quantity}</p>
                        <p className="font-semibold">৳{Number(item.subtotal).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-1.5 text-sm text-right">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>৳{Number(selectedOrder.subtotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping Cost</span>
                  <span>৳{Number(selectedOrder.shippingCost).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t pt-2 mt-2">
                  <span>Total Amount</span>
                  <span>৳{Number(selectedOrder.totalAmount).toFixed(2)}</span>
                </div>
              </div>

              {/* Status History */}
              {selectedOrder.metadata?.statusHistory && (
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm mb-2">Status History</p>
                  <div className="space-y-2 text-xs">
                    {selectedOrder.metadata.statusHistory.map((h, i) => (
                      <div key={i} className="flex justify-between text-muted-foreground">
                        <span className="capitalize">{h.status}</span>
                        <span>{new Date(h.updatedAt).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
