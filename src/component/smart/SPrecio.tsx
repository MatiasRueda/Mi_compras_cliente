import { Fragment } from "react";
import { Producto } from "../../auxiliar/type";
import { useInformacionContext } from "./SInfoProvider";
import DPrecio from "../dumb/DPrecio";
import DPrecioDescontado from "../dumb/DPrecioDescontado";

function SPrecio(props:{ producto: Producto, click: (producto: Producto, precio: number, cantidad: number) => void, cantidad: number, id?: string}): JSX.Element {
    const { ofertas } = useInformacionContext();
    const indice: number = ofertas.findIndex((oferta) => oferta.id.toString() === props.id);
    const precioDescontado: number =  indice == -1 ? 0 :
        props.producto.price - Math.floor((props.producto.price * ofertas[indice].descuento) / 100);

    return (
        <Fragment>
            {props.producto.price && indice == -1 && 
                <DPrecio precio={props.producto.price} 
                         click={() => {
                            props.click(props.producto, props.producto.price, props.cantidad)}}/>}
            {props.producto.price && indice != -1 && 
                <DPrecioDescontado precio={props.producto.price} 
                                   click={() => {
                                        props.click(props.producto, precioDescontado, props.cantidad)}}
                                   precioDescontado={precioDescontado}/>}
        </Fragment>
    )
}

export default SPrecio;