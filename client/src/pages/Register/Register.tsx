import { useMutation } from "@tanstack/react-query"
import fetchRegister from "./fetchRegister"
import { useAppSelector } from "../../utils/hooks"
import { useDispatch } from "react-redux"
import { all } from './formRegisterDataSlice'
import {get} from '../../redux/userTokenSlice'
import Header from "../../Header"

const Register = () => {
  const formRegisterData = useAppSelector((state) => state.formRegisterData)
  const dispatch = useDispatch()
  const results = useMutation({
    mutationFn: () => {
      return fetchRegister(['form',formRegisterData])
    }
  })
  const token = results?.data?.token ?? null
  return (
    <>
      <Header />
      <div className='container-center-collumn'>
        <h1>Register</h1>
        <form className="user-form"
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)

            const obj = {
              email: formData.get('email') ?? '',
              username: formData.get('username') ?? '',
              password: formData.get('password') ?? '',
            }

            dispatch(all(obj))
            results.mutate()
            dispatch(get(token));
          }}
        >
          <label htmlFor='email'>
            <h3>email</h3>
            <input id='email' name='email' placeholder='email' />
          </label>

          <label htmlFor='username'>
            <h3>Username</h3>
            <input id='username' name='username' placeholder='username' />
          </label>

          <label htmlFor='password'>
            <h3>Password</h3>
            <input id='password' name='password' placeholder='password' type="password"/>
          </label>

          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register
