import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

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
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
