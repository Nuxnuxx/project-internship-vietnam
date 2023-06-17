import { useQuery } from '@tanstack/react-query'
import fetchProductById from './fetchProductById'
import DeleteCartItem from '../DeleteCartItem/DeleteCartItem'

type CartItem = {
  id: string
  userId: string
  imageUrl: string
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

  const product = data.product ?? []

  const imageUrl = `../../src/assets/img/product/${product.imageUrl}`
  return (
    <div className='cart-item'>
      <img src={imageUrl}/>
      <div className='cart-info'>
        <div className='name'>{product.name}</div>
        <div className='price-at-this-time'>{props.priceAtThisTime} $</div>

        <div className='cart-action'>
          <div>{props.quantity}</div>
          <DeleteCartItem id={product.id} />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartItem
