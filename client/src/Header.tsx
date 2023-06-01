import { Link } from "react-router-dom"
import { useAppSelector } from "./utils/hooks"

const Header = () => {
  const userToken = useAppSelector((state) => state.userToken.value)
  return (
    <div className="header">
      {userToken ? (
        <div className="user-section" >
          <img src="../src/assets/img/user-icon.svg"/>
          <Link to="/login">Login</Link>
        </div>
      ):(
          <div className="user-section" >
            <img src="../src/assets/img/user-icon.svg"/>
          </div>
        )}
    </div >
  )
}

export default Header
