/// <reference types="vite/client" />
//

type Product = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: CATEGORY
  quantityInStock: number
  createdAt: string
  CartItem: CartItem[]
  OrderItem: OrderItem[]
}

type CATEGORY =
  | 'HIKING'
  | 'BASKETBALL'
  | 'BOXING'
  | 'RUNNING'
  | 'TENNIS'
  | 'CAMPING'
  | 'SWIMMING';
