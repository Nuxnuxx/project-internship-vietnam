import { useDispatch } from 'react-redux'
import { all } from './formLoginDataSlice'
import { useMutation } from '@tanstack/react-query'
import fetchLogin from './fetchLogin'
import { useAppSelector } from '../../utils/hooks'
import Header from '../../Header'
import { Link } from 'react-router-dom'
import { set } from '../../redux/userTokenSlice'
import { useRef, useState } from 'react'
import { isValidEmail, isValidPassword } from '../../utils/verif'

const Login = () => {
  const dispatch = useDispatch()
  const formLoginData = useAppSelector((state) => state.formLoginData)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [validLogin, setValidLogin] = useState([false, false])
  const [emailFocus, setemailFocus] = useState(false)
  const [passwordFocus, setpasswordFocus] = useState(false)

  const results = useMutation({
    mutationFn: () => {
      return fetchLogin(['form', formLoginData])
    },
    onSuccess: (data) => {
      dispatch(set(data))
    },
  })

  return (
    <>
      <Header />
      <div className='container login'>
        <h1>Login</h1>

        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault()

            const obj = {
              email: email,
              password: password,
            }
            dispatch(all(obj))
            results.mutate()
          }}
        >
          <input
            id='email'
            name='email'
            placeholder='E-Mail'
            className={!validLogin[0] && emailFocus ? 'input-error' : ''}
            onChange={(e) => {
              setEmail(e.target.value)
              if (isValidEmail(e.target.value)) {
                setValidLogin([true, validLogin[1]])
              } else {
                setValidLogin([false, validLogin[1]])
              }
            }}
            onBlur={() => setemailFocus(true)}
          />

          {!validLogin[0] && emailFocus ? (
            <p className='input-error-title'>
              {' '}
              Invalid Email, Please enter a valid email
            </p>
          ) : null}

          <input
            id='password'
            name='password'
            placeholder='Password'
            type='password'
            className={
              !validLogin[1] && passwordFocus ? 'input-error' : ''
            }
            onChange={(e) => {
              if (isValidPassword(e.target.value)) {
                setPassword(e.target.value)
                setValidLogin([validLogin[0], true])
              } else {
                setValidLogin([validLogin[0], false])
              }
            }}
            onBlur={() => setpasswordFocus(true)}
          />
          {!validLogin[1] && passwordFocus ? (
            <p className='input-error-title'>
              {' '}
              Invalid Password (8 character, 1 uppercase, 1 symbol)
            </p>
          ) : null}

          <button
            className={validLogin[0] && validLogin[1] ? 'active' : 'disable'}
          >
            {' '}
            Login{' '}
          </button>
        </form>
        <p>Not Registered ?</p>
        <Link to='/register'>Click Here</Link>
      </div>
    </>
  )
}

export default Login
