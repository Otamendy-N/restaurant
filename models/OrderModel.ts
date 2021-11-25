export interface OrderDetail {
  productId: number;
  name?: string;
  quantity: number;
}

export interface GetOrderDetail {
  id: number;
  product: string;
  quantity: number;
}

export interface OrderModel {
  constructionId: number;
  observacion: string;
  detalle: OrderDetail[];
}

export interface GetOrderModel {
  id: number;
  jefeObra: string;
  construction: string;
  fecha: string;
  status: string;
  observacion: string;
  detalle: GetOrderDetail[]
}
