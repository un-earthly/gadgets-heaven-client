"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { 
  TrendingDown, 
  TrendingUp, 
  Bell, 
  DollarSign,
  Calendar,
  AlertCircle
} from "lucide-react"
import { Product } from "@/data"
import { cn } from "@/lib/utils"

interface PriceHistoryProps {
  product: Product
  className?: string
}

export default function PriceHistory({ product, className }: PriceHistoryProps) {
  const [alertPrice, setAlertPrice] = useState("")
  const [alertEnabled, setAlertEnabled] = useState(false)
  const [showPriceAlert, setShowPriceAlert] = useState(false)

  const priceHistory = product.priceHistory || []
  const currentPrice = product.price
  const originalPrice = product.originalPrice

  // Calculate price trend
  const getPriceTrend = () => {
    if (priceHistory.length < 2) return null
    
    const oldestPrice = priceHistory[0].price
    const latestPrice = priceHistory[priceHistory.length - 1].price
    
    if (latestPrice < oldestPrice) {
      return {
        type: 'down',
        percentage: Math.round(((oldestPrice - latestPrice) / oldestPrice) * 100),
        icon: TrendingDown,
        color: 'text-green-600'
      }
    } else if (latestPrice > oldestPrice) {
      return {
        type: 'up',
        percentage: Math.round(((latestPrice - oldestPrice) / oldestPrice) * 100),
        icon: TrendingUp,
        color: 'text-red-600'
      }
    }
    
    return null
  }

  const trend = getPriceTrend()

  // Get lowest and highest prices
  const getLowestPrice = () => {
    if (priceHistory.length === 0) return currentPrice
    return Math.min(...priceHistory.map(p => p.price), currentPrice)
  }

  const getHighestPrice = () => {
    if (priceHistory.length === 0) return currentPrice
    return Math.max(...priceHistory.map(p => p.price), currentPrice)
  }

  const lowestPrice = getLowestPrice()
  const highestPrice = getHighestPrice()

  const handlePriceAlert = () => {
    if (!alertPrice) return
    
    // In a real app, this would save to backend/localStorage
    const alerts = JSON.parse(localStorage.getItem('priceAlerts') || '[]')
    const newAlert = {
      productId: product.id,
      productName: product.name,
      targetPrice: parseFloat(alertPrice),
      currentPrice: currentPrice,
      enabled: alertEnabled,
      createdAt: new Date().toISOString()
    }
    
    alerts.push(newAlert)
    localStorage.setItem('priceAlerts', JSON.stringify(alerts))
    
    setShowPriceAlert(false)
    setAlertPrice("")
    
    // Show success message (you could use a toast here)
    alert(`Price alert set! We'll notify you when ${product.name} drops to $${alertPrice}`)
  }

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-500" />
              Price History
            </CardTitle>
            <Dialog open={showPriceAlert} onOpenChange={setShowPriceAlert}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Set Alert
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Price Drop Alert</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-600 mb-4">
                      Get notified when the price of &lsquo;{product.name}&lsquo; drops to your target price.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Target Price</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <Input
                            type="number"
                            placeholder="0.00"
                            value={alertPrice}
                            onChange={(e) => setAlertPrice(e.target.value)}
                            className="pl-10"
                            step="0.01"
                            min="0"
                            max={currentPrice}
                          />
                        </div>
                        <p className="text-xs text-zinc-500 mt-1">
                          Current price: ${currentPrice}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Enable notifications</p>
                          <p className="text-xs text-zinc-500">
                            Receive email alerts when price drops
                          </p>
                        </div>
                        <Switch
                          checked={alertEnabled}
                          onCheckedChange={setAlertEnabled}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={handlePriceAlert} className="flex-1">
                      Set Alert
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowPriceAlert(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Current Price Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Current Price</p>
              <p className="text-2xl font-bold text-orange-600">${currentPrice}</p>
              {originalPrice && (
                <p className="text-sm text-zinc-500 line-through">${originalPrice}</p>
              )}
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Lowest Price</p>
              <p className="text-2xl font-bold text-green-600">${lowestPrice}</p>
              {lowestPrice === currentPrice && (
                <Badge variant="default" className="bg-green-500 mt-1">
                  Best Price!
                </Badge>
              )}
            </div>
            
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Highest Price</p>
              <p className="text-2xl font-bold text-red-600">${highestPrice}</p>
              <p className="text-xs text-zinc-500 mt-1">
                Save ${(highestPrice - currentPrice).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Price Trend */}
          {trend && (
            <div className="flex items-center justify-center gap-2 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <trend.icon className={cn("h-5 w-5", trend.color)} />
              <span className={cn("font-medium", trend.color)}>
                Price {trend.type === 'down' ? 'decreased' : 'increased'} by {trend.percentage}%
              </span>
              <span className="text-sm text-zinc-500">over time</span>
            </div>
          )}

          {/* Price History Chart (Simple visualization) */}
          {priceHistory.length > 0 && (
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Price History
              </h4>
              <div className="space-y-2">
                {priceHistory.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">${entry.price}</span>
                      {index > 0 && (
                        <div className="flex items-center">
                          {entry.price < priceHistory[index - 1].price ? (
                            <TrendingDown className="h-3 w-3 text-green-500" />
                          ) : entry.price > priceHistory[index - 1].price ? (
                            <TrendingUp className="h-3 w-3 text-red-500" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between py-2 font-medium">
                  <span className="text-sm">Today</span>
                  <span className="text-orange-600">${currentPrice}</span>
                </div>
              </div>
            </div>
          )}

          {/* Price Alert Info */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                  Price Drop Alerts
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Set up price alerts to get notified when this product goes on sale. 
                  We&apos;ll email you when the price drops to your target amount.
                </p>
              </div>
            </div>
          </div>

          {/* Savings Calculation */}
          {originalPrice && (
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100">
                    You Save
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Compared to original price
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">
                    ${(originalPrice - currentPrice).toFixed(2)}
                  </p>
                  <p className="text-sm text-green-600">
                    ({Math.round(((originalPrice - currentPrice) / originalPrice) * 100)}% off)
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}