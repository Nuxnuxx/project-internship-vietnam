import ProductCard from '../ProductCard/ProductCard'
import { useAppSelector } from '../../utils/hooks'

const ProductList = () => {
  const products = useAppSelector((state) => state.productData)

  return (
    <div className='product-list'>
      {products.value.map((product, index) => {
        return <ProductCard key={index} {...product} />
      })}
    </div>
  )
}

export default ProductList
