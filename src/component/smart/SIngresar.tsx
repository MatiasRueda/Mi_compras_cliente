import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEnviarSolicitud , METODO } from "../../hook/useEnviarSolicitud";
import FormularioLogin from "./SFormularioLogin";
import { useInformacionContext } from "./SInfoProvider";
import { PATH_CLIENT, SERVER_PATH_INGRESAR } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";


function SIngresar(): JSX.Element {
    const navigate = useNavigate();
    const { usuario , agregarInfoUsuario } = useInformacionContext();
    const login = async (data: any): Promise<void> => {
        const respuesta = await useEnviarSolicitud( data , SERVER_PATH_INGRESAR, METODO.POST);
        if (respuesta.exito) {
            toast.success(respuesta.mensaje);
            agregarInfoUsuario(respuesta.dato);
            navigate(PATH_CLIENT.INICIO);
            return;
        }
        toast.error(respuesta.mensaje);
    }
    return (
        <SVerificar necesario={!usuario} msjError={MENSAJE_ERROR.SI_INGRESADO}>
            <FormularioLogin enviarInformacion={login}/>
        </SVerificar>
    )
}

export default SIngresar;