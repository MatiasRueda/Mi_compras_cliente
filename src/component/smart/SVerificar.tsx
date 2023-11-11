import { Fragment , ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";
import { PATH_CLIENT } from "../../auxiliar/path";

function SVerificar(props: { necesario: boolean , msjError: MENSAJE_ERROR, children: ReactNode }): JSX.Element {
    const navigate = useNavigate();

    useEffect((): void => {
        if (props.necesario) return;
        navigate(PATH_CLIENT.INICIO);
        toast.error(props.msjError);
    }, [])
    
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default SVerificar;