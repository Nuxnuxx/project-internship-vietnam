import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'
import AddCart from '../AddCart/AddCart'
import Header from '../../Header'

const Detail = () => {
  const { id } = useParams()
  const product = useAppSelector((state) =>
    state.productData.value.find((product) => product.id === id),
  )
  return (
    <>
      <Header/>
      <div className='detail-layout'>
        <div className='detail-image'>
          <div className='img-test'></div>
        </div>
      {product ? (
        <div className='detail-info'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <AddCart productId={product.id}/>
        </div>
      ) : null}
      </div>
    </>
  )
}

export default Detail
