import { NavLink, Outlet } from 'react-router-dom';
import "./Layout.css"

const Layout = () => {
    return (
        <div>
            <div className="nav-container">
                <NavLink
                    to="/"
                    className={({ isActive }) => 
                    isActive ? "active" : ""
                    }
                >
                    Home Page
                </NavLink>
                <NavLink
                    to="/about"
                >
                    About
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;