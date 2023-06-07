import { QueryFunction } from '@tanstack/react-query'

type CartItem = {
  id: string
  userId: string
  productId: string
  priceAtThisTime: number
  quantity: number
}

type APIResponse = {
  result: CartItem[]
}

const fetchCart: QueryFunction<APIResponse, ['cart', string]> = async ({
  queryKey,
}) => {
  const token = queryKey[1]

  const cart = await fetch('http://localhost:3001/api/cart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!cart.ok) throw new Error('Impossible to fetch the cart for the user')

  return cart.json()
}

export default fetchCart
