import { useState } from "react"
import Header from "../../Header"
import { useDispatch } from "react-redux"
import { useMutation } from '@tanstack/react-query'
import mutateOrder from "./mutateOrder"
import { useAppSelector } from "../../utils/hooks"
import { all } from './formOrderDataSlice'
import { useNavigate } from "react-router-dom"

const OrderForm = () => {
  const dispatch = useDispatch()
  const formOrderData = useAppSelector((state) => state.formOrderData)
  const {token} = useAppSelector((state) => state.userToken.value)
  const navigate = useNavigate()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [adress, setAdress] = useState('')
  const [detail, setDetail] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [country, setCountry] = useState('')

  const orderResponse = useMutation({
    mutationFn: () => {
      return mutateOrder(['form', formOrderData])
    },
    onSuccess: (data) => {
      navigate('/')
      console.log(data)
    }
  })
  return(
    <>
     <Header/>
      <div className="oderForm">
        <form 
          className='test-form'
          onSubmit={(e) => {
            e.preventDefault()
          const obj = {
            firstname: firstname,
            lastname: lastname,
            email:email,
            adress: adress,
            detail: detail,
            zipcode: zipcode,
            country: country,
            token: token
          }
          dispatch(all(obj))
          orderResponse.mutate()
          }}
      >
        <input
          id='firstname'
          name='fistname'
          placeholder="Fistname"
          onChange={(e) => {
           setFirstname(e.target.value) 
          }}
        />

        <input
          id='lastname'
          name='lastname'
          placeholder="Lastname"
          onChange={(e) => {
           setLastname(e.target.value) 
          }}
        />

        <input
          id='email'
          name='email'
          placeholder="Email"
          onChange={(e) => {
           setEmail(e.target.value) 
          }}
        />

        <input
          id='adress'
          name='adress'
          placeholder="Adress"
          onChange={(e) => {
           setAdress(e.target.value) 
          }}
        />

        <input
          id='detail'
          name='detail'
          placeholder="Detail"
          onChange={(e) => {
           setDetail(e.target.value) 
          }}
        />

        <input
          id='zipcode'
          name='zipcode'
          placeholder="ZIP Code"
          onChange={(e) => {
           setZipcode(e.target.value) 
          }}
        />

        <input
          id='country'
          name='country'
          placeholder="Country"
          onChange={(e) => {
           setCountry(e.target.value) 
          }}
        />
            
        <button
          className="active" 
        >
        </button>
      </form>
      </div>
    </>
  )
} 
export default OrderForm
