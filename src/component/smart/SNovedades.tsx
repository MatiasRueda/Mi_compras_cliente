import useObtenerInformacion from "../../hook/useObtenerInformacion";
import SCarga from "../smart/SCarga";
import DNovedad from "../dumb/DNovedad";
import { SERVER_PATH_NOVEDADES } from "../../auxiliar/path";
import { Novedad, RespuestaServer } from "../../auxiliar/type";
import { motion } from "framer-motion";
import { CambiarPantalla } from "../../auxiliar/animacion";

function SNovedades(): JSX.Element {
    const { data , isLoading , isValidating } = useObtenerInformacion<RespuestaServer<Novedad[]>>(SERVER_PATH_NOVEDADES, true);

    return (
        <SCarga mostrarCarga={ isLoading || isValidating }> 
           <motion.section className="cont-novedades" {...CambiarPantalla}>
                {data?.dato!.map((novedad) => <DNovedad key={novedad.id} {...novedad}/>)}
            </motion.section>
        </SCarga>
    )
}

export default SNovedades;