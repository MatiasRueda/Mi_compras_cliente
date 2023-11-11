import useFetch from "../../hook/useFetch";
import SCarga from "../smart/SCarga";
import DNovedad from "../dumb/DNovedad";
import DPagina from "../dumb/DPagina";
import { SERVER_PATH_NOVEDADES } from "../../auxiliar/path";
import { Novedad, RespuestaServer } from "../../auxiliar/type";

function SNovedades(): JSX.Element {
    const { data , isLoading , isValidating } = useFetch<RespuestaServer<Novedad[]>>(SERVER_PATH_NOVEDADES, true);

    return (
        <SCarga mostrarCarga={ isLoading || isValidating }> 
            <DPagina clase="cont-novedades" 
                     lista={data?.dato!.map((novedad) => 
                             <DNovedad key={novedad.id} {...novedad}/>)}/>
        </SCarga>
    )
}

export default SNovedades;