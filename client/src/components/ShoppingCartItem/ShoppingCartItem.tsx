import { useQuery } from '@tanstack/react-query'
import fetchProductById from './fetchProductById'

type CartItem = {
  id: string
  userId: string
  productId: string
  priceAtThisTime: number
  quantity: number
}

const ShoppingCartItem = (props: CartItem) => {
  const { isLoading, data } = useQuery(
    ['product', props.productId],
    fetchProductById,
  )

  if (isLoading || !data) {
    return <div>X</div>
  }

  const product = data.product

  return (
    <div className='cart-item'>
      <img src={product.imageUrl}/>
      <div className='cart-info'>
        <div>{product.name}</div>
        <div>{props.priceAtThisTime}$</div>
      </div>
      <div>{props.quantity}</div>
    </div>
  )
}

export default ShoppingCartItem
