"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Gadgets Heaven
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-orange-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-600 hover:text-orange-600">
            Shop
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-orange-600">
            Services
          </Link>
          <Link href="/reviews" className="text-gray-600 hover:text-orange-600">
            Reviews
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-orange-600">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-orange-600">
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Input type="search" placeholder="Search products..." className="w-64" />
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/" className="text-gray-600 hover:text-orange-600">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-orange-600">
              Shop
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-orange-600">
              Services
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-orange-600">
              Reviews
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-orange-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-600">
              Contact Us
            </Link>
          </nav>
          <div className="mt-4 px-4 space-y-2">
            <Input type="search" placeholder="Search products..." className="w-full" />
            <div className="flex justify-between">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

