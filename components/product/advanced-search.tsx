"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X, Clock, TrendingUp } from "lucide-react"
import { products, categories } from "@/data"
import { cn } from "@/lib/utils"

interface SearchSuggestion {
  type: 'product' | 'category' | 'brand' | 'recent' | 'trending'
  text: string
  id?: number
  count?: number
}

interface AdvancedSearchProps {
  onSearch?: (query: string) => void
  placeholder?: string
  className?: string
}

export default function AdvancedSearch({
  onSearch,
  placeholder = "Search for products...",
  className
}: AdvancedSearchProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock trending searches
  const trendingSearches = useMemo(() => [
    "Gaming Laptop",
    "Wireless Headphones",
    "Smart Watch",
    "iPhone",
    "Gaming Console"
  ], [])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length === 0) {
      // Show recent and trending when no query
      const recentSuggestions: SearchSuggestion[] = recentSearches.slice(0, 3).map(search => ({
        type: 'recent',
        text: search
      }))

      const trendingSuggestions: SearchSuggestion[] = trendingSearches.slice(0, 5).map(search => ({
        type: 'trending',
        text: search
      }))

      setSuggestions([...recentSuggestions, ...trendingSuggestions])
    } else {
      // Generate suggestions based on query
      const newSuggestions: SearchSuggestion[] = []

      // Product suggestions
      const matchingProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 3)

      matchingProducts.forEach(product => {
        newSuggestions.push({
          type: 'product',
          text: product.name,
          id: product.id
        })
      })

      // Category suggestions
      const matchingCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 2)

      matchingCategories.forEach(category => {
        const productCount = products.filter(p => p.category === category.name).length
        newSuggestions.push({
          type: 'category',
          text: category.name,
          count: productCount
        })
      })

      // Brand suggestions
      const brands = [...new Set(products.map(p => p.brand))]
      const matchingBrands = brands.filter(brand =>
        brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 2)

      matchingBrands.forEach(brand => {
        const productCount = products.filter(p => p.brand === brand).length
        newSuggestions.push({
          type: 'brand',
          text: brand,
          count: productCount
        })
      })

      setSuggestions(newSuggestions)
    }
  }, [query, recentSearches, trendingSearches])

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const updatedRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5)
      setRecentSearches(updatedRecent)
      localStorage.setItem('recentSearches', JSON.stringify(updatedRecent))

      onSearch?.(searchQuery)
      setQuery(searchQuery)
      setIsOpen(false)
    }
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    handleSearch(suggestion.text)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  const getSuggestionIcon = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'recent':
        return <Clock className="h-4 w-4 text-zinc-400" />
      case 'trending':
        return <TrendingUp className="h-4 w-4 text-orange-500" />
      default:
        return <Search className="h-4 w-4 text-zinc-400" />
    }
  }

  const getSuggestionBadge = (suggestion: SearchSuggestion) => {
    if (suggestion.type === 'category' || suggestion.type === 'brand') {
      return (
        <Badge variant="secondary" className="text-xs">
          {suggestion.count} products
        </Badge>
      )
    }
    if (suggestion.type === 'trending') {
      return (
        <Badge variant="outline" className="text-xs text-orange-600 border-orange-200">
          Trending
        </Badge>
      )
    }
    return null
  }

  return (
    <div ref={searchRef} className={cn("relative w-full max-w-xl", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(query)
            }
          }}
          className="pl-10 pr-10 bg-orange-50/50 dark:bg-zinc-900/50 border-orange-100 dark:border-zinc-800"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuery("")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {suggestions.length > 0 ? (
              <div className="py-2">
                {query.length === 0 && recentSearches.length > 0 && (
                  <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Recent Searches
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRecentSearches}
                        className="text-xs text-zinc-500 hover:text-zinc-700"
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                )}

                {suggestions.map((suggestion, index) => (
                  <div
                    key={`${suggestion.type}-${index}`}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {getSuggestionIcon(suggestion.type)}
                      <span className="text-sm">{suggestion.text}</span>
                    </div>
                    {getSuggestionBadge(suggestion)}
                  </div>
                ))}

                {query.length === 0 && trendingSearches.length > 0 && (
                  <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Trending Searches
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-zinc-500">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No suggestions found</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}