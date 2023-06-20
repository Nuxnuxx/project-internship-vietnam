import { useMutation } from '@tanstack/react-query'
import fetchRegister from './fetchRegister'
import { useAppSelector } from '../../utils/hooks'
import { useDispatch } from 'react-redux'
import { all } from './formRegisterDataSlice'
import { set } from '../../redux/userTokenSlice'
import Header from '../../Header'
import {
  isValidPassword,
  isValidUsername,
  isValidEmail,
} from '../../utils/verif'
import { useState } from 'react'
import { NavigationType, redirect, useNavigate } from 'react-router-dom'
import ChatBot from '../../components/ChatBot/ChatBot'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formRegisterData = useAppSelector((state) => state.formRegisterData)

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [validRegister, setValidRegister] = useState([false, false, false])
  const [emailFocus, setEmailFocus] = useState(false)
  const [usernameFocus, setUsernameFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [registerFailed, setregisterFailed] = useState(false)

  const results = useMutation({
    mutationFn: () => {
      return fetchRegister(['form', formRegisterData])
    },
    onSuccess: (data) => {
      dispatch(set(data.token))
      setregisterFailed(false)
      navigate('/')
    },
    onError: () => {
      setregisterFailed(true)
    },
  })

  return (
    <>
      <Header />
      <div className='container register'>
        <h1>Register</h1>

        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault()

            const obj = {
              email: email,
              username: username,
              password: password,
            }

            dispatch(all(obj))
            results.mutate()
          }}
        >
          <label htmlFor='email'>
            <h3>email</h3>
            <input
              id='email'
              name='email'
              placeholder='email'
              className={!validRegister[0] && emailFocus ? 'input-error' : ''}
              onChange={(e) => {
                setEmail(e.target.value)
                if (isValidEmail(e.target.value)) {
                  setValidRegister([true, validRegister[1], validRegister[2]])
                } else {
                  setValidRegister([false, validRegister[1], validRegister[2]])
                }
              }}
              onBlur={() => setEmailFocus(true)}
            />
          </label>
          {!validRegister[0] && emailFocus ? (
            <p className='input-error-title'>
              {' '}
              Invalid Email, Please enter a valid email
            </p>
          ) : null}

          <label htmlFor='username'>
            <h3>Username</h3>
            <input
              id='username'
              name='username'
              placeholder='username'
              className={
                !validRegister[1] && usernameFocus ? 'input-error' : ''
              }
              onChange={(e) => {
                setUsername(e.target.value)
                if (isValidUsername(e.target.value)) {
                  setValidRegister([validRegister[0], true, validRegister[2]])
                } else {
                  setValidRegister([validRegister[0], false, validRegister[2]])
                }
              }}
              onBlur={() => setUsernameFocus(true)}
            />
          </label>
          {!validRegister[1] && usernameFocus ? (
            <p className='input-error-title'>
              Invalid Password must be 3 character long
            </p>
          ) : null}

          <label htmlFor='password'>
            <h3>Password</h3>
            <input
              id='password'
              name='password'
              placeholder='password'
              type='password'
              className={
                !validRegister[2] && passwordFocus ? 'input-error' : ''
              }
              onChange={(e) => {
                setPassword(e.target.value)
                if (isValidPassword(e.target.value)) {
                  setValidRegister([validRegister[0], validRegister[1], true])
                } else {
                  setValidRegister([validRegister[0], validRegister[1], false])
                }
              }}
              onBlur={() => setPasswordFocus(true)}
            />
          </label>
          {!validRegister[2] && passwordFocus ? (
            <p className='input-error-title'>
              {' '}
              Invalid Password (8 character, 1 uppercase, 1 symbol)
            </p>
          ) : null}

          <button
            className={
              validRegister[0] && validRegister[1] && validRegister[2]
                ? 'active'
                : 'disable'
            }
          >
            Register
          </button>
          {registerFailed ? <div> Register Failed </div> : null}
        </form>
      </div>
      <ChatBot/>
    </>
  )
}

export default Register
