import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useEnviarSolicitud , { METODO } from "../../hook/useEnviarSolicitud";
import FormularioLogin from "./SFormularioLogin";
import { useInformacionContext } from "./SInformacion";
import { PATH_CLIENT, SERVER_PATH_INGRESAR } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";
import { RespuestaServer, Usuario } from "../../auxiliar/type";


function SIngresar(): JSX.Element {
    const navigate = useNavigate();
    const { usuario , agregarInfoUsuario } = useInformacionContext();
    const enviador = useEnviarSolicitud<Usuario, RespuestaServer<Usuario>>(SERVER_PATH_INGRESAR, METODO.POST);

    const login = async (data: any): Promise<void> => {
        await enviador.trigger(data);
        if (enviador.data!.exito) {
            toast.success(enviador.data!.mensaje);
            agregarInfoUsuario(enviador.data!.dato);
            navigate(PATH_CLIENT.INICIO);
            return;
        }
        toast.error(enviador.data!.mensaje);
    }
    return (
        <SVerificar necesario={!usuario} msjError={MENSAJE_ERROR.SI_INGRESADO}>
            <FormularioLogin enviarInformacion={login}/>
        </SVerificar>
    )
}

export default SIngresar;