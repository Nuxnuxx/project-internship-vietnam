import { QueryFunction } from "@tanstack/react-query";

type Form = {
    email: string;
    password: string;
}


const fetchLogin: QueryFunction<string, ["form", Form]> = async ({ queryKey }) => {
    const { email, password } = queryKey[1];

    if (!email || !password) {
        throw new Error(`error in form`);
    }
    const token = await fetch(
        ``
    )
    if (!token.ok)
        throw new Error(`no token for: ${email}, ${password}`)

    return token.json();
}
export default fetchLogin;