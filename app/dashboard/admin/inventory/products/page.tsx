"use client"

import { useCallback, useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react"
import { ApiProduct, fetchProducts } from "@/lib/api/products"
import {
  createProduct,
  updateProduct,
  deleteProduct,
  createVariant,
  updateVariant,
  deleteVariant,
} from "@/lib/api/admin-products"

interface VariantRow {
  id?: string
  attributes: Record<string, string>
  sku: string
  stockQuantity: number
  priceOverride?: number
  markedForDelete?: boolean
}

interface FormState {
  id?: string
  name: string
  description: string
  price: number
  stockQuantity: number
  categories: string
  brand: string
  sku: string
  optionTypes: string
  variants: VariantRow[]
}

const emptyForm: FormState = {
  name: "",
  description: "",
  price: 0,
  stockQuantity: 0,
  categories: "",
  brand: "",
  sku: "",
  optionTypes: "",
  variants: [],
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ApiProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reload = useCallback(() => {
    setLoading(true)
    fetchProducts({ limit: 50 })
      .then((res) => setProducts(res.items))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    reload()
  }, [reload])

  const optionTypeList = form.optionTypes
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  const openCreate = () => {
    setForm(emptyForm)
    setError(null)
    setDialogOpen(true)
  }

  const openEdit = (product: ApiProduct) => {
    const optionTypes = new Set<string>()
    for (const v of product.variants ?? []) {
      for (const key of Object.keys(v.attributes)) optionTypes.add(key)
    }
    setForm({
      id: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      stockQuantity: product.stockQuantity,
      categories: product.categories.join(", "),
      brand: product.brand ?? "",
      sku: product.sku ?? "",
      optionTypes: [...optionTypes].join(", "),
      variants: (product.variants ?? []).map((v) => ({
        id: v.id,
        attributes: { ...v.attributes },
        sku: v.sku,
        stockQuantity: v.stockQuantity,
        priceOverride:
          v.priceOverride !== null && v.priceOverride !== undefined
            ? Number(v.priceOverride)
            : undefined,
      })),
    })
    setError(null)
    setDialogOpen(true)
  }

  const addVariantRow = () => {
    setForm((f) => ({
      ...f,
      variants: [
        ...f.variants,
        {
          attributes: Object.fromEntries(optionTypeList.map((t) => [t, ""])),
          sku: "",
          stockQuantity: 0,
        },
      ],
    }))
  }

  const updateVariantRow = (index: number, patch: Partial<VariantRow>) => {
    setForm((f) => ({
      ...f,
      variants: f.variants.map((v, i) => (i === index ? { ...v, ...patch } : v)),
    }))
  }

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    try {
      const productInput = {
        name: form.name,
        description: form.description,
        price: Number(form.price),
        stockQuantity: Number(form.stockQuantity),
        categories: form.categories
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        brand: form.brand || undefined,
        sku: form.sku || undefined,
      }

      let productId = form.id
      if (productId) {
        await updateProduct(productId, productInput)
      } else {
        const created = await createProduct(productInput)
        productId = created.id
      }

      // Variants are optional — a flat product saves with zero variants.
      for (const row of form.variants) {
        if (row.markedForDelete) {
          if (row.id) await deleteVariant(productId, row.id)
          continue
        }
        const attributes = Object.fromEntries(
          Object.entries(row.attributes).filter(([, v]) => v.trim() !== ""),
        )
        if (!row.sku || Object.keys(attributes).length === 0) continue
        const input = {
          attributes,
          sku: row.sku,
          stockQuantity: Number(row.stockQuantity),
          priceOverride:
            row.priceOverride !== undefined && !Number.isNaN(row.priceOverride)
              ? Number(row.priceOverride)
              : undefined,
        }
        if (row.id) {
          await updateVariant(productId, row.id, input)
        } else {
          await createVariant(productId, input)
        }
      }

      setDialogOpen(false)
      reload()
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (product: ApiProduct) => {
    if (!window.confirm(`Delete "${product.name}"? This cannot be undone.`))
      return
    try {
      await deleteProduct(product.id)
      reload()
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed")
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground">
            Manage your catalogue, stock and variants
          </p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {error && !dialogOpen && (
        <p className="text-sm text-red-600 font-medium">{error}</p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Catalogue</CardTitle>
          <CardDescription>
            Products with options show a variant count; stock for those is
            tracked per variant
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Variants</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => {
                  const variantCount = product.variants?.length ?? 0
                  const stock =
                    variantCount > 0
                      ? product.variants.reduce(
                          (sum, v) => sum + v.stockQuantity,
                          0,
                        )
                      : product.stockQuantity
                  return (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>{product.sku ?? "—"}</TableCell>
                      <TableCell>৳{Number(product.price).toFixed(2)}</TableCell>
                      <TableCell>{stock} units</TableCell>
                      <TableCell>
                        {variantCount > 0 ? (
                          <Badge variant="secondary">{variantCount}</Badge>
                        ) : (
                          "—"
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.status === "published"
                              ? "default"
                              : product.status === "out_of_stock"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEdit(product)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(product)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {form.id ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Brand</Label>
                <Input
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Price (৳)</Label>
                <Input
                  type="number"
                  min={0}
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: Number(e.target.value) })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Base stock</Label>
                <Input
                  type="number"
                  min={0}
                  value={form.stockQuantity}
                  onChange={(e) =>
                    setForm({ ...form, stockQuantity: Number(e.target.value) })
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Used when the product has no variants
                </p>
              </div>
              <div className="space-y-2">
                <Label>SKU</Label>
                <Input
                  value={form.sku}
                  onChange={(e) => setForm({ ...form, sku: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Categories (comma separated)</Label>
              <Input
                value={form.categories}
                onChange={(e) =>
                  setForm({ ...form, categories: e.target.value })
                }
                placeholder="jerseys, cricket"
              />
            </div>

            <div className="border-t pt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Variants (optional)</h3>
                <p className="text-sm text-muted-foreground">
                  Leave empty for a simple product. Define option types (e.g.
                  size or size, color), then add one row per combination with
                  its own SKU and stock.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Option types (comma separated)</Label>
                <Input
                  value={form.optionTypes}
                  onChange={(e) =>
                    setForm({ ...form, optionTypes: e.target.value })
                  }
                  placeholder="size"
                />
              </div>

              {form.variants.filter((v) => !v.markedForDelete).length > 0 && (
                <Table>
                  <TableHeader>
                    <TableRow>
                      {optionTypeList.map((t) => (
                        <TableHead key={t} className="capitalize">
                          {t}
                        </TableHead>
                      ))}
                      <TableHead>SKU</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Price override</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {form.variants.map((row, index) =>
                      row.markedForDelete ? null : (
                        <TableRow key={index}>
                          {optionTypeList.map((t) => (
                            <TableCell key={t}>
                              <Input
                                value={row.attributes[t] ?? ""}
                                onChange={(e) =>
                                  updateVariantRow(index, {
                                    attributes: {
                                      ...row.attributes,
                                      [t]: e.target.value,
                                    },
                                  })
                                }
                                className="w-24"
                              />
                            </TableCell>
                          ))}
                          <TableCell>
                            <Input
                              value={row.sku}
                              onChange={(e) =>
                                updateVariantRow(index, { sku: e.target.value })
                              }
                              className="w-32"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min={0}
                              value={row.stockQuantity}
                              onChange={(e) =>
                                updateVariantRow(index, {
                                  stockQuantity: Number(e.target.value),
                                })
                              }
                              className="w-20"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min={0}
                              value={row.priceOverride ?? ""}
                              onChange={(e) =>
                                updateVariantRow(index, {
                                  priceOverride:
                                    e.target.value === ""
                                      ? undefined
                                      : Number(e.target.value),
                                })
                              }
                              className="w-28"
                              placeholder="base"
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                updateVariantRow(index, {
                                  markedForDelete: true,
                                })
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ),
                    )}
                  </TableBody>
                </Table>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={addVariantRow}
                disabled={optionTypeList.length === 0}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add variant
              </Button>
            </div>

            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setDialogOpen(false)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving || !form.name}>
                {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
