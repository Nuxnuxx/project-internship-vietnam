import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import fetchProductById from '../ShoppingCartItem/fetchProductById'
const SemanticSearchCard = ({id}: {id: string}) => {
  const navigate = useNavigate()
  const { isLoading, data } = useQuery(['product', id], fetchProductById)
  if (isLoading || !data) {
    return (
      <>
        <div> X </div>
      </>
    )
  }

  const props = data?.product ?? []
  const imageUrl = `../../src/assets/img/product/${props.imageUrl}`

  return (
    <div
      onClick={() => navigate(`/details/${props.id}`)}
      className='semantic-card'
    >
      <img src={imageUrl} className='semantic-preview' alt='imageProduct' />
      <div className='semantic-info'>
        <h4>{props.name}</h4>
        <span>{props.price}$</span>
      </div>
    </div>
  )

}

export default SemanticSearchCard
