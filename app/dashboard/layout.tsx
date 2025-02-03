"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  ShoppingBag,
  Settings,
  LogOut,
  Bell,
  Search,
  Users,
  Package,
  CreditCard,
  Bot,
  Gift,
  BarChart,
  Megaphone,
  Star,
  Warehouse
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DesktopSidebar, MobileSidebar } from '@/components/app-sidebar';
import { usePathname } from 'next/navigation';

const adminItems = [
  { name: 'Dashboard', href: '/dashboard/admin', icon: Home },

  {
    name: 'User Management',
    icon: Users,
    subItems: [
      { name: 'Customer Accounts', href: '/dashboard/admin/users' },
      { name: 'Roles & Permissions', href: '/dashboard/admin/users/roles' },
      { name: 'Activity Logs', href: '/dashboard/admin/users/activity' },
    ],
  },

  {
    name: 'Service & Order Management',
    icon: Package,
    subItems: [
      { name: 'Manage Services', href: '/dashboard/admin/services' },
      { name: 'Booking Requests', href: '/dashboard/admin/services/requests' },
      { name: 'Service Scheduling', href: '/dashboard/admin/services/schedule' },
      { name: 'Order Tracking', href: '/dashboard/admin/orders/tracking' },
      { name: 'Cancellations & Refunds', href: '/dashboard/admin/orders/cancellations' },
    ],
  },

  {
    name: 'Inventory & Warehouse',
    icon: Warehouse,
    subItems: [
      { name: 'Inventory Overview', href: '/dashboard/admin/inventory' },
      { name: 'Manage Stock', href: '/dashboard/admin/inventory/stock' },
      { name: 'Warehouse Locations', href: '/dashboard/admin/inventory/warehouse' },
      { name: 'Bulk Order Processing', href: '/dashboard/admin/inventory/bulk-orders' },
    ],
  },

  {
    name: 'Financial Management',
    icon: CreditCard,
    subItems: [
      { name: 'Transactions & Payments', href: '/dashboard/admin/finance/transactions' },
      { name: 'Service Provider Payouts', href: '/dashboard/admin/finance/payouts' },
      { name: 'Invoices & Billing', href: '/dashboard/admin/finance/invoices' },
      { name: 'Installment Plans', href: '/dashboard/admin/finance/installments' },
    ],
  },

  {
    name: 'Customer Reviews & Feedback',
    icon: Star,
    subItems: [
      { name: 'Manage Reviews', href: '/dashboard/admin/reviews' },
      { name: 'Dispute Resolution', href: '/dashboard/admin/reviews/disputes' },
      { name: 'Service Performance Analytics', href: '/dashboard/admin/reviews/analytics' },
    ],
  },

  {
    name: 'Promotions & Marketing',
    icon: Megaphone,
    subItems: [
      { name: 'Discount Coupons', href: '/dashboard/admin/promotions/coupons' },
      { name: 'Flash Sales', href: '/dashboard/admin/promotions/flash-sales' },
      { name: 'Referral & Loyalty Programs', href: '/dashboard/admin/promotions/referrals' },
    ],
  },

  {
    name: 'Notifications & Alerts',
    icon: Bell,
    subItems: [
      { name: 'Send Email/SMS Alerts', href: '/dashboard/admin/notifications/email-sms' },
      { name: 'Manage Support Tickets', href: '/dashboard/admin/notifications/tickets' },
    ],
  },

  {
    name: 'Reports & Analytics',
    icon: BarChart,
    subItems: [
      { name: 'Order Trends', href: '/dashboard/admin/reports/orders' },
      { name: 'User Behavior', href: '/dashboard/admin/reports/users' },
      { name: 'Financial Overview', href: '/dashboard/admin/reports/finance' },
    ],
  },

  {
    name: 'System & Security Settings',
    icon: Settings,
    subItems: [
      { name: 'Admin Accounts', href: '/dashboard/admin/settings/admins' },
      { name: 'System Configuration', href: '/dashboard/admin/settings/configuration' },
      { name: 'Access Controls', href: '/dashboard/admin/settings/access' },
      { name: 'Data Privacy', href: '/dashboard/admin/settings/privacy' },
    ],
  },
];

