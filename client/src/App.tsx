import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './utils/store'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { PersistGate } from 'redux-persist/integration/react'
import MainPage from './pages/MainPage/MainPage'
import Catalog from './pages/Catalog/Catalog'
import Detail from './components/Detail/Detail'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/details/:id' element={<Detail />} />
                <Route path='/cart' element={<ShoppingCart />} />
              </Routes>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
