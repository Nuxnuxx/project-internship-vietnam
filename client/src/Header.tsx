import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="user-section" >
              {token ? (
                <img src="../src/assets/img/user-icon.svg"/>
                <Link to="/login">Login</Link>
              ):(
                <img src="../src/assets/img/user-icon.svg"/>
              )}
            </div>
        </div >
    )
}

export default Header
