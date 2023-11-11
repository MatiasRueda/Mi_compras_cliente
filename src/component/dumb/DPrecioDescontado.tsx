function DPrecioDescontado(props: {precio: number, click: () => void, precioDescontado: number}): JSX.Element {
    return (
        <div className="cont-agregar-carrito">
            <div className="cont-precio">
                <h4>${props.precioDescontado}</h4>
                <h4 style={{textDecoration: "line-through", color: "grey"}}>
                    ${props.precio}
                </h4>
            </div>
            <button onClick={props.click}
                aria-label="boton-agregar-al-carrito">
                    Agregar al carrito
            </button>
        </div>
    )
}

export default DPrecioDescontado;