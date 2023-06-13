import { QueryFunction } from '@tanstack/react-query'

type APIResponse = {
  saucisse: []
}

const fetchProductsBySemantic: QueryFunction<
  APIResponse,
  ['semantic',string]
> = async ({ queryKey }) => {
  const input = queryKey[1]


  const products = await fetch(`http://localhost:8000/query/${input}`)

  if (!products.ok) throw new Error(`fetch error on products`)

  return products.json()
}
export default fetchProductsBySemantic
