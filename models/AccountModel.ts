export interface AccountModel {
  id: number
  nombre: string
  logo: string | ArrayBuffer | null | undefined
  telefono: string
  logoBase64: string
  direccion: string
}
