import { QueryFunction } from '@tanstack/react-query'

interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    createdAt: string;
}

interface APIResponse {
    user: User;
}

const fetchUser: QueryFunction<APIResponse, ['userData', string]> = async ({
  queryKey,
}) => {
  const token = queryKey[1]

  const user = await fetch('http://localhost:3001/user/get', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!user.ok) throw new Error('Impossible to fetch the cart for the user')

  return user.json()
}

export default fetchUser
