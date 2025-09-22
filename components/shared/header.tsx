"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingCart, Menu, X, Moon, Sun, Search } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import AdvancedSearch from "../product/advanced-search"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const { theme } = useTheme()
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")
  const pathname = usePathname()

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setResolvedTheme(systemPrefersDark ? "dark" : "light")
    } else {
      setResolvedTheme(theme as "light" | "dark")
    }
  }, [theme])

  const navigationItems = [
    { href: "/products", label: "Shop All" },
    { href: "/products/new", label: "New Arrivals" },
    { href: "/products/deals", label: "Deals" },
    { href: "/services", label: "Services" },
    { href: "/support", label: "Support" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-zinc-950 shadow-sm">
        {/* Top Bar - Contact & Support */}
        <div className="bg-orange-50 dark:bg-zinc-900 py-2 border-b border-orange-100 dark:border-zinc-800">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Support: (123) 456-7890</span>
            <Link href="/track-order" className="text-orange-600 dark:text-orange-400 hover:underline">
              Track Your Order
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white dark:bg-zinc-950 shadow-sm">
          <div className="container mx-auto px-4">
            {/* Upper Section - Logo & Actions */}
            <div className="py-4 flex items-center justify-between">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={resolvedTheme === "light" ? "/logo-text-dark.png" : "/logo-beige.png"}
                  height={100}
                  width={120}
                  alt="logo"
                />
              </Link>

              {/* Desktop Search Bar */}
              <div className="hidden md:flex flex-1 max-w-xl mx-8">
                <AdvancedSearch
                  onSearch={(query) => {
                    // Navigate to products page with search query
                    window.location.href = `/products?search=${encodeURIComponent(query)}`
                  }}
                />
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="text-zinc-600 dark:text-zinc-400" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Link href="/cart">
                  <Button variant="ghost" size="icon" className="text-zinc-600 dark:text-zinc-400">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </Link>
                <ModeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Search (Collapsible) */}
            {isSearchOpen && (
              <div className="md:hidden py-3 border-t border-orange-100 dark:border-zinc-800">
                <AdvancedSearch
                  onSearch={(query) => {
                    // Navigate to products page with search query
                    window.location.href = `/products?search=${encodeURIComponent(query)}`
                    setIsSearchOpen(false)
                  }}
                />
              </div>
            )}

            {/* Navigation Bar */}
            <nav className="hidden md:flex py-4 border-t border-orange-100 dark:border-zinc-800">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors ${pathname === item.href
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-orange-100 dark:border-zinc-800">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-zinc-900 dark:text-zinc-100 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-orange-100 dark:border-zinc-800">
                <Button variant="default" className="w-full mb-2" asChild>
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View Cart
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Category Bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "block" : "hidden"
      )}>
        {/* Solid background instead of backdrop-blur */}
        <div className="absolute inset-0 bg-white dark:bg-zinc-950 shadow-lg border-b border-orange-100 dark:border-zinc-800" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-orange-25/20 to-orange-50/30 dark:from-orange-900/10 dark:via-orange-800/5 dark:to-orange-900/10" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={resolvedTheme === "light" ? "/logo-text-dark.png" : "/logo-beige.png"}
                height={60}
                width={80}
                alt="logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full font-medium transition-all duration-200 group",
                    pathname === item.href
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/25"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-700 dark:hover:text-orange-300"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {pathname === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
                  )}
                  {pathname !== item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-zinc-600 dark:text-zinc-400 md:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 dark:hover:bg-orange-900/30"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <div className="hidden md:block">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border with gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 dark:via-orange-800/50 to-transparent" />
      </div>
    </>
  )
}

export default Header