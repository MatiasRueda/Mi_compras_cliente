import { Producto } from "../../auxiliar/type";

function DProductoCompra(props: {id: number, producto: Producto, precio: number, cantidad: number, click: (id: number) => void}): JSX.Element {
    return (
        <div className="cont-producto-comprar">
            <div className="cont-producto-comprar-img">
                <img src={props.producto.images[0]}/>
            </div>
            <h3>{props.producto.title}</h3>
            <h2 className="producto-cantidad">x{props.cantidad}</h2>
            <h2 className="producto-precio">${props.precio}</h2>
            <button onClick={() => {props.click(props.id)}}>X</button>
        </div>
    )
}

export default DProductoCompra;