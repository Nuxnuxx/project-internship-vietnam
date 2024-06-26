import { MutationFunction } from '@tanstack/react-query'

type RegisterFormParams = {
  value: {
    email: string
    username: string
    password: string
  }
}

type APIRegisterResponse = {
  token: string
}

const fetchRegister: MutationFunction<
  APIRegisterResponse,
  ['form', RegisterFormParams]
> = async (mutationKey) => {
  const { email, username, password } = mutationKey[1].value

  if (!email || !username || !password) {
    throw new Error('error in form')
  }

  const token = await fetch('http://localhost:3001/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  })
  if (!token.ok)
    throw new Error(`no token for: ${email}, ${username}, ${password}`)

  return token.json()
}
export default fetchRegister
