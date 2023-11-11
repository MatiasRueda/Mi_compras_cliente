function DPrecio(props:{precio: number, click: () => void}): JSX.Element {
    return (
        <div className="cont-agregar-carrito">
            <div className="cont-precio">
                <h4>${props.precio}</h4> 
            </div>
            <button onClick={props.click}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default DPrecio;