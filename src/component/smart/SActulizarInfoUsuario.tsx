import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useEnviarSolicitud , { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioActualizar from "./SFormularioActualizar";
import SOpciones from "./SOpciones";
import { useInformacionContext } from "./SInformacion";
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR } from "../../auxiliar/path";
import { RespuestaServer, Usuario } from "../../auxiliar/type";

enum SUB_SECCION {
    NOMBRE = "nombre",
    EMAIL = "email",
    CONTRASENIA = "contrasenia"
}


function SActulizarInfoUsuario(): JSX.Element {
    const navigate = useNavigate();
    const { usuario , agregarInfoUsuario } = useInformacionContext();
    const enviador = useEnviarSolicitud<Usuario, RespuestaServer<undefined>>(SERVER_PATH_ACTUALIZAR, METODO.PUT);
    const [ elegido , setElegido ] = useState<SUB_SECCION>(SUB_SECCION.NOMBRE);

    const obtenerInformacion = async (data: any) => {
        const {confirmarContrasenia, ...restoInfo} = data;
        const enviarData = {...restoInfo, id: usuario!.id};
        await enviador.trigger(enviarData);
        const {contrasenia, ...sinContrasenia} = restoInfo;
        agregarInfoUsuario({ ...usuario, ...sinContrasenia });
        toast.success(enviador.data!.mensaje);
        navigate(PATH_CLIENT.INICIO);
    }

    const aplicarAccion = (subSeccion: SUB_SECCION) => {
        setElegido(subSeccion);
    }

    return (
        <div className="cont-actualizar">
            <SOpciones clase="cont-acciones-actualizar" 
                        opcionClase="cont-boton-opcion" layoutClase="morado"
                        elegido={elegido}>
                <button key={SUB_SECCION.NOMBRE} 
                        children={SUB_SECCION.NOMBRE} 
                        onClick={() => {aplicarAccion(SUB_SECCION.NOMBRE)}}/>,
                <button key={SUB_SECCION.EMAIL} 
                        children={SUB_SECCION.EMAIL} 
                        onClick={() => {aplicarAccion(SUB_SECCION.EMAIL)}}/>,
                <button key={SUB_SECCION.CONTRASENIA} 
                        children={SUB_SECCION.CONTRASENIA} 
                        onClick={() => {aplicarAccion(SUB_SECCION.CONTRASENIA)}}/>
            </SOpciones>

            {SUB_SECCION.NOMBRE == elegido && 
                <SFormularioActualizar nombre={true} 
                                       enviarInformacion={obtenerInformacion}/>}
            {SUB_SECCION.EMAIL == elegido && 
                <SFormularioActualizar email={true} 
                                       enviarInformacion={obtenerInformacion}/>}
            {SUB_SECCION.CONTRASENIA == elegido && 
                <SFormularioActualizar contrasenia={true}
                                       enviarInformacion={obtenerInformacion}/>}
        </div>
 
    )
}

export default SActulizarInfoUsuario;