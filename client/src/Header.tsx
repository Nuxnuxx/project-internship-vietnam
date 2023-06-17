import { Link } from 'react-router-dom'
import { useAppSelector } from './utils/hooks'
import { useDispatch } from 'react-redux'
import { set } from './redux/userTokenSlice'

const Header = () => {
  const {token} = useAppSelector((state) => state.userToken.value)
  const dispatch = useDispatch()
  return (
    <div className='header'>
      {!token ? (
        <div className='user-section'>
          <Link to='/login' className='user-section'>
            Login
            <img src='../src/assets/img/user-icon.svg' />
          </Link>
        </div>
      ) : (
        <div className='user-section'
          onClick={() => dispatch(set(undefined))}>
          Log Out
          <img src='../src/assets/img/user-icon.svg' />
        </div>
      )}

      <div className='user-section'>
        <Link to='/catalog' className='user-section'>
          <img src='../src/assets/img/home-icon.svg' />
          Catalog 
        </Link>
      </div>
      <div className='cart-section'>
        <Link to='/cart' className='cart-section'> 
          <img src='../src/assets/img/cart-icon.svg' />
          Cart 
        </Link>
      </div>
    </div>
  )
}

export default Header
