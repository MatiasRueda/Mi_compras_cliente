import { Producto } from "../../auxiliar/type";
import ASlideShow from "../animation/ASlideShow";

function DProductoDetalles(props: {producto: Producto, clickReducir: () => void, clickAumentar: () => void, cantidad: number, deshabilitar: boolean, precio?: JSX.Element}): JSX.Element {
    return (
        <div className="cont-producto-detalles">
            <ASlideShow imagenes={props.producto.images}/>
            <div className="cont-producto-informacion">
                <h1>{props.producto.title}</h1>
                <h5>Categoria: {props.producto.category}</h5>
                <h5>{props.producto.description}</h5>
                <div className="cont-cantidad">
                    <h5>Cantidad: </h5>
                    <div className="cont-controlador-cantidad">
                        <button {...{disabled: props.deshabilitar}} 
                            onClick={props.clickReducir}
                            aria-label="boton-disminuir">
                                {"-"}
                        </button>
                        <p>x{props.cantidad}</p>
                        <button onClick={props.clickAumentar}
                            aria-label="boton-aumentar">
                                {"+"}
                        </button>
                    </div>
                </div>
                {props.precio}
            </div>
        </div>
    )
}

export default DProductoDetalles;