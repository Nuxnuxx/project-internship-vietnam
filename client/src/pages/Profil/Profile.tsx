import { useQuery } from "@tanstack/react-query"
import { useAppSelector } from "../../utils/hooks"
import fetchUser from "./fetchProfile"
import Loading from "../../components/Loading/Loading"
import Header from "../../Header"

const Profile = () => {

  const { token } = useAppSelector((state) => state.userToken.value)
  const { isLoading, data } = useQuery(['userData', token as unknown as string], fetchUser)

  const user = data?.user ?? []

  if (isLoading || !data) {
    return <Loading/>
  }


  return (
    <>
      <Header/>
    <div className="profil">
      <div> <span>Email</span> : {user.email}</div>
      <div> <span>Username</span> : {user.username}</div>
      <input placeholder="new password"/>
      <button> Replace password </button>
    </div>
    </>
  )
}

export default Profile
