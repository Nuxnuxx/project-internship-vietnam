import { QueryFunction } from "@tanstack/react-query"

type LoginFormParams = {
    value: {
        email: string
        password: string
    }
}

type APILoginResponse = {
    token: string
}

const fetchLogin: QueryFunction<APILoginResponse, ['form', LoginFormParams]> = async ({
    queryKey,
}) => {
    const { email, password } = queryKey[1].value

    if (!email || !password) {
        throw new Error(`error in form`)
    }

    const token = await fetch(`http://localhost:3001/user/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    if (!token.ok) throw new Error(`no token for: ${email}, ${password}`)

    return token.json()
}
export default fetchLogin
