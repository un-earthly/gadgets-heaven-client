"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  Bell, 
  Mail, 
  Smartphone, 
  Check, 
  AlertCircle,
  Package,
  Clock
} from "lucide-react"
import { Product } from "@/data"
import { cn } from "@/lib/utils"

interface AvailabilityNotificationProps {
  product: Product
  className?: string
}

export default function AvailabilityNotification({ product, className }: AvailabilityNotificationProps) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!email && !phone) return
    
    // In a real app, this would save to backend
    const notifications = JSON.parse(localStorage.getItem('availabilityNotifications') || '[]')
    const newNotification = {
      productId: product.id,
      productName: product.name,
      email: emailNotifications ? email : null,
      phone: smsNotifications ? phone : null,
      createdAt: new Date().toISOString(),
      status: 'active'
    }
    
    notifications.push(newNotification)
    localStorage.setItem('availabilityNotifications', JSON.stringify(notifications))
    
    setIsSubscribed(true)
    setShowDialog(false)
    
    // Show success message
    alert(`Great! We'll notify you when ${product.name} is back in stock.`)
  }

  const getAvailabilityStatus = () => {
    switch (product.availability) {
      case 'in-stock':
        return {
          status: 'In Stock',
          color: 'bg-green-500',
          icon: Check,
          description: `${product.stock} units available`
        }
      case 'out-of-stock':
        return {
          status: 'Out of Stock',
          color: 'bg-red-500',
          icon: AlertCircle,
          description: 'Currently unavailable'
        }
      case 'pre-order':
        return {
          status: 'Pre-order',
          color: 'bg-blue-500',
          icon: Clock,
          description: 'Available for pre-order'
        }
      case 'discontinued':
        return {
          status: 'Discontinued',
          color: 'bg-zinc-500',
          icon: Package,
          description: 'No longer available'
        }
      default:
        return {
          status: 'Unknown',
          color: 'bg-zinc-500',
          icon: AlertCircle,
          description: 'Status unknown'
        }
    }
  }

  const availabilityInfo = getAvailabilityStatus()

  // Don't show notification option if product is in stock or discontinued
  if (product.availability === 'in-stock' || product.availability === 'discontinued') {
    return (
      <div className={className}>
        <div className="flex items-center gap-2">
          <availabilityInfo.icon className="h-4 w-4" />
          <Badge className={availabilityInfo.color}>
            {availabilityInfo.status}
          </Badge>
          <span className="text-sm text-zinc-600">{availabilityInfo.description}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-orange-500" />
            Stock Notification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <availabilityInfo.icon className="h-4 w-4" />
            <Badge className={availabilityInfo.color}>
              {availabilityInfo.status}
            </Badge>
            <span className="text-sm text-zinc-600">{availabilityInfo.description}</span>
          </div>

          {!isSubscribed ? (
            <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-1">
                    Get notified when back in stock
                  </h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                    We'll send you an alert as soon as this item becomes available again.
                  </p>
                  
                  <Dialog open={showDialog} onOpenChange={setShowDialog}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Bell className="h-4 w-4 mr-2" />
                        Notify Me
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Stock Alert for {product.name}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Package className="h-4 w-4 text-zinc-500" />
                            <span className="font-medium text-sm">{product.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={availabilityInfo.color}>
                              {availabilityInfo.status}
                            </Badge>
                            <span className="text-sm text-zinc-600">
                              ${product.price}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-zinc-500" />
                                <label className="text-sm font-medium">Email notifications</label>
                              </div>
                              <Switch
                                checked={emailNotifications}
                                onCheckedChange={setEmailNotifications}
                              />
                            </div>
                            {emailNotifications && (
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Smartphone className="h-4 w-4 text-zinc-500" />
                                <label className="text-sm font-medium">SMS notifications</label>
                              </div>
                              <Switch
                                checked={smsNotifications}
                                onCheckedChange={setSmsNotifications}
                              />
                            </div>
                            {smsNotifications && (
                              <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            )}
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            We'll notify you immediately when this product is back in stock. 
                            You can unsubscribe at any time.
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            onClick={handleSubscribe}
                            disabled={(!emailNotifications || !email) && (!smsNotifications || !phone)}
                            className="flex-1"
                          >
                            Subscribe to Alerts
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setShowDialog(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100">
                    You're subscribed!
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    We'll notify you when this item is back in stock.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="text-xs text-zinc-500 space-y-1">
            <p>• Get instant notifications when items are restocked</p>
            <p>• No spam - only stock alerts for items you want</p>
            <p>• Unsubscribe anytime with one click</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}