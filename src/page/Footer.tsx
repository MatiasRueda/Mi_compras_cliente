import "../asset/style/Footer.css";
import { Outlet } from "react-router-dom";
import DSugerencia from "../component/dumb/DSugerencia";
import DAyuda from "../component/dumb/DAyuda";
import DRedes from "../component/dumb/DRedes";


function Footer(): JSX.Element {
    return (    
        <footer>
            <Outlet/>
            <DSugerencia/>
            <DAyuda/>
            <DRedes/>
        </footer>
    )
}

export default Footer;