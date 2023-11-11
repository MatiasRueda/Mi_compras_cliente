import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useFetch from "../../hook/useFetch";
import { METODO, useEnviarSolicitud } from "../../hook/useEnviarSolicitud";
import { MENSAJE_ERROR, MENSAJE_EXITO } from "../../auxiliar/mensajes";
import { listaElementos } from "../../auxiliar/listaElementos";
import { useInformacionContext } from "./SInfoProvider";
import SCarga from "./SCarga";
import DLista from "../dumb/DLista";
import DCanje from "../dumb/DCanje";
import { SERVER_PATH_ACTUALIZAR, SERVER_PATH_CANJES } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { Canje } from "../../auxiliar/type";


interface CanjeElement extends Canje {
    click: () => void;
    deshabilitar: boolean;
    contenedorEstilo: CSSProperties;
    botonEstilo: CSSProperties;
}

function SCanjes(): JSX.Element {
    const navigate = useNavigate();
    const { data, isLoading, isValidating } = useFetch<Canje[]>(SERVER_PATH_CANJES, true);
    const { usuario, agregarInfoUsuario } = useInformacionContext();

    const canjear = async (canje: Canje) => {
        const data = {
            ...usuario!,
            puntos: usuario!.puntos - canje.puntos,
            canjeDescuento: canje.descuento,
            canjeTitulo: canje.titulo,
            canjeRestantes: canje.restantes,
        }
        await useEnviarSolicitud(data, SERVER_PATH_ACTUALIZAR, METODO.PUT);
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

    const controlarHabilitacion = (): Canje[] => { 
        if (!data) return [];     
        return data.map(crearCanje);
    }

    return (
        <SVerificar necesario={!!usuario} msjError={MENSAJE_ERROR.NO_INGRESADO}>
            <SCarga mostrarCarga={ isLoading || isValidating }>
                <DLista children={listaElementos(DCanje, controlarHabilitacion())} clase="cont-canjes"/>
            </SCarga>
        </SVerificar>  
    )
}

export default SCanjes;