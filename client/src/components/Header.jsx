import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Home } from "../screens/Home"
import { About } from "../screens/About"
import { Rooms } from "../screens/Rooms"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"
import { Booking } from "../screens/Booking"

export const Header = () => {
    // const [user, setUser] = useState(null)
    const navigate = useNavigate() // needed for dynamic navbar
    const user = JSON.parse(localStorage.getItem('currentUser'))
    // useEffect(() => {
        // setUser(user)
    // })
    const logout = () => localStorage.removeItem('currentUser')

    return (
        <>
            <header>
                <h1>Abashon</h1>
                <menu>
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
                        <li><NavLink to='/rooms' className={({ isActive }) => (isActive ? "active" : "")}>Rooms</NavLink></li>
                        {!user ?
                            (
                                <>
                                    <li><NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink></li>
                                    <li><NavLink to='/register' className={({ isActive }) => (isActive ? "active" : "")}>Register</NavLink></li>
                                </>
                            ) : <li><NavLink to='/login' onClick={logout} >Logout</NavLink></li>
                        }
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/book/:roomid" element={<Booking />} />
            </Routes>
        </>
    )
}
