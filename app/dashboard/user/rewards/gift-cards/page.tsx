import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Gift, CreditCard, Copy, Share2, Check, Search, Info, History } from 'lucide-react';

const GiftCardsCouponsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gift Cards & Coupons</h1>
          <p className="text-muted-foreground">Manage your gift cards and redeem coupons</p>
        </div>
        <Button>Purchase Gift Card</Button>
      </div>

      {/* Balance Checker */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold">Check Gift Card Balance</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter gift card number" />
                <Button>Check Balance</Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Have a Coupon Code?</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter coupon code" />
                <Button>Apply Code</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Gift Cards */}
      <Card>
        <CardHeader>
          <CardTitle>My Gift Cards</CardTitle>
          <CardDescription>Your active gift cards and balances</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {[
            { number: "**** **** 1234", balance: 150.00, expires: "12/2024" },
            { number: "**** **** 5678", balance: 75.50, expires: "06/2024" }
          ].map((card, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{card.number}</p>
                    <p className="text-sm text-muted-foreground">Expires {card.expires}</p>
                  </div>
                </div>
                <Badge variant="secondary">${card.balance}</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Number
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Available Coupons */}
      <Card>
        <CardHeader>
          <CardTitle>Available Coupons</CardTitle>
          <CardDescription>Special discounts and offers</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            { code: "SPRING24", discount: "20% OFF", expires: "Apr 30, 2024", type: "Seasonal" },
            { code: "WELCOME10", discount: "10% OFF", expires: "No expiry", type: "New User" },
            { code: "FLASH50", discount: "50% OFF", expires: "24 hours left", type: "Flash Sale" }
          ].map((coupon, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <Badge className="mb-2">{coupon.type}</Badge>
              <h3 className="text-lg font-semibold">{coupon.discount}</h3>
              <p className="text-sm text-muted-foreground mb-4">Code: {coupon.code}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Expires: {coupon.expires}</span>
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent gift card activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Card Number</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: "Mar 15, 2024", number: "**** 1234", type: "Purchase", amount: "-$45.00", status: "Completed" },
                { date: "Mar 10, 2024", number: "**** 5678", type: "Reload", amount: "+$100.00", status: "Completed" },
                { date: "Mar 5, 2024", number: "**** 1234", type: "Purchase", amount: "-$25.00", status: "Completed" }
              ].map((tx, i) => (
                <TableRow key={i}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.number}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell className={tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {tx.amount}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{tx.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GiftCardsCouponsPage;
