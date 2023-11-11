import { CSSProperties , useState } from "react";
import { useNavigate } from "react-router-dom";
import SActulizarInfoUsuario from "./SActulizarInfoUsuario";
import { useInformacionContext } from "./SInformacion";
import DInfoUsuario from "../dumb/DInfoUsuario";
import DLista from "../dumb/DLista";
import { PATH_CLIENT } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";

const elegido: CSSProperties = {
    borderColor: "white",
    color: "white",
    backgroundColor: "black"
}

function SPerfil(): JSX.Element {
    const [ info, setInfo ] = useState<boolean>(true);
    const [ actualizar, setActualizar ] = useState<boolean>(false);
    const { usuario, agregarInfoUsuario } = useInformacionContext();
    const navigate = useNavigate();

    const ingresarAInfo = (): void => {
        setInfo(true);
        setActualizar(false);
    }

    const ingresarAActualizar = (): void => {
        setActualizar(true);
        setInfo(false);
    }

    const cerrarSesion = (): void => {
        agregarInfoUsuario(undefined);
        navigate(PATH_CLIENT.INICIO);
    }

    const botones: JSX.Element[] = [<button key={"informacion"} style={info? elegido : undefined} children={"Informacion"} onClick={ingresarAInfo}/>,
                                    <button key={"actualizar"} style={actualizar? elegido : undefined} children={"Actualizar"} onClick={ingresarAActualizar}/>,
                                    <button key={"cerrarSesion"} children={"Cerrar Sesion"} onClick={cerrarSesion}/>]

    return (
        <SVerificar necesario={!!usuario} msjError={MENSAJE_ERROR.NO_INGRESADO}>
            <DLista clase="cont-acciones" children={botones}/>
            { info && <DInfoUsuario usuario={usuario}/> }
            { actualizar && <SActulizarInfoUsuario/>} 
        </SVerificar>
    )
}

export default SPerfil;