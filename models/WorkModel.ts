import { Entities } from '~/models/Entities'

export interface WorkName {
  id: string
  nombre: string
}

export interface WorkModel {
  id: number
  nombre: string
  direccion: string
  encargado: string
  estado: string
  ciudad: string
  latitud: number
  longitud: number
  entidades: Entities[]
}

export interface PostWorkModel {
  ciudadId: number
  jefeObraId: number[]
  jefeCompraId: number[]
  encargadoId: number[]
  depositeroId: number[]
  empresaId: number
  estado: string
  nombre: string
  latitud: number
  longitud: number
  direccion: string
}
