import useObtenerInformacion from "../../hook/useObtenerInformacion";
import SCarga from "../smart/SCarga";
import DNovedad from "../dumb/DNovedad";
import { SERVER_PATH_NOVEDADES } from "../../auxiliar/path";
import { Novedad, RespuestaServer } from "../../auxiliar/type";
import ASeccion from "../animation/ASeccion";

function SNovedades(): JSX.Element {
    const { data , isLoading , isValidating } = useObtenerInformacion<RespuestaServer<Novedad[]>>(SERVER_PATH_NOVEDADES, true);

    return (
        <SCarga mostrarCarga={ isLoading || isValidating }> 
            <ASeccion>
                <section className="cont-novedades">
                    {data?.dato!.map((novedad) => <DNovedad key={novedad.id} {...novedad}/>)}
                </section>
            </ASeccion>
        </SCarga>
    )
}

export default SNovedades;