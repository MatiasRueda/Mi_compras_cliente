import { CSSProperties } from "react";
import AFade from "../animation/AFade";

function DCanje(props: { titulo: string , puntos: number , click: () => void , deshabilitar: boolean , botonEstilo: CSSProperties, contenedorEstilo: CSSProperties }): JSX.Element {
    return (
        <AFade clase="cont-canje" estilo={props.contenedorEstilo}>
            <h5>{props.titulo}</h5>
            <p>Puntos: {props.puntos}</p>
            <button onClick={props.click} style={props.botonEstilo}
                {...{disabled: props.deshabilitar}}>
                    Canjear
            </button>
        </AFade>
    )
}

export default DCanje;