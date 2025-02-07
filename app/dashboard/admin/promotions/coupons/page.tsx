import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Ticket, Percent, DollarSign, Users, 
  Plus, Search, Filter, Calendar 
} from 'lucide-react';

const DiscountCouponsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Discount Coupons</h1>
          <p className="text-muted-foreground">Manage promotional codes and discounts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Coupon
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Currently active</p>
              </div>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Redemption Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">32.5%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold">845</div>
                <p className="text-xs text-muted-foreground">Used coupons</p>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Active Coupons</CardTitle>
              <CardDescription>Manage your promotional codes</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Search coupons..." 
                className="w-[300px]"
                prefix={<Search className="h-4 w-4" />}
              />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Coupons</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Min. Purchase</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Valid Until</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  code: "SPRING24",
                  type: "percentage",
                  value: 20,
                  minPurchase: 100,
                  usage: "45/100",
                  validUntil: "2024-04-30",
                  status: "active"
                },
                {
                  code: "WELCOME10",
                  type: "fixed",
                  value: 10,
                  minPurchase: 50,
                  usage: "unlimited",
                  validUntil: "2024-12-31",
                  status: "active"
                },
                {
                  code: "FLASH50",
                  type: "percentage",
                  value: 50,
                  minPurchase: 200,
                  usage: "98/100",
                  validUntil: "2024-03-25",
                  status: "expiring"
                }
              ].map((coupon) => (
                <TableRow key={coupon.code}>
                  <TableCell className="font-medium">{coupon.code}</TableCell>
                  <TableCell>{coupon.type}</TableCell>
                  <TableCell>
                    {coupon.type === "percentage" ? `${coupon.value}%` : `$${coupon.value}`}
                  </TableCell>
                  <TableCell>${coupon.minPurchase}</TableCell>
                  <TableCell>{coupon.usage}</TableCell>
                  <TableCell>{coupon.validUntil}</TableCell>
                  <TableCell>
                    <Badge variant={
                      coupon.status === "active" ? "success" :
                      coupon.status === "expiring" ? "warning" : "secondary"
                    }>
                      {coupon.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing 3 of 24 coupons
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscountCouponsPage;
