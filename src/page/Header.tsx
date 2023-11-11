import { Link, Outlet } from "react-router-dom";
import SNavs from "../component/smart/SNavs";
import SBusqueda from "../component/smart/SBusqueda";
import SCompras from "../component/smart/SCompras";

function Header(): JSX.Element {
    return (
        <header>
            <Link className="cont-titulo" to={"/"}>Mi Tienda</Link> 
            <SBusqueda/>
            <SCompras/>
            <SNavs/>
            <Outlet/>
        </header>
    )
}

export default Header;