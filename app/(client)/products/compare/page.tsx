"use client"

import { useSearchParams } from "next/navigation"
import ProductComparison from "@/components/product/product-comparison"
import PageHeader from "@/components/shared/PageHeader"

export default function ComparePage() {
  const searchParams = useSearchParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        badge="Compare"
        title="Product Comparison"
        description="Compare features, specifications, and prices side by side"
      />
      <ProductComparison />
    </div>
  )
}