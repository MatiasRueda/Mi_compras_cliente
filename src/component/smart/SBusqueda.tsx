import { useNavigate } from "react-router-dom";
import FormularioBusqueda from "./SFormularioBusqueda";
import { PATH_CLIENT } from "../../auxiliar/path";

function SBusqueda(): JSX.Element {
    const navigate = useNavigate();

    const busqueda = async (data: any): Promise<void> => {
        navigate(PATH_CLIENT.BUSQUEDA + "/" + data.busqueda);
    }

    return (
        <FormularioBusqueda enviarInformacion={busqueda}/>
    )
}

export default SBusqueda;