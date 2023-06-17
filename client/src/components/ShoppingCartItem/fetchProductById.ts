import { QueryFunction } from '@tanstack/react-query'

type APIResponse = {
  product: Product
}

const fetchProductById: QueryFunction<APIResponse, ['product', string | undefined]> = async ({
  queryKey,
}) => {
  const id = queryKey[1]

  const product = await fetch(`http://localhost:3001/api/products/${id}`)

  if (!product.ok) throw new Error('Impossible to fetch the cart for the user')

  return product.json()
}

export default fetchProductById
