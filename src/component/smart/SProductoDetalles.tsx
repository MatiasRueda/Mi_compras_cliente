import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { Producto, ProductoCarrito } from "../../auxiliar/type";
import { MENSAJE_ERROR, MENSAJE_EXITO } from "../../auxiliar/mensajes";
import SCarga from "./SCarga";
import SPrecio from "./SPrecio";
import { useInformacionContext, } from "./SInfoProvider";
import DProductoDetalles from "../dumb/DProductoDetalles";
import { PATH_CLIENT, PRODUCTO_ESPECIFICO } from "../../auxiliar/path";

function SProductoDetalles(props: {id?: number}): JSX.Element {
    const [ cantidad, setCantidad ] = useState<number>(1);
    const { usuario, agregarProducto } = useInformacionContext();
    const navigate = useNavigate();
    const id = !props.id? useParams().id : props.id.toString();
    const url: string = PRODUCTO_ESPECIFICO + id;
    const { data , isLoading , isValidating } = useFetch<Producto>(url , true);

    const agregar = (producto: Producto, precio: number , cantidad: number): void => {
        navigate(PATH_CLIENT.INICIO);
        if (!usuario) {
            toast.error(MENSAJE_ERROR.NO_INGRESADO);
            return;   
        }
        const productoConPrecio: ProductoCarrito = {...producto, price: precio, cantidad};
        agregarProducto(productoConPrecio);
        toast.success(MENSAJE_EXITO.AGREGADO);
    } 

    const manipularCantidad = (tipo: string) => {
        const nuevaCantidad = tipo === "aumentar"? cantidad + 1 : cantidad - 1;
        setCantidad(nuevaCantidad); 
    }

    return (
        <SCarga mostrarCarga={ isLoading || isValidating }>
            <DProductoDetalles producto={data!}
                               cantidad={cantidad}
                               clickAumentar={() => {manipularCantidad("aumentar")}}
                               clickReducir={() => {manipularCantidad("reducir")}}
                               deshabilitar={cantidad === 1}
                               precio={<SPrecio producto={data!}
                                                click={agregar}
                                                cantidad={cantidad}
                                                id={id}/>}/>
        </SCarga>
    )
}

export default SProductoDetalles;