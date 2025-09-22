
type ViewMode = "grid" | "list"
type SortOption = "relevance" | "price-low" | "price-high" | "rating" | "newest"

interface FilterState {
    categories: string[]
    brands: string[]
    priceRange: [number, number]
    rating: number
    availability: string[]
}



export type { FilterState, SortOption, ViewMode }