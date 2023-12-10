import { NavLink } from 'react-router-dom'
export const Header = () => {
    return (
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
    )
}
