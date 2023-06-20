import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'
import AddCart from '../AddCart/AddCart'
import Header from '../../Header'
import { useQuery } from '@tanstack/react-query'
import fetchProductById from '../ShoppingCartItem/fetchProductById'
import Loading from '../Loading/Loading'
import ChatBot from '../ChatBot/ChatBot'

const Detail = () => {
  const { id } = useParams()
  const { isLoading, data } = useQuery(['product', id], fetchProductById)

  if (isLoading || !data) {
    return (
      <>
        <Header />
        <Loading/>
      </>
    )
  }

  const product = data?.product ?? []

  const imageUrl = `../../src/assets/img/product3/${product.imageUrl}`
  return (
    <>
      <Header />
      <div className='detail-layout'>
        <img src={imageUrl} alt='product image' />
        {product ? (
          <div className='detail-info'>
            <h2>{product.name}</h2>
            <p className='description'>{product.description}</p>
            <p className='price'> ${product.price}</p>
            <AddCart productId={product.id} />
          </div>
        ) : null}
      </div>
      <ChatBot/>
    </>
  )
}

export default Detail
