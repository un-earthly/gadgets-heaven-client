"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal, Star, X, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import AdvancedSearch from "@/components/product/advanced-search"
import ProductCard from "@/components/product/product-card"
import PageHeader from "@/components/shared/PageHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import { SortOption, ViewMode } from "@/lib/types"
import { fetchProducts, ApiProduct } from "@/lib/api/products"
import { apiFetch } from "@/lib/api-client"
import { useTenant } from "@/contexts/tenant-context"

interface FilterState {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  rating: number
  inStockOnly: boolean
}

interface FilterSidebarProps {
  brands: string[]
  categories: Array<{ id: string; name: string }>
  filters: FilterState
  maxPrice: number
  simpleMode: boolean
  onFilterChange: (key: keyof FilterState, value: any) => void
  onClearFilters: () => void
}

function FilterSidebar({
  brands,
  categories,
  filters,
  maxPrice,
  simpleMode,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {
  const handleCategoryChange = (categoryName: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, categoryName]
      : filters.categories.filter((c) => c !== categoryName)
    onFilterChange("categories", updatedCategories)
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    const updatedBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter((b) => b !== brand)
    onFilterChange("brands", updatedBrands)
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    (!simpleMode &&
      (filters.brands.length > 0 ||
        filters.rating > 0 ||
        filters.inStockOnly ||
        filters.priceRange[0] > 0 ||
        filters.priceRange[1] < maxPrice))

  return (
    <div className="w-full relative overflow-hidden border-r border-gray-200 dark:border-gray-700 h-full min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
      <div className="relative z-10 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-8">
          {/* Categories */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Categories</h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.name)}
                    onChange={(e) => handleCategoryChange(category.name, e.target.checked)}
                    className="w-4 h-4 text-orange-600 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Advanced filters (hidden in simpleMode) */}
          {!simpleMode && (
            <>
              {/* Brands */}
              {brands.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Brands</h4>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={filters.brands.includes(brand)}
                          onChange={(e) => handleBrandChange(brand, e.target.checked)}
                          className="w-4 h-4 text-orange-600 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500"
                        />
                        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max={maxPrice || 2000}
                    value={filters.priceRange[1]}
                    onChange={(e) => onFilterChange("priceRange", [0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* In Stock Only */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Availability</h4>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.inStockOnly}
                    onChange={(e) => onFilterChange("inStockOnly", e.target.checked)}
                    className="w-4 h-4 text-orange-600 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    In Stock Only
                  </span>
                </label>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() => onFilterChange("rating", rating)}
                        className="w-4 h-4 text-orange-600 border-gray-300 dark:border-gray-600 focus:ring-orange-500"
                      />
                      <div className="ml-3 flex items-center">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          & up
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const tenant = useTenant()
  const simpleMode = !!tenant.simpleMode

  const [products, setProducts] = useState<ApiProduct[]>([])
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([])
  const [loading, setLoading] = useState(true)

  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("relevance")
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 2000],
    rating: 0,
    inStockOnly: false,
  })

  // Fetch categories on mount
  useEffect(() => {
    apiFetch<any[]>("/categories")
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.error("Error loading categories:", err))
  }, [])

  // Fetch products when queries / filters change
  useEffect(() => {
    setLoading(true)

    // Translate client sort options to backend parameters
    let sortByBackend = "createdAt"
    let sortOrderBackend: "ASC" | "DESC" = "DESC"

    if (sortBy === "price-low") {
      sortByBackend = "price"
      sortOrderBackend = "ASC"
    } else if (sortBy === "price-high") {
      sortByBackend = "price"
      sortOrderBackend = "DESC"
    } else if (sortBy === "rating") {
      sortByBackend = "rating"
      sortOrderBackend = "DESC"
    } else if (sortBy === "newest") {
      sortByBackend = "createdAt"
      sortOrderBackend = "DESC"
    }

    fetchProducts({
      page,
      limit: 12,
      search: searchQuery || undefined,
      categories: filters.categories.length > 0 ? filters.categories : undefined,
      minPrice: simpleMode ? undefined : filters.priceRange[0] || undefined,
      maxPrice: simpleMode ? undefined : filters.priceRange[1] || undefined,
      brand: (!simpleMode && filters.brands.length > 0) ? filters.brands[0] : undefined, // simple query expects single brand in V1
      inStock: (!simpleMode && filters.inStockOnly) ? true : undefined,
      sortBy: sortByBackend,
      sortOrder: sortOrderBackend,
    })
      .then((res) => {
        setProducts(res.items || [])
        setTotal(res.total || 0)
      })
      .catch((err) => {
        console.error("Error loading products:", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, searchQuery, filters, sortBy, simpleMode])

  // Extract unique brands dynamically from products (fallback if empty)
  const brands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand).filter(Boolean) as string[]))
  }, [products])

  const maxPrice = useMemo(() => {
    if (products.length === 0) return 2000
    return Math.ceil(Math.max(...products.map((p) => Number(p.price))))
  }, [products])

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setPage(1)
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setPage(1)
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, maxPrice],
      rating: 0,
      inStockOnly: false,
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
        <AdvancedSearch onSearch={(query) => { setPage(1); setSearchQuery(query); }} className="max-w-2xl mx-auto" />
      </div>

      {/* Main Layout Container */}
      <div className="flex min-h-screen">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={cn(
          "fixed lg:sticky lg:top-0 left-0 w-80 h-screen overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0 z-40 lg:z-10",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <FilterSidebar
            brands={brands}
            categories={categories}
            filters={filters}
            maxPrice={maxPrice}
            simpleMode={simpleMode}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <p className="text-sm text-muted-foreground">
                {total} products found
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={(value: SortOption) => { setPage(1); setSortBy(value); }}>
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

              <div className="flex border rounded-md dark:border-gray-600">
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
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500" />
            </div>
          ) : products.length > 0 ? (
            <div className="space-y-8">
              <div
                className={cn(
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4",
                )}
              >
                {products.map((product) => (
                  <ProductCard key={product.id} product={product as any} layout={viewMode} showCompareButton={true} />
                ))}
              </div>

              {/* Pagination Controls */}
              {total > 12 && (
                <div className="flex justify-center items-center gap-4 pt-6 border-t border-gray-100 dark:border-zinc-800">
                  <Button
                    variant="outline"
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </Button>
                  <span className="text-sm font-medium">
                    Page {page} of {Math.ceil(total / 12)}
                  </span>
                  <Button
                    variant="outline"
                    disabled={page * 12 >= total}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <SlidersHorizontal className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                No products found
              </h3>
              <p className="text-muted-foreground mb-4">
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