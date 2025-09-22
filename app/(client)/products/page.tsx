"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal, Star, X, Filter, Menu } from "lucide-react"
import { products, categories } from "@/data"
import { cn } from "@/lib/utils"
import AdvancedSearch from "@/components/product/advanced-search"
import ProductCard from "@/components/product/product-card"
import PageHeader from "@/components/shared/PageHeader"
import PageWrapper from "@/components/shared/PageWrapper"
import { FilterState, SortOption, ViewMode } from "@/lib/types"

interface FilterSidebarProps {
  brands: string[]
  filters: FilterState
  maxPrice: number
  onFilterChange: (key: keyof FilterState, value: string | number | [number, number] | string[]) => void
  onClearFilters: () => void
}

function FilterSidebar({ brands, filters, maxPrice, onFilterChange, onClearFilters }: FilterSidebarProps) {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category)
    onFilterChange('categories', updatedCategories)
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    const updatedBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand)
    onFilterChange('brands', updatedBrands)
  }

  const handleAvailabilityChange = (availability: string, checked: boolean) => {
    const updatedAvailability = checked
      ? [...filters.availability, availability]
      : filters.availability.filter(a => a !== availability)
    onFilterChange('availability', updatedAvailability)
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.rating > 0 ||
    filters.availability.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < maxPrice

  return (
    <div className="w-full relative overflow-hidden border-r border-gray-200 dark:border-gray-700">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

      <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-orange-200/20 via-transparent to-transparent dark:from-orange-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-orange-100/30 via-transparent to-transparent dark:from-orange-800/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ff990020,transparent)]" />
        <div className="absolute inset-y-0 right-0 bg-[radial-gradient(circle_500px_at_80%_600px,#ffa50020,transparent)]" />
      </div>

      <div className="absolute inset-0 opacity-10 dark:opacity-5 mix-blend-multiply">
        <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff990030" />
              <stop offset="50%" stopColor="#ffa50020" />
              <stop offset="100%" stopColor="#ffb73030" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshGradient)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white drop-shadow-sm">
            Filters
          </h3>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-8">
          {/* Categories */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              Categories
            </h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.name)}
                    onChange={(e) => handleCategoryChange(category.name, e.target.checked)}
                    className="w-4 h-4 text-orange-600 bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500 dark:focus:ring-orange-600 backdrop-blur-sm"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              Brands
            </h4>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={(e) => handleBrandChange(brand, e.target.checked)}
                    className="w-4 h-4 text-orange-600 bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500 dark:focus:ring-orange-600 backdrop-blur-sm"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              Price Range
            </h4>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => onFilterChange('priceRange', [0, parseInt(e.target.value)])}
                className="w-full h-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg appearance-none cursor-pointer backdrop-blur-sm"
                style={{
                  background: `linear-gradient(to right, #fb923c 0%, #fb923c ${(filters.priceRange[1] / maxPrice) * 100}%, #fed7aa ${(filters.priceRange[1] / maxPrice) * 100}%, #fed7aa 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              Minimum Rating
            </h4>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => onFilterChange('rating', rating)}
                    className="w-4 h-4 text-orange-600 bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 focus:ring-orange-500 dark:focus:ring-orange-600 backdrop-blur-sm"
                  />
                  <div className="ml-3 flex items-center">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      & up
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              Availability
            </h4>
            <div className="space-y-3">
              {['In Stock', 'Out of Stock', 'Limited'].map((availability) => (
                <label key={availability} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(availability)}
                    onChange={(e) => handleAvailabilityChange(availability, e.target.checked)}
                    className="w-4 h-4 text-orange-600 bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500 dark:focus:ring-orange-600 backdrop-blur-sm"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {availability}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("relevance")
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 2000],
    rating: 0,
    availability: [],
  })

  // Get unique brands and price range
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))], [])
  const maxPrice = useMemo(() => Math.max(...products.map((p) => p.price)), [])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) => filters.categories.includes(product.category))
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter((product) => filters.brands.includes(product.brand))
    }

    // Price filter
    filtered = filtered.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating >= filters.rating)
    }

    // Availability filter
    if (filters.availability.length > 0) {
      filtered = filtered.filter((product) => filters.availability.includes(product.availability))
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price)
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price)
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating)
      case "newest":
        return filtered.sort((a, b) => b.id - a.id)
      default:
        return filtered
    }
  }, [searchQuery, filters, sortBy])

  const handleFilterChange = (key: keyof FilterState, value: string | number | [number, number] | string[]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, maxPrice],
      rating: 0,
      availability: [],
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
          "fixed lg:sticky lg:top-0 left-0 w-80 h-screen overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <FilterSidebar
            brands={brands}
            filters={filters}
            maxPrice={maxPrice}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
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
          {filteredProducts.length > 0 ? (
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
                  : "space-y-4",
              )}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} layout={viewMode} showCompareButton={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground dark:text-muted-foreground mb-4">
                <SlidersHorizontal className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                No products found
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
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