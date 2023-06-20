import { useEffect, useMemo, useRef, useState } from 'react'
import Header from '../../Header'
import { useDispatch } from 'react-redux'
import { useMutation, useQuery } from '@tanstack/react-query'
import mutateOrder from './mutateOrder'
import { useAppSelector } from '../../utils/hooks'
import { all } from './formOrderDataSlice'
import { useNavigate } from 'react-router-dom'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import fetchCart from '../../pages/ShoppingCart/fetchCart'
import Back from '../../components/Back/Back'

const Order = () => {
  const dispatch = useDispatch()
  const formOrderData = useAppSelector((state) => state.formOrderData)
  const { token } = useAppSelector((state) => state.userToken.value)
  const navigate = useNavigate()
  const result = useQuery(['cart', token as unknown as string], fetchCart)
  const cartItem = useMemo(
    () => result?.data?.result ?? [],
    [result?.data?.result],
  )

  const total = useRef('0.00')

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
    },
  })

  useEffect(() => {
    const newTotal = cartItem.reduce((accumulator, currentObj) => {
      return accumulator + currentObj.priceAtThisTime
    }, 0)
    total.current = newTotal.toFixed(2)
  }, [cartItem, total])

  return (
    <>
      <Header />
      <div className='order'>
        <Back/>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            id='firstname'
            name='fistname'
            placeholder='Fistname'
            onChange={(e) => {
              setFirstname(e.target.value)
            }}
          />

          <input
            id='lastname'
            name='lastname'
            placeholder='Lastname'
            onChange={(e) => {
              setLastname(e.target.value)
            }}
          />

          <input
            id='email'
            name='email'
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <input
            id='adress'
            name='adress'
            placeholder='Adress'
            onChange={(e) => {
              setAdress(e.target.value)
            }}
          />

          <input
            id='detail'
            name='detail'
            placeholder='Detail'
            onChange={(e) => {
              setDetail(e.target.value)
            }}
          />

          <input
            id='zipcode'
            name='zipcode'
            placeholder='ZIP Code'
            onChange={(e) => {
              setZipcode(e.target.value)
            }}
          />

          <input
            id='country'
            name='country'
            placeholder='Country'
            onChange={(e) => {
              setCountry(e.target.value)
            }}
          />

          <PayPalScriptProvider
            options={{ clientId: import.meta.env.VITE_CLIENT_ID }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: total.current,
                        currency_code: 'USD',
                      },
                    },
                  ],
                })
              }}
              onApprove={(data, actions) => {
                return new Promise((resolve, reject) => {
                  try {
                    const obj = {
                      firstname: firstname,
                      lastname: lastname,
                      email: email,
                      adress: adress,
                      detail: detail,
                      zipcode: zipcode,
                      country: country,
                      token: token,
                    }
                    dispatch(all(obj))
                    orderResponse.mutate()
                    console.log('order completed')
                    resolve()
                  } catch (error) {
                    reject(error)
                  }
                })
              }}
            />
          </PayPalScriptProvider>
        </form>
      </div>
    </>
  )
}
export default Order
