import Header from '../../Header'
import ProductList from '../../components/ProductList/ProductList'
import SearchBar from '../../components/SearchBar/SearchBar'

const Catalog = () => {
  return (
    <>
      <Header />
      <div className='catalog'>
        <SearchBar />
        <ProductList />
      </div>
    </>
  )
}

export default Catalog
