import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useEnviarSolicitud , { METODO } from '../../hook/useEnviarSolicitud';
import useObtenerInformacion from '../../hook/useObtenerInformacion';
import { MENSAJE_ERROR } from '../../auxiliar/mensajes';
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR, SERVER_PATH_SUSCRIPCIONES } from '../../auxiliar/path';
import { useInformacionContext } from './SInformacion';
import SCarga from './SCarga';
import DSuscripcion from '../dumb/DSuscripcion';
import { RespuestaServer, Suscripcion, Usuario } from '../../auxiliar/type';
import ASeccion from '../animation/ASeccion';

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
    const enviador = useEnviarSolicitud<Usuario, RespuestaServer<Usuario>>(SERVER_PATH_ACTUALIZAR, METODO.PUT);
    const { usuario, agregarInfoUsuario } = useInformacionContext();
    const { data, isLoading, isValidating } = useObtenerInformacion<RespuestaServer<Suscripcion[]>>(SERVER_PATH_SUSCRIPCIONES, true);

    const beneficiosElementos = (beneficios: string[]): JSX.Element[] => {
        return beneficios.map((beneficio: string) =>  <li key={beneficio}> {beneficio} </li>)
    }

    const actualizarSuscripcion = async (suscripcion: Suscripcion): Promise<void> => {
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
        await enviador.trigger(data);
        agregarInfoUsuario({ ...usuario, ...data });
        toast.success(enviador.data!.mensaje);
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
            <ASeccion>
                <section className='cont-suscripciones'>
                    {data?.dato!.map(crearSuscripcionElement).map((suscripcion) => 
                            <DSuscripcion key={suscripcion.titulo} {...suscripcion}/>)}
                </section>
            </ASeccion>
        </SCarga>
    )
}

export default Suscripciones;