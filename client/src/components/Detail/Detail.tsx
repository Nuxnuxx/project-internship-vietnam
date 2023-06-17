import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'
import AddCart from '../AddCart/AddCart'
import Header from '../../Header'

const Detail = () => {
  const { id } = useParams()
  const product = useAppSelector((state) =>
    state.productData.value.find((product) => product.id === id),
  )

  const imageUrl = `../../src/assets/img/product/${product?.imageUrl}`
  return (
    <>
      <Header />
      <div className='detail-layout'>
        <img src={imageUrl} alt='product image' />
        {product ? (
          <div className='detail-info'>
            <h2>{product.name}</h2>
            <p className='description'>{product.description}</p>
            <p className='price'>Price: ${product.price}</p>
            <AddCart productId={product.id} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Detail
