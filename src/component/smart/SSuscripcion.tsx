import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { METODO , useEnviarSolicitud } from '../../hook/useEnviarSolicitud';
import useFetch from '../../hook/useFetch';
import { Suscripcion, Usuario } from '../../../../auxiliar/type';
import { MENSAJE_ERROR } from '../../auxiliar/mensajes';
import { listaElementos } from '../../auxiliar/listaElementos';
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR, SERVER_PATH_SUSCRIPCIONES } from '../../auxiliar/path';
import { useInformacionContext } from './SInfoProvider';
import SCarga from './SCarga';
import DPagina from '../dumb/DPagina';
import DSuscripcion from '../dumb/DSuscripcion';


function Suscripciones(): JSX.Element {
    const navigate = useNavigate();
    const { usuario, agregarInfoUsuario } = useInformacionContext();
    const { data, isLoading, isValidating } = useFetch<Suscripcion[]>(SERVER_PATH_SUSCRIPCIONES, true);

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

    const suscripciones: JSX.Element[] = listaElementos(DSuscripcion, 
        data?.map((suscripcion: Suscripcion) => 
            { return {...suscripcion, 
                        beneficios: beneficiosElementos(suscripcion.beneficios), 
                        click: () => { actualizarSuscripcion(suscripcion) } ,
                        deshabilitar: (suscripcion.titulo === usuario?.suscripcionTitulo)
                    }}));

    return (
        <SCarga mostrarCarga={isLoading || isValidating}>
            <DPagina lista={suscripciones} clase='cont-suscripciones'/>
        </SCarga>
    )
}

export default Suscripciones;