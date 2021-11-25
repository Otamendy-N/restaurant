export interface ProductModel {
  id: number
  name: string
  count: number
  unitId: number
  unitStr: string
  saved?: boolean
  inventoryQuantity?: number
}
