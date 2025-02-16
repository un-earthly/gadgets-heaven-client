"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ShoppingCart, User, Menu, X, Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = ["Home", "Products", "Services", "Reviews", "Blog", "Contact Us"]

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
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light") 

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setResolvedTheme(systemPrefersDark ? "dark" : "light")
    } else {
      setResolvedTheme(theme as "light" | "dark")
    }
  }, [theme])
  return (
    <header className="shadow-md dark:shadow-slate-800/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="">
          <Image src={resolvedTheme === "light" ? "/logo-text-dark.png" : "/logo-beige.png"} height={100} width={120} alt="logo" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "")}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-600">
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
          <ModeToggle />

        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-transparent py-2 px-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "")}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-600">
                {link}
              </Link>
            ))}
          </nav>
          <div className="mt-4 space-y-2">
            <Input type="search" placeholder="Search products..." className="w-full" />
            <div className="flex justify-start">
            <ModeToggle />
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
