import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Home } from "../screens/Home"
import { About } from "../screens/About"
import { Rooms } from "../screens/Rooms"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"
import { Booking } from "../screens/Booking"
import { Gallery } from "../screens/Gallery"
import { Contact } from "../screens/Contact"
import { Admin } from "../screens/Admin"
import { Dashboard } from "../screens/Dashboard"

export const Header = () => {
    const navigate = useNavigate() // must needed for dynamic navbar
    const user = JSON.parse(localStorage.getItem('currentUser'))
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
                        <li><NavLink to='/gallery' className={({ isActive }) => (isActive ? "active" : "")}>Gallery</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
                        {!user ?
                            (
                                <>
                                    <li><NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink></li>
                                    <li><NavLink to='/register' className={({ isActive }) => (isActive ? "active" : "")}>Register</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                                    <li><NavLink to='/login' onClick={logout} >Logout</NavLink></li>
                                </>
                            )
                        }
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/book/:roomid" element={<Booking />} />
            </Routes>
        </>
    )
}
