import Header from '../../Header'
import ChatBot from '../../components/ChatBot/ChatBot'
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
      <ChatBot/>
    </>
  )
}

export default Catalog
