import {NavLink} from "react-router-dom"


export default function NavBar() {

    return <ul style={{display: "flex"}}>
        <li>
            <NavLink
                to="/"
                className={({isActive}) => isActive && 'active'}
                state={"hello world"}
            >Main Page</NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({isActive}) => isActive && 'active'}
            >About Page</NavLink>
        </li>
        <li>
            <NavLink
                to="/third"
                className={({isActive}) => isActive && 'active'}
            >Third Page</NavLink>
        </li>
    </ul>
}