export interface InventoryProduct {
  count: number
  id: number
  inventoryId: number
  product: string
  productId: number
  inventoryQuantity?: number // i know i shouldn't but i need this to work
}

export interface InventoryModel {
  id: number
  encargadoStr: number
  fecha: string
  status: number | string
  observation: string
  inventoryProducts: InventoryProduct[]
}

export interface CreateInventoryProduct {
  productId: number,
  inventoryQuantity?: number // i know i shouldn't but i need this to work
}

export interface CreateInventoryModel {
  observation: string,
  depositoId: number,
  products: CreateInventoryProduct[]
}
