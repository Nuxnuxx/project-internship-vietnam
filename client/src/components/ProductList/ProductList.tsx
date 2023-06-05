import { useDispatch } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import fetchProducts from "./fetchProduct"
import { all } from "./productDataSlice"
import ProductCart from "../ProductCart/ProductCart"
import { useAppSelector } from "../../utils/hooks"

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useAppSelector(state => state.productData)
  const {isSuccess, data} = useQuery(['products'], fetchProducts)

  if (isSuccess) {
    dispatch(all(data?.products ?? []))
  }

  return (
    <div className="product-list">
      {products.value.map((product, index) => {
        return <ProductCart key={index} {...product}/>
      })}
  </div>
  )
}

export default ProductList
