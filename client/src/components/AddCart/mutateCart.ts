import { MutationFunction} from '@tanstack/react-query'

type addItemParams = {
    productId: string
    quantity: number
    token: string
}

type cartItem = {
  id: string,
  userId: string,
  productId: string,
  priceAtThisTime: number,
  quantity: number
} 

const mutateCart:MutationFunction<cartItem, ['itemInfo', addItemParams]>  = async (mutationKey) => {
  const {productId, quantity, token} = mutationKey[1]
  const response = await fetch('http://localhost:3001/api/cart', {
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${token}`
  },
  body: JSON.stringify({
    productId,
    quantity,
  }),
  })
  if (!response.ok) throw new Error('Error')
  return response.json()
}
export default mutateCart 
