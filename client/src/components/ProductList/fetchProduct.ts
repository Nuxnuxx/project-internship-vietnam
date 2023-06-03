import { QueryFunction } from '@tanstack/react-query'

type APIResponse = {
  products: Product[]
}

const fetchProducts: QueryFunction<
  APIResponse,
  ['products']
> = async () => {

  const products = await fetch('http://localhost:3001/api/products')
  if (!products.ok)
    throw new Error(`fetch error on products`)

  return products.json()
}
export default fetchProducts
