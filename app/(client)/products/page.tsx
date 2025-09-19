"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Grid, List, SlidersHorizontal, Star } from "lucide-react"
import { products, categories } from "@/data"
import { cn } from "@/lib/utils"
import AdvancedSearch from "@/components/product/advanced-search"
import ProductCard from "@/components/product/product-card"
import PageHeader from "@/components/shared/PageHeader"
import PageWrapper from "@/components/shared/PageWrapper"

type ViewMode = 'grid' | 'list'
type SortOption = 'relevance' | 'price-low' | 'price-high' | 'rating' | 'newest'

interface FilterState {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  rating: number
  availability: string[]
}

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('relevance')
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 2000],
    rating: 0,
    availability: []
  })

  // Get unique brands and price range
  const brands = useMemo(() => [...new Set(products.map(p => p.brand))], [])
  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), [])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category))
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand))
    }

    // Price filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    )

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating)
    }

    // Availability filter
    if (filters.availability.length > 0) {
      filtered = filtered.filter(product => filters.availability.includes(product.availability))
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating)
      case 'newest':
        return filtered.sort((a, b) => b.id - a.id)
      default:
        return filtered
    }
  }, [searchQuery, filters, sortBy])

  const handleFilterChange = (key: keyof FilterState, value: string | number | [number, number] | string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, maxPrice],
      rating: 0,
      availability: []
    })
  }



  return (
    <PageWrapper>
      <PageHeader
        badge="Shop Now"
        title="All Products"
        description="Discover our complete collection of premium gadgets and tech accessories"
      />

      <div className="mb-8">
        <AdvancedSearch onSearch={setSearchQuery} className="max-w-2xl mx-auto" />
      </div>

      <div className="relative">


        {showFilters && (
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={filters.categories.includes(category.name)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange("categories", [...filters.categories, category.name]);
                          } else {
                            handleFilterChange(
                              "categories",
                              filters.categories.filter((c) => c !== category.name)
                            );
                          }
                        }}
                      />
                      <label htmlFor={`category-${category.id}`} className="text-sm">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Brands */}
              <div>
                <h3 className="font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={filters.brands.includes(brand)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange("brands", [...filters.brands, brand]);
                          } else {
                            handleFilterChange(
                              "brands",
                              filters.brands.filter((b) => b !== brand)
                            );
                          }
                        }}
                      />
                      <label htmlFor={`brand-${brand}`} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) =>
                      handleFilterChange("priceRange", value as [number, number])
                    }
                    max={maxPrice}
                    step={10}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zinc-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Rating */}
              <div>
                <h3 className="font-medium mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={filters.rating === rating}
                        onCheckedChange={(checked) => {
                          handleFilterChange("rating", checked ? rating : 0);
                        }}
                      />
                      <label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-3 w-3",
                                i < rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-zinc-300"
                              )}
                            />
                          ))}
                        </div>
                        <span className="ml-2">& up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Availability */}
              <div>
                <h3 className="font-medium mb-3">Availability</h3>
                <div className="space-y-2">
                  {[
                    { value: "in-stock", label: "In Stock" },
                    { value: "out-of-stock", label: "Out of Stock" },
                    { value: "pre-order", label: "Pre-order" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`availability-${option.value}`}
                        checked={filters.availability.includes(option.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange("availability", [...filters.availability, option.value]);
                          } else {
                            handleFilterChange(
                              "availability",
                              filters.availability.filter((a) => a !== option.value)
                            );
                          }
                        }}
                      />
                      <label htmlFor={`availability-${option.value}`} className="text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <p className="text-sm text-zinc-600">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              <Select
                value={sortBy}
                onValueChange={(value: SortOption) => setSortBy(value)}
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Sort by Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length > 0 ? (
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              )}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  layout={viewMode}
                  showCompareButton={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-zinc-400 mb-4">
                <SlidersHorizontal className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-zinc-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}