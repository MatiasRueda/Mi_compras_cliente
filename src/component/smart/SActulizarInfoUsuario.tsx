import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { METODO, useEnviarSolicitud } from "../../hook/useEnviarSolicitud";
import SFormularioActualizar from "./SFormularioActualizar";
import SOpciones from "./SOpciones";
import { useInformacionContext } from "./SInformacion";
import DLista from "../dumb/DLista";
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR } from "../../auxiliar/path";

enum SUB_SECCION {
    NOMBRE = "nombre",
    EMAIL = "email",
    CONTRASENIA = "contrasenia"
}

function SActulizarInfoUsuario(): JSX.Element {
    const navigate = useNavigate();
    const { usuario , agregarInfoUsuario } = useInformacionContext();
    const [ elegido , setElegido ] = useState<SUB_SECCION>(SUB_SECCION.NOMBRE);

    const obtenerInformacion = async (data: any) => {
        const {confirmarContrasenia, ...restoInfo} = data;
        const enviarData = {...restoInfo, id: usuario!.id};
        const respuesta = await useEnviarSolicitud(enviarData, SERVER_PATH_ACTUALIZAR, METODO.PUT);
        const {contrasenia, ...sinContrasenia} = restoInfo;
        agregarInfoUsuario({ ...usuario, ...sinContrasenia });
        toast.success(respuesta.mensaje);
        navigate(PATH_CLIENT.INICIO);
    }

    const aplicarAccion = (subSeccion: SUB_SECCION) => {
        setElegido(subSeccion);
    }

    const botones: JSX.Element[] = [
        <button key={SUB_SECCION.NOMBRE} children={SUB_SECCION.NOMBRE} onClick={() => {aplicarAccion(SUB_SECCION.NOMBRE)}}/>,
        <button key={SUB_SECCION.EMAIL} children={SUB_SECCION.EMAIL} onClick={() => {aplicarAccion(SUB_SECCION.EMAIL)}}/>,
        <button key={SUB_SECCION.CONTRASENIA} children={SUB_SECCION.CONTRASENIA} onClick={() => {aplicarAccion(SUB_SECCION.CONTRASENIA)}}/>]

    return (
        <DLista clase="cont-actualizar">
            <SOpciones lista={botones} clase="cont-acciones-actualizar" 
                        opcionClase="cont-boton-opcion" layoutClase="morado"
                        elegido={elegido}/>
            {SUB_SECCION.NOMBRE == elegido && <SFormularioActualizar enviarInformacion={obtenerInformacion} nombre={true} />}
            {SUB_SECCION.EMAIL == elegido && <SFormularioActualizar enviarInformacion={obtenerInformacion} email={true} />}
            {SUB_SECCION.CONTRASENIA == elegido && <SFormularioActualizar enviarInformacion={obtenerInformacion} contrasenia={true}/>}
        </DLista>
 
    )
}

export default SActulizarInfoUsuario;