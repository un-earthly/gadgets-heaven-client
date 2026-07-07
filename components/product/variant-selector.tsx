"use client"

import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ApiProductVariant } from "@/lib/api/products"
import { cn } from "@/lib/utils"

interface VariantSelectorProps {
  variants: ApiProductVariant[]
  selected: Record<string, string>
  onChange: (selected: Record<string, string>) => void
}

// Groups variant attributes into { size: ["S","M","L"], color: [...] } and
// renders one row of option buttons per attribute key. An option is disabled
// only when every variant containing it (given the other selected attributes)
// is out of stock — so "M sold out" never hides the whole product.
export default function VariantSelector({
  variants,
  selected,
  onChange,
}: VariantSelectorProps) {
  const attributeOptions = useMemo(() => {
    const options: Record<string, string[]> = {}
    for (const variant of variants) {
      for (const [key, value] of Object.entries(variant.attributes)) {
        if (!options[key]) options[key] = []
        if (!options[key].includes(value)) options[key].push(value)
      }
    }
    return options
  }, [variants])

  const isOptionAvailable = (key: string, value: string): boolean => {
    return variants.some((variant) => {
      if (variant.attributes[key] !== value) return false
      // Respect the other currently-selected attributes
      for (const [otherKey, otherValue] of Object.entries(selected)) {
        if (otherKey === key) continue
        if (variant.attributes[otherKey] !== otherValue) return false
      }
      return variant.stockQuantity > 0
    })
  }

  const handleSelect = (key: string, value: string) => {
    onChange({ ...selected, [key]: value })
  }

  return (
    <div className="space-y-4">
      {Object.entries(attributeOptions).map(([key, values]) => (
        <div key={key} className="space-y-2">
          <h3 className="font-medium capitalize">
            {key}
            {selected[key] && (
              <span className="ml-2 text-sm font-normal text-zinc-500">
                {selected[key]}
              </span>
            )}
          </h3>
          <div className="flex flex-wrap gap-2">
            {values.map((value) => {
              const available = isOptionAvailable(key, value)
              return (
                <Button
                  key={value}
                  variant={selected[key] === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSelect(key, value)}
                  className={cn(!available && "opacity-50 line-through")}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export function findMatchingVariant(
  variants: ApiProductVariant[],
  selected: Record<string, string>,
): ApiProductVariant | null {
  return (
    variants.find((variant) =>
      Object.entries(variant.attributes).every(
        ([key, value]) => selected[key] === value,
      ),
    ) ?? null
  )
}

export function isSelectionComplete(
  variants: ApiProductVariant[],
  selected: Record<string, string>,
): boolean {
  const keys = new Set<string>()
  for (const variant of variants) {
    for (const key of Object.keys(variant.attributes)) keys.add(key)
  }
  return [...keys].every((key) => selected[key])
}
