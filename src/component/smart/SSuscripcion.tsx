import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { METODO , useEnviarSolicitud } from '../../hook/useEnviarSolicitud';
import useFetch from '../../hook/useFetch';
import { MENSAJE_ERROR } from '../../auxiliar/mensajes';
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR, SERVER_PATH_SUSCRIPCIONES } from '../../auxiliar/path';
import { useInformacionContext } from './SInformacion';
import SCarga from './SCarga';
import DPagina from '../dumb/DPagina';
import DSuscripcion from '../dumb/DSuscripcion';
import { RespuestaServer, Suscripcion, Usuario } from '../../auxiliar/type';

type SuscripcionElement = {
    titulo: string;
    tipo: string;
    precio: number;
    descuento: number;
    restantes: number;
    beneficios: JSX.Element[];
    click: () => void;
    deshabilitar: boolean;
}

function Suscripciones(): JSX.Element {
    const navigate = useNavigate();
    const { usuario, agregarInfoUsuario } = useInformacionContext();
    const { data, isLoading, isValidating } = useFetch<RespuestaServer<Suscripcion[]>>(SERVER_PATH_SUSCRIPCIONES, true);

    const beneficiosElementos = (beneficios: string[]): JSX.Element[] => {
        return beneficios.map((beneficio: string) =>  <li key={beneficio}> {beneficio} </li>)
    }

    const actualizarSuscripcion = async (suscripcion: Suscripcion): Promise<void> => {
        const urlActualizar: string = SERVER_PATH_ACTUALIZAR;
        if (!usuario) {
            toast.error(MENSAJE_ERROR.NO_INGRESADO);
            navigate("/" + PATH_CLIENT.INGRESAR);
            return;
        }
        const data: Usuario = {
            ...usuario,
            suscripcionDescuento: suscripcion.descuento,
            suscripcionTitulo: suscripcion.titulo,
            suscripcionRestantes: suscripcion.restantes,
        };
        const respuesta = await useEnviarSolicitud(data, urlActualizar, METODO.PUT);
        agregarInfoUsuario({ ...usuario, ...data });
        toast.success(respuesta.mensaje);
        navigate(PATH_CLIENT.INICIO);
    }

    const crearSuscripcionElement = (suscripcion: Suscripcion): SuscripcionElement => {
        return {
            ...suscripcion,
            beneficios: beneficiosElementos(suscripcion.beneficios), 
            click: () => { actualizarSuscripcion(suscripcion) } ,
            deshabilitar: (suscripcion.titulo === usuario?.suscripcionTitulo)
        }
    }

    return (
        <SCarga mostrarCarga={isLoading || isValidating}>
            <DPagina clase='cont-suscripciones' 
                lista={data?.dato!.map(crearSuscripcionElement).map((suscripcion) => 
                    <DSuscripcion key={suscripcion.titulo} {...suscripcion}/>)}/>
        </SCarga>
    )
}

export default Suscripciones;