import useFetch from "../../hook/useFetch";
import { listaElementos } from "../../auxiliar/listaElementos";
import SCarga from "../smart/SCarga";
import DNovedad from "../dumb/DNovedad";
import DPagina from "../dumb/DPagina";
import { SERVER_PATH_NOVEDADES } from "../../auxiliar/path";

function SNovedades(): JSX.Element {
    const { data , isLoading , isValidating } = useFetch(SERVER_PATH_NOVEDADES, true);

    return (
        <SCarga mostrarCarga={ isLoading || isValidating }> 
            <DPagina lista={listaElementos(DNovedad, data)} clase="cont-novedades"/>
        </SCarga>
    )
}

export default SNovedades;