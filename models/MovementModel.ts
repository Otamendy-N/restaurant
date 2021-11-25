import { WorkModel } from '~/models/WorkModel'

export interface ResponsableModel {
  borrado: boolean
  ci: string
  id: number
  nombre: string
  obra: WorkModel
  obraId: number
}

export interface MovementDetails {
  cantidad: number
  nombre: string
  stock: number
  unidadDeMedida: string
}

export interface MovementModel {
  depositero: string
  detalles: MovementDetails[]
  fecha: string
  id: number
  observacion: string
  responsable: ResponsableModel
  tipoMovimiento: string
  zonaObra: string
}
