"use client"

import { useState, useMemo, useEffect } from "react"
import { notFound, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  ZoomIn as Zoom,
  ThumbsUp,
  MessageCircle,
  Check,
  AlertCircle
} from "lucide-react"
import { products, productReviews, productQuestions } from "@/data"
import { cn } from "@/lib/utils"
import { useRecentlyViewed } from "@/components/product/recently-viewed"
import PriceHistory from "@/components/product/price-history"
import ProductShare from "@/components/product/product-share"
import AvailabilityNotification from "@/components/product/availability-notification"

export default function ProductPage() {
  const searchParams = useSearchParams();
  const productId = parseInt(searchParams.get("id") || "");

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { addToRecentlyViewed } = useRecentlyViewed();

  const product = products.find((p) => p.id === productId);
  const reviews = useMemo(() => productReviews[productId] || [], [productId]);
  const questions = useMemo(() => productQuestions[productId] || [], [productId]);
  const relatedProducts = useMemo(
    () => products.filter((p) => product?.relatedProducts.includes(p.id)),
    [product]
  );

  // Calculate variant price
  const variantPrice = useMemo(() => {
    let additionalPrice = 0;
    if (product?.variants) {
      Object.entries(selectedVariants).forEach(([variantType, variantId]) => {
        const variant = product.variants![variantType]?.find((v) => v.id === variantId);
        if (variant?.price) {
          additionalPrice += variant.price;
        }
      });
    }
    return (product?.price ?? 0) + additionalPrice;
  }, [product, selectedVariants]);

  // Calculate rating distribution
  const ratingDistribution = useMemo(() => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
      distribution[review.rating as keyof typeof distribution]++;
    });
    return distribution;
  }, [reviews]);

  useEffect(() => {
    if (productId) {
      addToRecentlyViewed(productId);
    }
  }, [productId, addToRecentlyViewed]);

  if (!productId || !product) {
    return notFound();
  }

  const handleVariantChange = (variantType: string, variantId: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantType]: variantId,
    }));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + change)));
  };

  const ImageGallery = () => (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.images[selectedImageIndex]}
          alt={product.name}
          fill
          className="object-cover"
        />
        <Button variant="secondary" size="icon" className="absolute top-4 right-4">
          <Zoom className="h-4 w-4" />
        </Button>

        {/* Navigation arrows */}
        {product.images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev === 0 ? product.images.length - 1 : prev - 1
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev === product.images.length - 1 ? 0 : prev + 1
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail Images */}
      {product.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={cn(
                "relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0",
                selectedImageIndex === index
                  ? "border-orange-500"
                  : "border-transparent hover:border-zinc-300"
              )}
            >
              <Image src={image} alt={product.name} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )

  const ProductInfo = () => (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">{product.brand}</Badge>
          {product.availability === 'in-stock' && (
            <Badge variant="default" className="bg-green-500">
              <Check className="h-3 w-3 mr-1" />
              In Stock
            </Badge>
          )}
          {product.availability === 'out-of-stock' && (
            <Badge variant="destructive">
              <AlertCircle className="h-3 w-3 mr-1" />
              Out of Stock
            </Badge>
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-zinc-300"
                  )}
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">{product.rating}</span>
            <span className="ml-1 text-sm text-zinc-500">
              ({product.reviewCount} reviews)
            </span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-zinc-500">{product.stock} in stock</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          {product.originalPrice && (
            <span className="text-xl text-zinc-500 line-through">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-orange-600">
            ${variantPrice.toFixed(2)}
          </span>
          {product.originalPrice && (
            <Badge className="bg-red-500">
              {Math.round(((product.originalPrice - variantPrice) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
        {product.shippingInfo.freeShipping && (
          <p className="text-sm text-green-600 font-medium">
            ✓ Free shipping on this item
          </p>
        )}
      </div>

      {/* Variants */}
      {product.variants && Object.entries(product.variants).map(([variantType, variants]) => (
        <div key={variantType} className="space-y-3">
          <h3 className="font-medium capitalize">
            {variantType}: {selectedVariants[variantType] &&
              variants.find(v => v.id === selectedVariants[variantType])?.value
            }
          </h3>
          <div className="flex flex-wrap gap-2">
            {variants.map(variant => (
              <Button
                key={variant.id}
                variant={selectedVariants[variantType] === variant.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleVariantChange(variantType, variant.id)}
                disabled={variant.stock === 0}
                className="relative"
              >
                {variant.value}
                {variant.price && (
                  <span className="ml-1 text-xs">+${variant.price}</span>
                )}
                {variant.stock === 0 && (
                  <div className="absolute inset-0 bg-black/20 rounded" />
                )}
              </Button>
            ))}
          </div>
        </div>
      ))}

      {/* Quantity and Actions */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= product.stock}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <span className="text-sm text-zinc-500">
            {product.stock} available
          </span>
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1"
            size="lg"
            disabled={product.availability === 'out-of-stock'}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={cn(
              "h-4 w-4",
              isWishlisted && "fill-red-500 text-red-500"
            )} />
          </Button>
          <ProductShare
            product={product}
            trigger={
              <Button variant="outline" size="lg">
                <Share2 className="h-4 w-4" />
              </Button>
            }
          />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="font-medium">Key Features</h3>
        <div className="grid grid-cols-1 gap-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping & Returns */}
      <div className="space-y-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5 text-orange-500" />
          <div>
            <p className="font-medium">Free Shipping</p>
            <p className="text-sm text-zinc-600">
              Estimated delivery: {product.shippingInfo.estimatedDays} days
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RotateCcw className="h-5 w-5 text-orange-500" />
          <div>
            <p className="font-medium">{product.returnPolicy}</p>
            <p className="text-sm text-zinc-600">Easy returns & exchanges</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-orange-500" />
          <div>
            <p className="font-medium">{product.warranty}</p>
            <p className="text-sm text-zinc-600">Manufacturer warranty included</p>
          </div>
        </div>
      </div>

      {/* Availability Notification */}
      {(product.availability === 'out-of-stock' || product.availability === 'pre-order') && (
        <div className="mb-12">
          <AvailabilityNotification product={product} />
        </div>
      )}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-600 mb-8">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-orange-600">Products</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-orange-600">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <ImageGallery />
        <ProductInfo />
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
          <TabsTrigger value="qa">Q&A ({questions.length})</TabsTrigger>
          <TabsTrigger value="price-history">Price History</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {Object.entries(
                  product.specifications.reduce((acc, spec) => {
                    if (!acc[spec.category]) acc[spec.category] = []
                    acc[spec.category].push(spec)
                    return acc
                  }, {} as { [key: string]: typeof product.specifications })
                ).map(([category, specs]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-3 text-orange-600">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {specs.map((spec, index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
                          <span className="text-zinc-600 dark:text-zinc-400">{spec.name}</span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {/* Review Summary */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{product.rating}</div>
                    <div className="flex justify-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-zinc-300"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-zinc-600">
                      Based on {product.reviewCount} reviews
                    </p>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm w-8">{rating}★</span>
                        <Progress
                          value={(ratingDistribution[rating as keyof typeof ratingDistribution] / reviews.length) * 100}
                          className="flex-1"
                        />
                        <span className="text-sm text-zinc-600 w-8">
                          {ratingDistribution[rating as keyof typeof ratingDistribution]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-4">
              {reviews.map(review => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.userImage} />
                        <AvatarFallback>{review.userName[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{review.userName}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">
                              <Check className="h-3 w-3 mr-1" />
                              Verified Purchase
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-4 w-4",
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-zinc-300"
                                )}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-zinc-500">{review.date}</span>
                        </div>

                        <h4 className="font-medium mb-2">{review.title}</h4>
                        <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                          {review.comment}
                        </p>

                        {review.images && (
                          <div className="flex gap-2 mb-3">
                            {review.images.map((image, index) => (
                              <div key={index} className="relative w-16 h-16 rounded overflow-hidden">
                                <Image src={image} alt="Review" fill className="object-cover" />
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-sm text-zinc-600">
                          <button className="flex items-center gap-1 hover:text-orange-600">
                            <ThumbsUp className="h-4 w-4" />
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="qa" className="mt-6">
          <div className="space-y-6">
            {/* Ask Question Form */}
            <Card>
              <CardHeader>
                <CardTitle>Ask a Question</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="What would you like to know about this product?" />
                <Button>Submit Question</Button>
              </CardContent>
            </Card>

            {/* Questions & Answers */}
            <div className="space-y-4">
              {questions.map(qa => (
                <Card key={qa.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MessageCircle className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">Q: {qa.question}</span>
                        </div>
                        <p className="text-sm text-zinc-600 ml-6">
                          Asked by {qa.userName} on {qa.date}
                        </p>
                      </div>

                      {qa.answer && (
                        <div className="ml-6 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="font-medium">A: {qa.answer.text}</span>
                          </div>
                          <p className="text-sm text-zinc-600">
                            Answered by {qa.answer.answeredBy} on {qa.answer.date}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="price-history" className="mt-6">
          <PriceHistory product={product} />
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <Link href={`/products/${relatedProduct.id}`}>
                    <h3 className="font-medium hover:text-orange-600 transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{relatedProduct.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">
                      ${relatedProduct.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}