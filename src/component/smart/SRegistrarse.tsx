import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { METODO, useEnviarSolicitud } from "../../hook/useEnviarSolicitud";
import FormularioRegister from "./SFormularioRegister";
import { PATH_CLIENT, SERVER_PATH_REGISTRARSE } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { useInformacionContext } from "./SInformacion";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";

function SRegister(): JSX.Element {
    const navigate = useNavigate();
    const { usuario } = useInformacionContext();
    const register = async (data: any): Promise<void> => {
        const respuesta = await useEnviarSolicitud(data, SERVER_PATH_REGISTRARSE, METODO.POST);
        navigate(PATH_CLIENT.INICIO);
        if (respuesta.exito) {
            toast.success(respuesta.mensaje);
            return;
        }
        toast.error(respuesta.mensaje);
    }

    return (
        <SVerificar necesario={!usuario} msjError={MENSAJE_ERROR.SI_INGRESADO}>
            <FormularioRegister enviarInformacion={register}/>
        </SVerificar>
    )
}

export default SRegister;