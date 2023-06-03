const ProductCart = (props: Product) => {
  return (
    <div className='product-card'>
      <img src={props.imageUrl} alt='imageProduct' />
      <h4>{props.name}</h4>
      <div>
        <span>{props.price}$</span>
      </div>
    </div>
  )
}

export default ProductCart
