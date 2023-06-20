import AdminUpdateQuantity from "../AdminUpdateQuantity/AdminUpdateQuantity"

const AdminProduct = ({ product }: { product: Product }) => {
  const imageUrl = `../../src/assets/img/product3/${product.imageUrl}`

  return (
    <div className='admin-card'>
      <img src={imageUrl} className='admin-image-preview' alt='imageProduct' />
      <h4>{product.name}</h4>
      <span>{product.price}$</span>
      <span>{product.quantityInStock}</span>
      <AdminUpdateQuantity id={product.id}/>
    </div>
  )
}

export default AdminProduct
