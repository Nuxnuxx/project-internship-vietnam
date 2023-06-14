import { MutationFunction } from "@tanstack/react-query";

type OrderFormParams = {
  value: {
    firstname: string
    lastname: string
    email: string
    adress: string
    detail: string 
    zipcode: string
    country: string
    token: string
  }
}

type APIOrderResponse = {
  orderResponse: string
}

const mutateOrder: MutationFunction<
  APIOrderResponse,
  ['form', OrderFormParams]
> = async (mutationKey) => {
  const { firstname, lastname, email, adress, detail, zipcode, country} = mutationKey[1].value
  const token = mutationKey[1].value.token

  const orderResponse = await fetch('http://localhost:3001/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      adress,
      detail,
      zipcode,
      country,
    })
  })
  if (!orderResponse.ok) throw new Error('Error')
  return orderResponse.json()
}
export default mutateOrder
