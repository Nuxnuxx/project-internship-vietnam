import { MutationFunction } from '@tanstack/react-query'

type APILoginResponse = {
  result: {
    count: number
  }
}

type Params = {
  id: string
  token: string
}

const deleteProductById: MutationFunction<
  APILoginResponse,
  ['deleteProduct', Params]
> = async (mutationKey) => {
  const { id, token }  = mutationKey[1]

  if (!id) {
    throw new Error(`error in form`)
  }

  const result = await fetch(`http://localhost:3001/api/cart/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  if (!result.ok) throw new Error('error in fetch')

  return result.json()
}
export default deleteProductById
