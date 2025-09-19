"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Product } from "@/data"

interface ComparisonContextType {
  compareProducts: Product[]
  addToComparison: (product: Product) => void
  removeFromComparison: (productId: number) => void
  clearComparison: () => void
  isInComparison: (productId: number) => boolean
  maxProducts: number
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined)

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [compareProducts, setCompareProducts] = useState<Product[]>([])
  const maxProducts = 4

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('compareProducts')
    if (stored) {
      try {
        setCompareProducts(JSON.parse(stored))
      } catch (error) {
        console.error('Error loading comparison products:', error)
      }
    }
  }, [])

  // Save to localStorage whenever compareProducts changes
  useEffect(() => {
    localStorage.setItem('compareProducts', JSON.stringify(compareProducts))
  }, [compareProducts])

  const addToComparison = (product: Product) => {
    setCompareProducts(prev => {
      // Don't add if already exists
      if (prev.find(p => p.id === product.id)) return prev
      
      // Don't add if at max capacity
      if (prev.length >= maxProducts) return prev
      
      return [...prev, product]
    })
  }

  const removeFromComparison = (productId: number) => {
    setCompareProducts(prev => prev.filter(p => p.id !== productId))
  }

  const clearComparison = () => {
    setCompareProducts([])
  }

  const isInComparison = (productId: number) => {
    return compareProducts.some(p => p.id === productId)
  }

  return (
    <ComparisonContext.Provider value={{
      compareProducts,
      addToComparison,
      removeFromComparison,
      clearComparison,
      isInComparison,
      maxProducts
    }}>
      {children}
    </ComparisonContext.Provider>
  )
}

export function useComparison() {
  const context = useContext(ComparisonContext)
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider')
  }
  return context
}