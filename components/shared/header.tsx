"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ShoppingCart, User, Menu, X } from "lucide-react"

const navLinks = ["Home", "Products", "Services", "Reviews", "Blog", "Contact Us"]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          Gadgets Heaven
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "")}`} className="text-gray-600 hover:text-orange-600">
              {link}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Input type="search" placeholder="Search products..." className="w-64" />
          {[ShoppingCart, User].map((Icon, idx) => (
            <Button key={idx} variant="ghost" size="icon">
              <Icon className="h-5 w-5" />
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "")}`} className="text-gray-600 hover:text-orange-600">
                {link}
              </Link>
            ))}
          </nav>
          <div className="mt-4 space-y-2">
            <Input type="search" placeholder="Search products..." className="w-full" />
            <div className="flex justify-between">
              {[{ Icon: ShoppingCart, label: "Cart" }, { Icon: User, label: "Login" }].map(({ Icon, label }) => (
                <Button key={label} variant="ghost" size="sm">
                  <Icon className="h-5 w-5 mr-2" /> {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
