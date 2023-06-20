import { MutationFunction } from '@tanstack/react-query'

type APICartResponse = {
  id: string,
  userId: string,
  items: [{ productId: string, quantity: number }],
}

const updateProductQuantityInCart: MutationFunction<APICartResponse, { productId: string, quantity: number, token: string }> = async ({ productId, quantity, token }) => {

  const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({ quantity }),
  })

  if (!response.ok) throw new Error('Impossible to update product quantity')

  return response.json()
}

export default updateProductQuantityInCart
