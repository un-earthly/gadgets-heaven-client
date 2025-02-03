import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
      <div>
          
          <h1 className="text-2xl font-semibold text-gray-900">User Dashboard</h1>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Orders</h3>
                      <div className="mt-5">
                          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                              <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">Order #</dt>
                                  <dd className="mt-1 text-sm text-gray-900">1234</dd>
                              </div>
                              <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                                  <dd className="mt-1 text-sm text-gray-900">Shipped</dd>
                              </div>
                          </dl>
                      </div>
                      <div className="mt-5">
                          <Button variant="outline" className="w-full">
                              View All Orders
                          </Button>
                      </div>
                  </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Wishlist</h3>
                      <div className="mt-5">
                          <p className="text-sm text-gray-500">You have 3 items in your wishlist.</p>
                      </div>
                      <div className="mt-5">
                          <Button variant="outline" className="w-full">
                              View Wishlist
                          </Button>
                      </div>
                  </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Account Summary</h3>
                      <div className="mt-5">
                          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                              <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">Total Orders</dt>
                                  <dd className="mt-1 text-sm text-gray-900">12</dd>
                              </div>
                              <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">Reward Points</dt>
                                  <dd className="mt-1 text-sm text-gray-900">250</dd>
                              </div>
                          </dl>
                      </div>
                      <div className="mt-5">
                          <Button variant="outline" className="w-full">
                              View Profile
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
