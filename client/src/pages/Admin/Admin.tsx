import { useQuery } from '@tanstack/react-query'
import fetchProducts from '../../components/ProductList/fetchProduct'
import Header from '../../Header'
import Loading from '../../components/Loading/Loading'
import AdminProduct from '../../components/AdminProduct/AdminProduct'

const Admin = () => {
  const { isLoading, data } = useQuery(['products'], fetchProducts)

  const products = data?.products ?? []

  if (isLoading || !data ){
    return <Loading/>
  }

  return (
    <div className='admin'>
      {products.map((value, index) => (
        <AdminProduct key={index} product={value}/>
      ))}
    </div>
  )
}

export default Admin
