import { NavLink, Route, Routes } from "react-router-dom"
import { Home } from "../screens/Home"
import { About } from "../screens/About"
import { Rooms } from "../screens/Rooms"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"

export const Header = () => {
    return (
        <>
            <header>
                <h1>Abashon</h1>
                <menu>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/rooms'>Rooms</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}