const userItems = [
  { name: 'Dashboard', href: '/dashboard/user', icon: Home },

  {
    name: 'Orders & Services',
    icon: ShoppingBag,
    subItems: [
      { name: 'My Orders', href: '/dashboard/user/orders' },
      { name: 'My Services', href: '/dashboard/user/services' },
      { name: 'Order Tracking', href: '/dashboard/user/orders/tracking' },
      { name: 'Reschedule/Modify', href: '/dashboard/user/services/modify' },
      { name: 'Pre-Orders', href: '/dashboard/user/orders/pre-orders' },
      { name: 'Bulk Orders (B2B)', href: '/dashboard/user/orders/bulk' },
    ],
  },

  {
    name: 'Reviews & Feedback',
    icon: Users,
    subItems: [
      { name: 'My Reviews', href: '/dashboard/user/reviews' },
      { name: 'Submit Feedback', href: '/dashboard/user/feedback' },
      { name: 'Community Forum', href: '/dashboard/user/community' },
      { name: 'Refer & Earn', href: '/dashboard/user/referrals' },
    ],
  },

  {
    name: 'Smart Notifications',
    icon: Bell,
    subItems: [
      { name: 'Booking Confirmations', href: '/dashboard/user/notifications/bookings' },
      { name: 'Order Updates', href: '/dashboard/user/notifications/orders' },
      { name: 'Promotions & Offers', href: '/dashboard/user/notifications/promotions' },
      { name: 'Wishlist Alerts', href: '/dashboard/user/notifications/wishlist' },
      { name: 'Price Drop Alerts', href: '/dashboard/user/notifications/price-drop' },
    ],
  },

  {
    name: 'Loyalty & Rewards',
    icon: Gift,
    subItems: [
      { name: 'My Rewards', href: '/dashboard/user/rewards' },
      { name: 'Redeem Points', href: '/dashboard/user/rewards/redeem' },
      { name: 'Loyalty Tiers', href: '/dashboard/user/rewards/tiers' },
      { name: 'Gift Cards & Coupons', href: '/dashboard/user/rewards/gift-cards' },
    ],
  },

  {
    name: 'Subscriptions & Payments',
    icon: CreditCard,
    subItems: [
      { name: 'Payment Methods', href: '/dashboard/user/payments' },
      { name: 'Installment Plans', href: '/dashboard/user/payments/installments' },
      { name: 'Service Subscriptions', href: '/dashboard/user/payments/subscriptions' },
      { name: 'Billing History', href: '/dashboard/user/payments/history' },
    ],
  },

  {
    name: 'AI-Powered Assistance',
    icon: Bot,
    subItems: [
      { name: 'AI Chat Support', href: '/dashboard/user/ai-support' },
      { name: 'Voice Search', href: '/dashboard/user/voice-search' },
      { name: 'Personalized Recommendations', href: '/dashboard/user/recommendations' },
    ],
  },

  {
    name: 'Warehouse & Inventory',
    icon: Package,
    subItems: [
      { name: 'Real-Time Inventory', href: '/dashboard/user/inventory' },
      { name: 'Warehouse Availability', href: '/dashboard/user/inventory/warehouse' },
    ],
  },

  {
    name: 'Settings & Security',
    icon: Settings,
    subItems: [
      { name: 'Profile Settings', href: '/dashboard/user/settings/profile' },
      { name: 'Privacy & Data', href: '/dashboard/user/settings/privacy' },
      { name: 'Multi-Language Support', href: '/dashboard/user/settings/language' },
      { name: 'Multi-Currency Support', href: '/dashboard/user/settings/currency' },
      { name: 'Security Settings', href: '/dashboard/user/settings/security' },
      { name: 'Biometric Authentication', href: '/dashboard/user/settings/biometric' },
    ],
  },
];


const DashboardLayout = ({ children }) => {
  const items = usePathname()?.split('/')[2] === "user" ? userItems : adminItems;
  return (
    <div className="flex h-screen bg-gradient-to-b from-orange-50 to bg-orange-100 dark:bg-zinc-950">
      <DesktopSidebar navigationItems={items} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="border-b bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between px-4 py-4">
            <MobileSidebar navigationItems={userItems} />
            <div className="flex items-center flex-1">
              <form className="max-w-lg flex-1">
                <div className="relative">

                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-8 bg-zinc-50 dark:bg-zinc-800 border-zinc-200"
                  />
                </div>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto dark:bg-zinc-950">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;