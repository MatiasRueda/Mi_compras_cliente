import { CSSProperties, Fragment } from "react";
import DDescuento from "../dumb/DDescuento";

type Parametros = {
    canje: boolean,
    canjeAplicar: () => void,
    canjeDeshabilitar: boolean,
    suscripcion: boolean,
    suscripcionAplicar: () => void,
    suscripcionDeshabilitar: boolean,
}

function SDescuentos({...res}: Parametros): JSX.Element {
    const estiloBotonCanje: CSSProperties = res.canje? {color: "white", backgroundColor: "blue"} : 
                                                      {color: "black", backgroundColor: "white"}

    const estiloBotonSuscrip: CSSProperties = res.suscripcion? {color: "white", backgroundColor: "blue"} : 
                                                            {color: "black", backgroundColor: "white"}

    return (
        <Fragment>
            <DDescuento botonCanje={!res.canjeDeshabilitar &&
                            <button style={estiloBotonCanje} 
                                    aria-label="canje"
                                    onClick={res.canjeAplicar}>
                                        Canje
                            </button>}
                        botonSuscripcion={!res.suscripcionDeshabilitar && 
                            <button style={estiloBotonSuscrip}
                                    aria-label="suscripcion"
                                    onClick={res.suscripcionAplicar}>
                                        Suscripcion
                            </button>}/>
        </Fragment>
    )
}

export default SDescuentos;