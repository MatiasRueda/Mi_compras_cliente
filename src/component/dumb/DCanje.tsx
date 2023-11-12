import { CSSProperties } from "react";

function DCanje(props: { titulo: string , puntos: number , click: () => void , deshabilitar: boolean , botonEstilo: CSSProperties, contenedorEstilo: CSSProperties }): JSX.Element {
    return (
        <div className="cont-canje" style={props.contenedorEstilo}>
            <h5>{props.titulo}</h5>
            <p>Puntos: {props.puntos}</p>
            <button onClick={props.click} style={props.botonEstilo}
                {...{disabled: props.deshabilitar}}>
                    Canjear
            </button>
        </div>
    )
}

export default DCanje;