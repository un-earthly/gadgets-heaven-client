import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { FilterState } from "@/lib/types"
import { Star, X } from "lucide-react"
import { categories } from "@/data"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export function FilterSidebar({
    filters,
    brands,
    maxPrice,
    onFilterChange,
    onClearFilters,
}: {
    filters: FilterState
    brands: string[]
    maxPrice: number
    onFilterChange: (key: keyof FilterState, value: string | number | [number, number] | string[]) => void
    onClearFilters: () => void
}) {

    return (
        <Sidebar className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground dark:bg-sidebar dark:text-sidebar-foreground">
            <SidebarHeader className="border-b border-sidebar-border dark:border-sidebar-border">
                <div className="flex items-center justify-between p-4">
                    <h2 className="text-lg font-semibold text-sidebar-foreground dark:text-sidebar-foreground">Filters</h2>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClearFilters}
                            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground dark:text-sidebar-foreground dark:hover:bg-sidebar-accent dark:hover:text-sidebar-accent-foreground"
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-4 space-y-6">
                {/* Categories */}
                <div>
                    <h3 className="font-medium mb-3 text-sidebar-foreground dark:text-sidebar-foreground">Categories</h3>
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <div key={category.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`category-${category.id}`}
                                    checked={filters.categories.includes(category.name)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            onFilterChange("categories", [...filters.categories, category.name])
                                        } else {
                                            onFilterChange(
                                                "categories",
                                                filters.categories.filter((c) => c !== category.name),
                                            )
                                        }
                                    }}
                                />
                                <label
                                    htmlFor={`category-${category.id}`}
                                    className="text-sm text-sidebar-foreground dark:text-sidebar-foreground cursor-pointer"
                                >
                                    {category.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="bg-sidebar-border dark:bg-sidebar-border" />

                {/* Brands */}
                <div>
                    <h3 className="font-medium mb-3 text-sidebar-foreground dark:text-sidebar-foreground">Brands</h3>
                    <div className="space-y-2">
                        {brands.map((brand) => (
                            <div key={brand} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`brand-${brand}`}
                                    checked={filters.brands.includes(brand)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            onFilterChange("brands", [...filters.brands, brand])
                                        } else {
                                            onFilterChange(
                                                "brands",
                                                filters.brands.filter((b) => b !== brand),
                                            )
                                        }
                                    }}
                                />
                                <label
                                    htmlFor={`brand-${brand}`}
                                    className="text-sm text-sidebar-foreground dark:text-sidebar-foreground cursor-pointer"
                                >
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="bg-sidebar-border dark:bg-sidebar-border" />

                {/* Price Range */}
                <div>
                    <h3 className="font-medium mb-3 text-sidebar-foreground dark:text-sidebar-foreground">Price Range</h3>
                    <div className="px-2">
                        <Slider
                            value={filters.priceRange}
                            onValueChange={(value) => onFilterChange("priceRange", value as [number, number])}
                            max={maxPrice}
                            step={10}
                            className="mb-4"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground dark:text-muted-foreground">
                            <span>${filters.priceRange[0]}</span>
                            <span>${filters.priceRange[1]}</span>
                        </div>
                    </div>
                </div>

                <Separator className="bg-sidebar-border dark:bg-sidebar-border" />

                {/* Rating */}
                <div>
                    <h3 className="font-medium mb-3 text-sidebar-foreground dark:text-sidebar-foreground">Minimum Rating</h3>
                    <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`rating-${rating}`}
                                    checked={filters.rating === rating}
                                    onCheckedChange={(checked) => {
                                        onFilterChange("rating", checked ? rating : 0)
                                    }}
                                />
                                <label
                                    htmlFor={`rating-${rating}`}
                                    className="flex items-center text-sm text-sidebar-foreground dark:text-sidebar-foreground cursor-pointer"
                                >
                                    <div className="flex">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={cn(
                                                    "h-3 w-3",
                                                    i < rating
                                                        ? "fill-yellow-400 text-yellow-400 dark:fill-yellow-400 dark:text-yellow-400"
                                                        : "text-muted-foreground dark:text-muted-foreground",
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

                <Separator className="bg-sidebar-border dark:bg-sidebar-border" />

                {/* Availability */}
                <div>
                    <h3 className="font-medium mb-3 text-sidebar-foreground dark:text-sidebar-foreground">Availability</h3>
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
                                            onFilterChange("availability", [...filters.availability, option.value])
                                        } else {
                                            onFilterChange(
                                                "availability",
                                                filters.availability.filter((a) => a !== option.value),
                                            )
                                        }
                                    }}
                                />
                                <label
                                    htmlFor={`availability-${option.value}`}
                                    className="text-sm text-sidebar-foreground dark:text-sidebar-foreground cursor-pointer"
                                >
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}