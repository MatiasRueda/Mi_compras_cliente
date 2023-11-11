import { useParams } from "react-router-dom";
import SProductos from "./SProductos";

function SProductoEspecifico(): JSX.Element {
    const { caracteristica } = useParams()!;

    return (
        <SProductos caracteristica={caracteristica}/>
    )
}

export default SProductoEspecifico;