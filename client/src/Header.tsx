import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="user-section">
                <img src="../src/assets/img/user-icon.svg"/>
                <Link to="/register">Register</Link >
                <Link to="/login">Login</Link>
            </div>
        </div >
    )
}

export default Header
