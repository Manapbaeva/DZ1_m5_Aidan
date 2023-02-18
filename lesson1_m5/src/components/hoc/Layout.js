import {Outlet} from "react-router-dom";
import NavBar from "../navBar/NavBar";


export default function Layout() {

    return (
        <>
            <NavBar/>
            <Outlet/>

            <h2>footer</h2>
        </>
    )
}