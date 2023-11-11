import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useEnviarSolicitud , { METODO } from "../../hook/useEnviarSolicitud";
import FormularioRegister from "./SFormularioRegister";
import { PATH_CLIENT, SERVER_PATH_REGISTRARSE } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { useInformacionContext } from "./SInformacion";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";
import { RespuestaServer, Usuario } from "../../auxiliar/type";

function SRegister(): JSX.Element {
    const navigate = useNavigate();
    const enviador = useEnviarSolicitud<Usuario,RespuestaServer<undefined>>(SERVER_PATH_REGISTRARSE, METODO.POST);
    const { usuario } = useInformacionContext();

    const register = async (data: any): Promise<void> => {
        await enviador.trigger(data);
        navigate(PATH_CLIENT.INICIO);
        if (enviador.data!.exito) {
            toast.success(enviador.data!.mensaje);
            return;
        }
        toast.error(enviador.data!.mensaje);
    }

    return (
        <SVerificar necesario={!usuario} msjError={MENSAJE_ERROR.SI_INGRESADO}>
            <FormularioRegister enviarInformacion={register}/>
        </SVerificar>
    )
}

export default SRegister;