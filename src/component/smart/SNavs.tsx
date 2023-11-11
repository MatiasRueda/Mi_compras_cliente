import { Link, Location, To, useLocation } from "react-router-dom";
import { useInformacionContext } from "./SInformacion";
import DOpcion from "../dumb/DOpcion";


function SNavs(): JSX.Element {
    const path: Location = useLocation();
    const { usuario } = useInformacionContext();
    const sinUsuario: string[] = ["Ingresar", "Registrarse", "Suscripcion", "Novedades"]
    const conUsuario: string[] = ["Perfil", "Suscripcion", "Canjes", "Novedades"];
    const nombres: string[] =  !usuario? sinUsuario : conUsuario;
    const navActual: string = (path.pathname.split("/").pop() as string);

    return (
        <div className="cont-navs">
            {[...Array(nombres.length).keys()].map((indice: number) => 
                <DOpcion key={nombres[indice]}
                         divClase="cont-nav"
                         layoutClase="underline"
                         condicion={nombres[indice].toLowerCase() == navActual}>
                            <Link to={nombres[indice].toLowerCase() as To}>
                                {nombres[indice]}
                            </Link>
                </DOpcion>)}
        </div>
    )
}

export default SNavs;