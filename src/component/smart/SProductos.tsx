import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Producto } from "../../auxiliar/type";
import { useInformacionContext } from "./SInformacion";
import SCarga from "./SCarga";
import DProducto from "../dumb/DProducto";
import DPagina from "../dumb/DPagina";
import DNumeroPagina from "../dumb/DNumeroPagina";
import { PATH_CLIENT } from "../../auxiliar/path";


function SProductos(props:{caracteristica?: string}): JSX.Element {
    const navigate = useNavigate();
    const [ offSet, setOffSet ] = useState<number>(0);
    const { productos } = useInformacionContext();
    const productosFiltrados: Producto[] = productos.filter((producto: Producto) =>
        !props.caracteristica || producto.category.toLowerCase() == props.caracteristica.toLowerCase() || 
            producto.brand.toLowerCase() == props.caracteristica.toLowerCase() || 
            producto.title.toLowerCase() == props.caracteristica.toLowerCase());

    const productosCreados: JSX.Element[] = productosFiltrados.map((producto: Producto) =>
        <DProducto  key={producto.title} 
                    infoProducto={producto} 
                    masDetalles={() => navigate("/" + PATH_CLIENT.PRODUCTO +"/"+ producto.id.toString())}/>);

    const cantidadDesplzamiento: number = productosCreados.length < 20? productosCreados.length : 20;
    const limite: number = productosCreados.length;
    const nroPagina: number = (offSet / (cantidadDesplzamiento === 0? 1 : cantidadDesplzamiento)) + 1;

    const opciones: ScrollToOptions = { 
        top: screen.height/2, 
        behavior: "smooth"
    }

    const manipularOffset = (tipo: string) => {
        window.scrollTo(opciones);
        setOffSet((prev) => tipo === "anterior"? prev - cantidadDesplzamiento : 
                                                 prev + cantidadDesplzamiento);
    }

    return (
        <Fragment >
            <SCarga mostrarCarga={false}>
                {!productosCreados.length ? 
                    <h2>No hay productos</h2> :
                    <Fragment>
                        <h2 className="cont-subtitulo">Productos: </h2>
                        <DPagina clase="cont-productos" 
                                 llave={!props.caracteristica? nroPagina : props.caracteristica} 
                                 lista={productosCreados.length >= limite? 
                                            productosCreados.slice(offSet, offSet + cantidadDesplzamiento) : 
                                            productosCreados}/>
                        <DNumeroPagina nroPagina={nroPagina}
                                       siguiente={(cantidadDesplzamiento * nroPagina) !== limite && 
                                                    <button onClick={() => {manipularOffset("siguiente")}}>
                                                        {">"}
                                                    </button>}
                                       anterior={offSet != 0 && 
                                                    <button onClick={() => {manipularOffset("anterior")}}>
                                                        {"<"}
                                                    </button>}/>
                    </Fragment>}
            </SCarga>
        </Fragment>
    )
}

export default SProductos;