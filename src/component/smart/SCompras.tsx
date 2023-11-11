import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_CLIENT } from "../../auxiliar/path";
import { useInformacionContext } from "./SInformacion";
import DCompras from "../dumb/DCompras";

function SCompras(): JSX.Element {
    const { usuario , carritoProductos } = useInformacionContext();
    const navigate = useNavigate();

    return (
        <Fragment>
            {usuario && <DCompras cantidad={carritoProductos.size} 
                                  click={() => { navigate(PATH_CLIENT.CARRITO) }}/>}
        </Fragment>
    )
}

export default SCompras;