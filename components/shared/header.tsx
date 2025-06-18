"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ShoppingCart, Menu, X, Moon, Sun, Search } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"

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

  return (
    <header className="relative">
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
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-10 bg-orange-50/50 dark:bg-zinc-900/50 border-orange-100 dark:border-zinc-800"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
              </div>
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
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-10 bg-orange-50/50 dark:bg-zinc-900/50 border-orange-100 dark:border-zinc-800"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
              </div>
            </div>
          )}

          {/* Navigation Bar */}
          <nav className="hidden md:flex py-4 border-t border-orange-100 dark:border-zinc-800">
            <div className="flex items-center space-x-8">
              <Link
                href="/products"
                className={`font-medium ${pathname === "/products"
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
              >
                Shop All
              </Link>
              <Link
                href="/products/new"
                className={`font-medium ${pathname === "/products/new"
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
              >
                New Arrivals
              </Link>
              <Link
                href="/products/deals"
                className={`font-medium ${pathname === "/products/deals"
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
              >
                Deals
              </Link>
              <Link
                href="/services"
                className={`font-medium ${pathname === "/services"
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
              >
                Services
              </Link>
              <Link
                href="/support"
                className={`font-medium ${pathname === "/support"
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
              >
                Support
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-orange-100 dark:border-zinc-800">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-3">
              <Link
                href="/products"
                className="block text-zinc-900 dark:text-zinc-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All
              </Link>
              <Link
                href="/products/new"
                className="block text-zinc-900 dark:text-zinc-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                href="/products/deals"
                className="block text-zinc-900 dark:text-zinc-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <Link
                href="/services"
                className="block text-zinc-900 dark:text-zinc-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/support"
                className="block text-zinc-900 dark:text-zinc-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
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
  )
}

export default Header
