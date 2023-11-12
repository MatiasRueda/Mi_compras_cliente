import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useObtenerInformacion from "../../hook/useObtenerInformacion";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import { MENSAJE_ERROR, MENSAJE_EXITO } from "../../auxiliar/mensajes";
import { useInformacionContext } from "./SInformacion";
import SCarga from "./SCarga";
import DCanje from "../dumb/DCanje";
import { SERVER_PATH_ACTUALIZAR, SERVER_PATH_CANJES } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { Canje, RespuestaServer, Usuario } from "../../auxiliar/type";
import AFade from "../animation/AFade";


interface CanjeElement extends Canje {
    click: () => void;
    deshabilitar: boolean;
    contenedorEstilo: CSSProperties;
    botonEstilo: CSSProperties;
}

function SCanjes(): JSX.Element {
    const navigate = useNavigate();
    const enviador = useEnviarSolicitud<Usuario, RespuestaServer<undefined>>(SERVER_PATH_ACTUALIZAR, METODO.PUT);
    const { data, isLoading, isValidating } = useObtenerInformacion<RespuestaServer<Canje[]>>(SERVER_PATH_CANJES, true);
    const { usuario, agregarInfoUsuario } = useInformacionContext();

    const canjear = async (canje: Canje) => {
        const data = {
            ...usuario!,
            puntos: usuario!.puntos - canje.puntos,
            canjeDescuento: canje.descuento,
            canjeTitulo: canje.titulo,
            canjeRestantes: canje.restantes,
        }
        await enviador.trigger(data);
        toast.success(MENSAJE_EXITO.CANJE);
        agregarInfoUsuario({...usuario, ...data});
        navigate("/");
    }
 
    const crearCanje = (canje: Canje): CanjeElement => {
        const canjeElement: CanjeElement = {
            ... canje, 
            click :() => {canjear(canje)},
            deshabilitar :usuario!.puntos < canje.puntos,
            contenedorEstilo :{borderColor: "red"},
            botonEstilo :{cursor: "default"},
        };
        if (usuario!.puntos < canje.puntos) 
            return canjeElement;
        canjeElement.deshabilitar = usuario!.puntos < canje.puntos || 
                                         usuario!.canjeTitulo === canje.titulo;
        canjeElement.contenedorEstilo = {
            borderColor: canjeElement.deshabilitar? "red" : "green"};
        canjeElement.botonEstilo = {
            cursor: canjeElement.deshabilitar? "default" : "pointer"};
        return canjeElement;
    }

    return (
        <SVerificar necesario={!!usuario} msjError={MENSAJE_ERROR.NO_INGRESADO}>
            <SCarga mostrarCarga={ isLoading || isValidating }>
                <AFade>
                    <div className= "cont-canjes">
                        {data?.dato!.map(crearCanje).map((canje) => 
                            <DCanje key={canje.titulo} {...canje}/>)}
                    </div>
                </AFade>
            </SCarga>
        </SVerificar>  
    )
}

export default SCanjes;