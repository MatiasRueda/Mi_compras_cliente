import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { METODO, useEnviarSolicitud } from "../../hook/useEnviarSolicitud";
import SFormularioActualizar from "./SFormularioActualizar";
import SOpciones from "./SOpciones";
import { useInformacionContext } from "./SInfoProvider";
import DLista from "../dumb/DLista";
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR } from "../../auxiliar/path";

function SActulizarInfoUsuario(): JSX.Element {
    const navigate = useNavigate();
    const { usuario , agregarInfoUsuario } = useInformacionContext();
    const [ elegido , setElegido ] = useState<string>("nombre");

    const obtenerInformacion = async (data: any) => {
        const {confirmarContrasenia, ...restoInfo} = data;
        const enviarData = {...restoInfo, id: usuario!.id};
        const respuesta = await useEnviarSolicitud(enviarData, SERVER_PATH_ACTUALIZAR, METODO.PUT);
        const {contrasenia, ...sinContrasenia} = restoInfo;
        agregarInfoUsuario({ ...usuario, ...sinContrasenia });
        toast.success(respuesta.mensaje);
        navigate(PATH_CLIENT.INICIO);
    }

    const aplicarAccion = (nombre: string) => {
        setElegido(nombre);
    }

    const botones: JSX.Element[] = [<button key={"nombre"} children={"nombre"} onClick={() => {aplicarAccion("nombre")}}/>,
                                    <button key={"email"} children={"email"} onClick={() => {aplicarAccion("email")}}/>,
                                    <button key={"contrasenia"} children={"contrasenia"} onClick={() => {aplicarAccion("contrasenia")}}/>]

    return (
        <DLista clase="cont-actualizar">
            <SOpciones lista={botones} clase="cont-acciones-actualizar" 
                        opcionClase="cont-boton-opcion" layoutClase="morado"
                        elegido={elegido}/>
            {"nombre" == elegido && <SFormularioActualizar enviarInformacion={obtenerInformacion} nombre={true} />}
            {"email" == elegido && <SFormularioActualizar enviarInformacion={obtenerInformacion} email={true} />}
            {"contrasenia" == elegido && <SFormularioActualizar enviarInformacion={obtenerInformacion} contrasenia={true}/>}
        </DLista>
 
    )
}

export default SActulizarInfoUsuario;