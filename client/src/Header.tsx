import { Link } from 'react-router-dom'
import { useAppSelector } from './utils/hooks'
import { useDispatch } from 'react-redux'
import { set } from './redux/userTokenSlice'

const Header = () => {
  const { token } = useAppSelector((state) => state.userToken.value)
  const dispatch = useDispatch()
  return (
    <div className='header'>
      <div className='user-section'>
        <Link to='/' className='user-section'>
          <img src='../src/assets/img/home-icon.svg' />
          Home
        </Link>
      </div>

      <div className='user-section'>
        <Link to='/catalog' className='user-section'>
          <img src='../src/assets/img/store.svg' />
          Catalog
        </Link>
      </div>

      {!token ? (
        <div className='user-section'>
          <Link to='/login' className='user-section'>
            <img src='../src/assets/img/user-icon.svg' />
            Login
          </Link>
        </div>
      ) : (
        <div className='user-section' onClick={() => dispatch(set(undefined))}>
            <img src='../src/assets/img/user-icon.svg' />
          Log Out
        </div>
      )}

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
