"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2, Check, MapPin, Loader2 } from "lucide-react"
import { apiFetch } from "@/lib/api-client"
import { cn } from "@/lib/utils"

interface Address {
  id: string
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode?: string
  country: string
  phoneNumber: string
  isDefault: boolean
}

interface AddressBookProps {
  onSelect?: (address: Address) => void
  selectedId?: string
}

export default function AddressBook({ onSelect, selectedId }: AddressBookProps = {}) {
  const [addresses, setAddresses] = useState<Address[]>([])
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  // Form State
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isDefault, setIsDefault] = useState(false)

  const [saving, setSaving] = useState(false)

  const loadAddresses = () => {
    setLoading(true)
    apiFetch<Address[]>("/addresses")
      .then((data) => {
        const list = data || []
        setAddresses(list)
        if (onSelect && list.length > 0) {
          const defaultAddr = list.find((a) => a.isDefault) || list[0]
          if (defaultAddr && !selectedId) {
            onSelect(defaultAddr)
          }
        }
      })
      .catch((err) => console.error("Error loading addresses:", err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadAddresses()
  }, [])

  const resetForm = () => {
    setFirstName("")
    setLastName("")
    setAddressLine1("")
    setAddressLine2("")
    setCity("")
    setState("")
    setPostalCode("")
    setCountry("")
    setPhoneNumber("")
    setIsDefault(false)
    setEditingId(null)
    setIsEditing(false)
  }

  const handleEditClick = (address: Address) => {
    setEditingId(address.id)
    setFirstName(address.firstName)
    setLastName(address.lastName)
    setAddressLine1(address.addressLine1)
    setAddressLine2(address.addressLine2 || "")
    setCity(address.city)
    setState(address.state || "")
    setPostalCode(address.postalCode || "")
    setCountry(address.country)
    setPhoneNumber(address.phoneNumber)
    setIsDefault(address.isDefault)
    setIsEditing(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const payload = {
      firstName,
      lastName,
      addressLine1,
      addressLine2: addressLine2 || undefined,
      city,
      state: state || undefined,
      postalCode: postalCode || undefined,
      country,
      phoneNumber,
      isDefault,
    }

    try {
      if (editingId) {
        // Update Address
        await apiFetch(`/addresses/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        })
      } else {
        // Create Address
        await apiFetch("/addresses", {
          method: "POST",
          body: JSON.stringify(payload),
        })
      }
      resetForm()
      loadAddresses()
    } catch (err) {
      console.error("Failed to save address:", err)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return
    try {
      await apiFetch(`/addresses/${id}`, {
        method: "DELETE",
      })
      loadAddresses()
    } catch (err) {
      console.error("Failed to delete address:", err)
    }
  }

  const handleSetDefault = async (id: string) => {
    try {
      await apiFetch(`/addresses/${id}/default`, {
        method: "PUT",
      })
      loadAddresses()
    } catch (err) {
      console.error("Failed to set default address:", err)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address Book</h3>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Address
          </Button>
        )}
      </div>

      {isEditing ? (
        <Card className="border border-orange-100 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-md">
              {editingId ? "Edit Address" : "Add New Address"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium">First Name *</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium">Address Line 1 *</label>
                <input
                  type="text"
                  required
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  placeholder="Street address, P.O. box, company name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium">Address Line 2 (Optional)</label>
                <input
                  type="text"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  placeholder="Apartment, suite, unit, building, floor"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium">City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">State / Region</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Postal / Zip Code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium">Country *</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                    placeholder="e.g. Bangladesh"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full text-sm p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800 focus:outline-orange-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="isDefault"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded"
                />
                <label htmlFor="isDefault" className="text-sm cursor-pointer select-none">
                  Set as default delivery address
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Save Address
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : addresses.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed rounded-lg dark:border-zinc-800">
          <MapPin className="h-10 w-10 mx-auto text-zinc-400 mb-2" />
          <p className="text-sm text-zinc-500">No addresses saved yet.</p>
          <Button onClick={() => setIsEditing(true)} size="sm" className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Add First Address
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((address) => (
            <Card
              key={address.id}
              className={cn(
                "relative overflow-hidden transition-all",
                onSelect && "cursor-pointer hover:border-orange-500/80",
                address.id === selectedId || (address.isDefault && !selectedId)
                  ? "border-orange-500 dark:border-orange-600 shadow-md ring-2 ring-orange-500/10"
                  : "border-zinc-200 dark:border-zinc-800"
              )}
              onClick={() => onSelect?.(address)}
            >
              {address.isDefault && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-bl font-semibold uppercase tracking-wider flex items-center">
                  <Check className="h-3 w-3 mr-0.5" /> Default
                </div>
              )}
              <CardContent className="p-4 flex flex-col justify-between h-full min-h-[160px]">
                <div className="space-y-1">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">
                    {address.firstName} {address.lastName}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {address.addressLine1}
                    {address.addressLine2 && `, ${address.addressLine2}`}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {address.city}
                    {address.state && `, ${address.state}`}
                    {address.postalCode && ` ${address.postalCode}`}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                    {address.country}
                  </p>
                  <p className="text-xs text-zinc-500 mt-2">
                    Phone: {address.phoneNumber}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                      onClick={() => handleEditClick(address)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-500 hover:text-red-500"
                      onClick={() => handleDelete(address.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {!address.isDefault && (
                    <Button
                      variant="link"
                      size="sm"
                      className="text-orange-500 p-0 hover:text-orange-600"
                      onClick={() => handleSetDefault(address.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
