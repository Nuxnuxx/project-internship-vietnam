import { useDispatch } from 'react-redux'
import { all } from './formLoginDataSlice'
import { useQuery } from '@tanstack/react-query'
import fetchLogin from './fetchLogin'
import { useAppSelector } from '../../utils/hooks'
import Header from '../../Header'
import { Link } from 'react-router-dom'

const Login = () => {
  const formLoginData = useAppSelector((state) => state.formLoginData)
  const dispatch = useDispatch()
  const results = useQuery(['form', formLoginData], fetchLogin)
  const token = results?.data?.token ?? ''

  return (
    < >
      <Header/>
      <div className='container-center-collumn'>
        <h1>Login</h1>
        <form className='user-form'
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const obj = {
              email: formData.get('email') ?? '',
              password: formData.get('password') ?? '',
            }
            dispatch(all(obj))
          }}
        >
          <label htmlFor='email'>
            <h3>email</h3> 
            <input id='email' name='email' placeholder='E-Mail' />
          </label>

          <label htmlFor='password'>
            <h3>Password</h3>
            <input id='password' name='password' placeholder='Password' type="password" />
          </label>

          <button>Login</button>

          <h2>{token}</h2>
        </form>
        <p>Not Registered ?</p>
        <Link to="/register">Click Here</Link>
      </div>
    </> 
  )}

export default Login
