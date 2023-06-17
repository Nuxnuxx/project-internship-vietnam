import { useNavigate } from 'react-router-dom'
const ProductCard = (props: Product) => {
  const navigate = useNavigate()
  const imageUrl = `../../src/assets/img/product3/${props.imageUrl}`

  return (
    <div
      onClick={() => navigate(`/details/${props.id}`)}
      className='product-card'
    >
      <img src={imageUrl} className='image-preview' alt='imageProduct' />
      <div className='card-info'>
        <h4>{props.name}</h4>
        <span>{props.price}$</span>
      </div>
    </div>
  )
}

export default ProductCard
