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

type CATEGORY = 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4'
