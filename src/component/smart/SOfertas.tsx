import { useNavigate } from "react-router-dom";
import SCarga from "./SCarga";
import { useInformacionContext } from "./SInformacion";
import DOfertas from "../dumb/DOfertas";
import DOferta from "../dumb/DOferta";
import { PATH_CLIENT } from "../../auxiliar/path";

function SOfertas(): JSX.Element {
    const navigate = useNavigate();
    const { ofertas } = useInformacionContext();

    const irProducto = (id: number) => {
        navigate(PATH_CLIENT.PRODUCTO + "/" + id.toString());
    }

    return (
        <SCarga mostrarCarga={!ofertas}>
            <DOfertas ofertas={ofertas?.map((oferta) => <DOferta key={oferta.images[0]} 
                                                                 click={() => {irProducto(oferta.id)}} 
                                                                 oferta={oferta}/>)}/>
        </SCarga>
    )
}

export default SOfertas;