import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'
import AddCart from '../AddCart/AddCart'

const Detail = () => {
  const { id } = useParams()
  const product = useAppSelector((state) =>
    state.productData.value.find((product) => product.id === id),
  )
  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <AddCart productId={product.id}/>
        </>
      ) : null}
    </div>
  )
}

export default Detail
