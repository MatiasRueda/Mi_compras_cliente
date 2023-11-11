function DCompras(props: {cantidad: number , click: () => void}): JSX.Element {
    return (
        <div className="cont-boton-compras">
            <button className="boton-compras" onClick={props.click}>
                <h2>C {props.cantidad}</h2>
            </button>
        </div>
    )
}

export default DCompras;