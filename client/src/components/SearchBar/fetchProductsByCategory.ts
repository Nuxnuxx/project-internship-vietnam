import { QueryFunction } from '@tanstack/react-query'

type APIResponse = {
  products: Product[]
}

const fetchProductsByCategory: QueryFunction<
  APIResponse,
  ['productsByCategory', CATEGORY | undefined]
> = async ({ queryKey }) => {
  const category = queryKey[1]

  const url = category
    ? `http://localhost:3001/api/products/category/${category}`
    : 'http://localhost:3001/api/products'

  const products = await fetch(url)
  if (!products.ok) throw new Error(`fetch error on products`)

  return products.json()
}
export default fetchProductsByCategory
