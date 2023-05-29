import { useDispatch } from "react-redux"
import { all } from "./formDataSlice"
import { useQuery } from "@tanstack/react-query";
import fetchLogin from "./fetchLogin";
import { useAppSelector } from "./hooks";

const Login = () => {
    const formData = useAppSelector((state) => state.formData);
    const dispatch = useDispatch();
    const results = useQuery(["form", formData], fetchLogin)

    return (
        <div className="login-form">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const obj = {
                        email: formData.get("email")?.toString ?? "",
                        password: formData.get("password")?.toString ?? ""
                    };
                    dispatch(all(obj))
                }}
            >
                <label htmlFor="email">
                    Location
                    <input id="email" name="email" placeholder="E-Mail" />
                </label>
                <label htmlFor="password">
                    Password
                    <input id="password" name="password" placeholder="Password" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}