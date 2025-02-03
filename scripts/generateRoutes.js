const fs = require('fs');
const path = require('path');

const adminItems = [
  { name: 'Dashboard', href: '/dashboard/admin', icon: 'Home' },
  {
    name: 'User Management',
    icon: 'Users',
    subItems: [
      { name: 'Customer Accounts', href: '/dashboard/admin/users' },
      { name: 'Roles & Permissions', href: '/dashboard/admin/users/roles' },
      { name: 'Activity Logs', href: '/dashboard/admin/users/activity' },
    ],
  },
  {
    name: 'Service & Order Management',
    icon: 'Package',
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
    icon: 'Warehouse',
    subItems: [
      { name: 'Inventory Overview', href: '/dashboard/admin/inventory' },
      { name: 'Manage Stock', href: '/dashboard/admin/inventory/stock' },
      { name: 'Warehouse Locations', href: '/dashboard/admin/inventory/warehouse' },
      { name: 'Bulk Order Processing', href: '/dashboard/admin/inventory/bulk-orders' },
    ],
  },
  {
    name: 'Financial Management',
    icon: 'CreditCard',
    subItems: [
      { name: 'Transactions & Payments', href: '/dashboard/admin/finance/transactions' },
      { name: 'Service Provider Payouts', href: '/dashboard/admin/finance/payouts' },
      { name: 'Invoices & Billing', href: '/dashboard/admin/finance/invoices' },
      { name: 'Installment Plans', href: '/dashboard/admin/finance/installments' },
    ],
  },
  {
    name: 'Customer Reviews & Feedback',
    icon: 'Star',
    subItems: [
      { name: 'Manage Reviews', href: '/dashboard/admin/reviews' },
      { name: 'Dispute Resolution', href: '/dashboard/admin/reviews/disputes' },
      { name: 'Service Performance Analytics', href: '/dashboard/admin/reviews/analytics' },
    ],
  },
  {
    name: 'Promotions & Marketing',
    icon: 'Megaphone',
    subItems: [
      { name: 'Discount Coupons', href: '/dashboard/admin/promotions/coupons' },
      { name: 'Flash Sales', href: '/dashboard/admin/promotions/flash-sales' },
      { name: 'Referral & Loyalty Programs', href: '/dashboard/admin/promotions/referrals' },
    ],
  },
  {
    name: 'Notifications & Alerts',
    icon: 'Bell',
    subItems: [
      { name: 'Send Email/SMS Alerts', href: '/dashboard/admin/notifications/email-sms' },
      { name: 'Manage Support Tickets', href: '/dashboard/admin/notifications/tickets' },
    ],
  },
  {
    name: 'Reports & Analytics',
    icon: 'BarChart',
    subItems: [
      { name: 'Order Trends', href: '/dashboard/admin/reports/orders' },
      { name: 'User Behavior', href: '/dashboard/admin/reports/users' },
      { name: 'Financial Overview', href: '/dashboard/admin/reports/finance' },
    ],
  },
  {
    name: 'System & Security Settings',
    icon: 'Settings',
    subItems: [
      { name: 'Admin Accounts', href: '/dashboard/admin/settings/admins' },
      { name: 'System Configuration', href: '/dashboard/admin/settings/configuration' },
      { name: 'Access Controls', href: '/dashboard/admin/settings/access' },
      { name: 'Data Privacy', href: '/dashboard/admin/settings/privacy' },
    ],
  },
];

const userItems = [
  { name: 'Dashboard', href: '/dashboard/user', icon: 'Home' },
  {
    name: 'Orders & Services',
    icon: 'ShoppingBag',
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
    icon: 'Users',
    subItems: [
      { name: 'My Reviews', href: '/dashboard/user/reviews' },
      { name: 'Submit Feedback', href: '/dashboard/user/feedback' },
      { name: 'Community Forum', href: '/dashboard/user/community' },
      { name: 'Refer & Earn', href: '/dashboard/user/referrals' },
    ],
  },
  {
    name: 'Smart Notifications',
    icon: 'Bell',
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
    icon: 'Gift',
    subItems: [
      { name: 'My Rewards', href: '/dashboard/user/rewards' },
      { name: 'Redeem Points', href: '/dashboard/user/rewards/redeem' },
      { name: 'Loyalty Tiers', href: '/dashboard/user/rewards/tiers' },
      { name: 'Gift Cards & Coupons', href: '/dashboard/user/rewards/gift-cards' },
    ],
  },
  {
    name: 'Subscriptions & Payments',
    icon: 'CreditCard',
    subItems: [
      { name: 'Payment Methods', href: '/dashboard/user/payments' },
      { name: 'Installment Plans', href: '/dashboard/user/payments/installments' },
      { name: 'Service Subscriptions', href: '/dashboard/user/payments/subscriptions' },
      { name: 'Billing History', href: '/dashboard/user/payments/history' },
    ],
  },
  {
    name: 'AI-Powered Assistance',
    icon: 'Bot',
    subItems: [
      { name: 'AI Chat Support', href: '/dashboard/user/ai-support' },
      { name: 'Voice Search', href: '/dashboard/user/voice-search' },
      { name: 'Personalized Recommendations', href: '/dashboard/user/recommendations' },
    ],
  },
  {
    name: 'Warehouse & Inventory',
    icon: 'Package',
    subItems: [
      { name: 'Real-Time Inventory', href: '/dashboard/user/inventory' },
      { name: 'Warehouse Availability', href: '/dashboard/user/inventory/warehouse' },
    ],
  },
  {
    name: 'Settings & Security',
    icon: 'Settings',
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

const createFile = (filePath, content) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf8');
};

const generateFiles = (items, basePath) => {
  items.forEach(item => {
    if (item.subItems) {
      generateFiles(item.subItems, basePath);
    } else {
      const filePath = path.join(basePath, item.href, 'page.tsx');
      const content = `
import React from 'react';

const ${item.name.replace(/ /g, '')}Page = () => {
  return (
    <div>
      <h1>${item.name}</h1>
      <p>Content for ${item.name} page.</p>
    </div>
  );
};

export default ${item.name.replace(/ /g, '')}Page;
`;
      createFile(filePath, content);
    }
  });
};

generateFiles(adminItems, path.join(__dirname, '../app'));
generateFiles(userItems, path.join(__dirname, '../app'));