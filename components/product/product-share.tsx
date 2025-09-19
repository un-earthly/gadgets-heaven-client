"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Share2, 
  Copy, 
  Check, 
  Facebook, 
  Twitter, 
  Mail,
  MessageCircle,
  Link as LinkIcon,
  QrCode
} from "lucide-react"
import { Product } from "@/data"
import { cn } from "@/lib/utils"

interface ProductShareProps {
  product: Product
  trigger?: React.ReactNode
  className?: string
}

export default function ProductShare({ product, trigger, className }: ProductShareProps) {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)

  const productUrl = `${window.location.origin}/products/${product.id}`
  const shareText = `Check out this ${product.name} - ${product.description.slice(0, 100)}...`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(productUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareOptions = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
          '_blank',
          'width=600,height=400'
        )
      }
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-sky-500 hover:bg-sky-600",
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(shareText)}`,
          '_blank',
          'width=600,height=400'
        )
      }
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-600 hover:bg-green-700",
      action: () => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${shareText} ${productUrl}`)}`,
          '_blank'
        )
      }
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-zinc-600 hover:bg-zinc-700",
      action: () => {
        window.open(
          `mailto:?subject=${encodeURIComponent(`Check out this product: ${product.name}`)}&body=${encodeURIComponent(`${shareText}\n\n${productUrl}`)}`,
          '_blank'
        )
      }
    }
  ]

  const generateQRCode = () => {
    // Using a free QR code API
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(productUrl)}`
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className={className}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Product</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Preview */}
          <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
            <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-md flex items-center justify-center">
              <LinkIcon className="h-6 w-6 text-zinc-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                <span className="text-sm font-bold text-orange-600">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>

          {/* Copy Link */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Product Link</label>
            <div className="flex gap-2">
              <Input
                value={productUrl}
                readOnly
                className="flex-1 text-sm"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex-shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            {copied && (
              <p className="text-sm text-green-600">Link copied to clipboard!</p>
            )}
          </div>

          <Separator />

          {/* Social Share Options */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Share on Social Media</label>
            <div className="grid grid-cols-2 gap-3">
              {shareOptions.map((option) => (
                <Button
                  key={option.name}
                  variant="outline"
                  onClick={option.action}
                  className={cn(
                    "flex items-center gap-2 text-white border-0",
                    option.color
                  )}
                >
                  <option.icon className="h-4 w-4" />
                  {option.name}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* QR Code */}
          <div className="space-y-3">
            <label className="text-sm font-medium">QR Code</label>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white rounded-lg border">
                <img
                  src={generateQRCode()}
                  alt="QR Code"
                  className="w-32 h-32"
                />
              </div>
              <p className="text-xs text-zinc-600 text-center">
                Scan this QR code to view the product on mobile
              </p>
            </div>
          </div>

          {/* Additional Share Features */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Share Features</label>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: product.name,
                      text: shareText,
                      url: productUrl
                    })
                  }
                }}
                disabled={!navigator.share}
                className="justify-start"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Native Share (Mobile)
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const canvas = document.createElement('canvas')
                  const ctx = canvas.getContext('2d')
                  if (ctx) {
                    canvas.width = 400
                    canvas.height = 200
                    ctx.fillStyle = '#ffffff'
                    ctx.fillRect(0, 0, 400, 200)
                    ctx.fillStyle = '#000000'
                    ctx.font = '16px Arial'
                    ctx.fillText(product.name, 20, 40)
                    ctx.fillText(`$${product.price}`, 20, 70)
                    ctx.fillText(productUrl, 20, 100)
                    
                    canvas.toBlob((blob) => {
                      if (blob) {
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = `${product.name}-share.png`
                        a.click()
                        URL.revokeObjectURL(url)
                      }
                    })
                  }
                }}
                className="justify-start"
              >
                <QrCode className="h-4 w-4 mr-2" />
                Download Share Image
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}