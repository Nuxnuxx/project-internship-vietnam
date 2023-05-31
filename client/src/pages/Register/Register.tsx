import { useQuery } from "@tanstack/react-query"
import fetchRegister from "./fetchRegister"
import { useAppSelector } from "../../utils/hooks"
import { useDispatch } from "react-redux"
import { all } from './formRegisterDataSlice'
import Header from "../../Header"

const Register = () => {
  const formRegisterData = useAppSelector((state) => state.formRegisterData)
  const dispatch = useDispatch()
  const results = useQuery(['form', formRegisterData], fetchRegister)
  const token = results?.data?.token ?? ''
  return (
    <>
      <Header />
      <div className='register-form'>
        <form className=""
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)

            const obj = {
              email: formData.get('email') ?? '',
              username: formData.get('username') ?? '',
              password: formData.get('password') ?? '',
            }

            dispatch(all(obj))
          }}
        >
          <label htmlFor='email'>
            email
            <input id='email' name='email' placeholder='E-Mail' />
          </label>

          <label htmlFor='username'>
            username
            <input id='username' name='username' placeholder='username' />
          </label>

          <label htmlFor='password'>
            password
            <input id='password' name='password' placeholder='password' />
          </label>

          <button>Submit</button>
          <h2>{token}</h2>
        </form>
      </div>
    </>
  )
}

export default Register
