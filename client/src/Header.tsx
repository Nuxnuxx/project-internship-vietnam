import { Link } from 'react-router-dom'
import { useAppSelector } from './utils/hooks'
import { useDispatch } from 'react-redux'
import { set } from './redux/userTokenSlice'

const Header = () => {
  const userToken = useAppSelector((state) => state.userToken.value)
  const dispatch = useDispatch()
  return (
    <div className='header'>
      {!userToken ? (
        <div className='user-section'>
          <img src='../src/assets/img/user-icon.svg' />
          <Link to='/login'>Login</Link>
        </div>
      ) : (
        <div className='user-section'>
          <img src='../src/assets/img/user-icon.svg' />
          <a onClick={() => dispatch(set(undefined))}>Log Out</a>
        </div>
      )}
        <div className='cart-section'>
          <img src='../src/assets/img/cart-icon.svg' />
        <Link to='/cart'> Cart </Link>
        </div>
    </div>
  )
}

export default Header
