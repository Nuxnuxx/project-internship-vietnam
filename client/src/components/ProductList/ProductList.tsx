import { useDispatch } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import fetchProducts from "./fetchProduct"
import { all } from "./productDataSlice"
import ProductCart from "../ProductCart/ProductCart"

const ProductList = () => {
  const dispatch = useDispatch()
  const results = useQuery(['products'], fetchProducts)
  const products = results?.data?.products ?? []

  if (results.isSuccess) {
    dispatch(all(products))
  }

  return (
    <div className="product-list">
      {products.map((product, index) => {
        return <ProductCart key={index} {...product}/>
      })}
  </div>
  )
}

export default ProductList
