import { QueryFunction } from '@tanstack/react-query'

type APIResponse = {
  products: Product[]
}

const fetchProductsByCategory: QueryFunction<
  APIResponse,
  ['productsByCategory', CATEGORY]
> = async ({ queryKey }) => {

  const category = queryKey[1]

  const products = await fetch(`http://localhost:3001/api/products/category/${category}`)
  if (!products.ok)
    throw new Error(`fetch error on products`)

  return products.json()
}
export default fetchProductsByCategory
