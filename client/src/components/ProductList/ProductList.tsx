import ProductCard from '../ProductCard/ProductCard'
import { useAppSelector } from '../../utils/hooks'
import Loading from '../Loading/Loading'

const ProductList = () => {
  const products = useAppSelector((state) => state.productData)
  if (!products) {
    return <Loading/>
  }

  return (
    <div className='product-list'>
      {products.value.map((product, index) => (
         <ProductCard key={index} {...product} />
      ))}
    </div>
 )
}

export default ProductList
