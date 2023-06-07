import { useNavigate } from 'react-router-dom'
const ProductCard = (props: Product) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/details/${props.id}`)}
      className='product-card'
    >
      <img src={props.imageUrl} alt='imageProduct' />
      <h4>{props.name}</h4>
      <div>
        <span>{props.price}$</span>
      </div>
    </div>
  )
}

export default ProductCard
