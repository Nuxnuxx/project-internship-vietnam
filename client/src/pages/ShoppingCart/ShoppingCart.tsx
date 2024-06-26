import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../../utils/hooks'
import fetchCart from './fetchCart'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../Header'
import ShoppingCartItem from '../../components/ShoppingCartItem/ShoppingCartItem'
import { useEffect } from 'react'
import ChatBot from '../../components/ChatBot/ChatBot'

const ShoppingCart = () => {
  const { token } = useAppSelector((state) => state.userToken.value)
  const navigate = useNavigate()

  const result = useQuery(['cart', token as unknown as string], fetchCart)
  const cartItem = result?.data?.result ?? []

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate])

  return (
    <>
      <Header />
      <div className='cart-wrapper'>
        <div className='cart'>
          {cartItem.map((product, index) => (
            <ShoppingCartItem key={index} {...product} />
          ))}
        </div>
        {cartItem.length == 0 ? (
          <Link className='button-order' to='/catalog'>
            {' '}
            Go buy something{' '}
          </Link>
        ) : (
          <Link className='button-order' to='/order'>
            {' '}
            Order{' '}
          </Link>
        )}
      </div>
      <ChatBot/>
    </>
  )
}

export default ShoppingCart
