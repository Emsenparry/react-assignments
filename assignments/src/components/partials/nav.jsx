import { NavLink } from "react-router-dom"

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/form">Formular</NavLink></li>
                <li><NavLink to="/goals">De 17 Verdensmål</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
