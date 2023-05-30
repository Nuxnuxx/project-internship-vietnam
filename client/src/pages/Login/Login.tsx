import { useDispatch } from 'react-redux'
import { all } from './formLoginDataSlice'
import { useQuery } from '@tanstack/react-query'
import fetchLogin from './fetchLogin'
import { useAppSelector } from '../../utils/hooks'

const Login = () => {
    const formLoginData = useAppSelector((state) => state.formLoginData)
    const dispatch = useDispatch()
    const results = useQuery(['form', formLoginData], fetchLogin)
    const token = results?.data?.token ?? ''

    return (
        <div className='login-form'>
            <form
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
                    email
                    <input id='email' name='email' placeholder='E-Mail' />
                </label>

                <label htmlFor='password'>
                    Password
                    <input id='password' name='password' placeholder='Password' />
                </label>

                <button>Submit</button>

                <h2>{token}</h2>
            </form>
        </div>
    )
}

export default Login
