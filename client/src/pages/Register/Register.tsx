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

const Register = () => {
  const formRegisterData = useAppSelector((state) => state.formRegisterData)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validRegister, setValidRegister] = useState([false, false, false])
  const results = useMutation({
    mutationFn: () => {
      return fetchRegister(['form', formRegisterData])
    },
    onSuccess: (data) => {
      dispatch(set(data))
    },
  })
  return (
    <>
      <Header />
      <div className='container-center-collumn'>
        <h1>Register</h1>

        <form
          className='user-form'
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
              onChange={(e) => {
                setEmail(e.target.value)
                if (isValidEmail(e.target.value)) {
                  setValidRegister([true, validRegister[1]])
                } else {
                  setValidRegister([false, validRegister[1]])
                }
              }}
            />
          </label>

          <label htmlFor='username'>
            <h3>Username</h3>
            <input
              id='username'
              name='username'
              placeholder='username'
              onChange={(e) => {
                setUsername(e.target.value)
                if (isValidUsername(e.target.value)) {
                  setValidRegister([true, validRegister[0]])
                } else {
                  setValidRegister([false, validRegister[0]])
                }
              }}
            />
          </label>

          <label htmlFor='password'>
            <h3>Password</h3>
            <input
              id='password'
              name='password'
              placeholder='password'
              type='password'
              onChange={(e) => {
                setPassword(e.target.value)
                if (isValidPassword(e.target.value)) {
                  setValidRegister([true, validRegister[2]])
                } else {
                  setValidRegister([false, validRegister[2]])
                }
              }}
            />
          </label>

          {validRegister[0] && validRegister[1] && validRegister[2] ? (
            <button>Register</button>
          ) : null}
        </form>
      </div>
    </>
  )
}

export default Register
