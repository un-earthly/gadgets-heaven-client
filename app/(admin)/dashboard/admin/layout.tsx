import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, Users, ShoppingBag, Settings, LogOut, Menu, X, Bell, Search } from 'lucide-react'
import React from 'react'; 

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-orange-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-orange-600">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-semibold tracking-wider text-white">
              Gadgets Heaven Admin
            </span>
          </div>
          <nav className="flex-1 px-2 mt-5 space-y-1 bg-orange-600">
            <Link
              href="/admin"
              className="flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-orange-700"
            >
              <BarChart className="w-6 h-6 mr-3" />
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-orange-700"
            >
              <Users className="w-6 h-6 mr-3" />
              Users
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-orange-700"
            >
              <ShoppingBag className="w-6 h-6 mr-3" />
              Products
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-orange-700"
            >
              <Settings className="w-6 h-6 mr-3" />
              Settings
            </Link>
          </nav>
          <div className="flex-shrink-0 p-4">
            <Button
              variant="outline"
              className="flex items-center justify-center w-full text-white bg-orange-700 hover:bg-orange-800"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="md:hidden">
        {/* Add mobile menu logic here */}
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="shadow-sm">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex items-center">
              <form className="hidden md:block">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 pl-10"
                  />
                  <Search className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Bell className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Admin avatar"
                />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto ">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
