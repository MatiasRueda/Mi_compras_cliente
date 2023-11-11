type Parametros = {
    precio: number, 
    descuentos?: JSX.Element,
    comprar: () => void, 
    productos: JSX.Element[],
}

function DCarrito({...res}: Parametros): JSX.Element {
    return (
        <div className="cont-carrito">
            <div className="cont-productos-comprar">
                {res.productos}
            </div>
            {res.descuentos}
            <div className="cont-comprar">
                <h3>Total: ${res.precio}</h3>
                <button onClick={res.comprar} children="Comprar"/>
            </div>
        </div>
    )
}

export default DCarrito;