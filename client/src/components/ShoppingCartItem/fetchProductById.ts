import { QueryFunction } from '@tanstack/react-query'

type APIResponse = {
  product: Product
}

const fetchProductById: QueryFunction<APIResponse, ['product', string | undefined]> = async ({
  queryKey,
}) => {
  const id = queryKey[1]

  const product = await fetch(`http://localhost:3001/api/products/${id}`)

  if (!product.ok) throw new Error('impossible to fetch product')

  return product.json()
}

export default fetchProductById
