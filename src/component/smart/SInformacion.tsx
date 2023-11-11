import { ReactNode, createContext, useContext, useState } from "react";
import useFetch from "../../hook/useFetch";
import { Data, Informacion, Oferta, ProductoCarrito, Usuario } from "../../auxiliar/type";
import encontrarOfertas from "../../auxiliar/encontrarOfertas";
import { TODOS_PRODUCTOS } from "../../auxiliar/path";

const informacionContext = createContext<Informacion | undefined>(undefined);

export function useInformacionContext(): Informacion {
    return useContext(informacionContext)!;
}

function SInformacion(props: { children: ReactNode }): JSX.Element { 
    const [ usuario, setUsuario ] = useState<Usuario | undefined>(undefined);
    const [ carritoProductos, setCarritoProductos ] = useState<Map<number, ProductoCarrito>>(new Map()); 
    const { data } = useFetch<Data>( TODOS_PRODUCTOS , true, {suspense : true});
    const [ ofertas , setOfertas ] = useState<Oferta[]>(encontrarOfertas(data!.products));

    const agregarProducto = (producto: ProductoCarrito): void => {
        if (!carritoProductos.has(producto.id)) {
            setCarritoProductos(carrito => new Map(carrito.set(producto.id, producto)));
            return;
        }
        setCarritoProductos(carrito => {
            let productoCarrito: ProductoCarrito = carrito.get(producto.id)!;
            const nuevoMapa = new Map(carrito);
            nuevoMapa.delete(producto.id);
            producto.cantidad += productoCarrito.cantidad;
            return nuevoMapa.set(producto.id, producto);
        })
    }

    const sacarProducto = (id: number): void => {
        const productoCarrito: ProductoCarrito = carritoProductos.get(id)!;
        const nuevaCantidad = productoCarrito.cantidad - 1;
        if (nuevaCantidad) {
            setCarritoProductos(carrito => new Map(carrito.set(id, {...productoCarrito, cantidad: nuevaCantidad })));
            return;
        }
        setCarritoProductos(carrito => {
            const nuevoMap = new Map(carrito);
            nuevoMap.delete(id);
            return nuevoMap;
        });
    }

    const limpiarCarrito = () => {
        setCarritoProductos(carrito => {
            const carritoLimpiado: Map<number, ProductoCarrito> = new Map(carrito);
            carritoLimpiado.clear();
            return carritoLimpiado;
        })
    }

    const agregarInfoUsuario = (nuevaInfoUsuario: Usuario | undefined): void => {
        if (!nuevaInfoUsuario) {
            setUsuario(undefined);
            return;
        }
        setUsuario({...usuario,  ...nuevaInfoUsuario});
    }
    
    const Informacion: Informacion = {
        usuario,
        agregarInfoUsuario ,
        productos: data!.products,
        ofertas,
        carritoProductos,
        agregarProducto,
        sacarProducto,
        limpiarCarrito
    };

    return (
        <informacionContext.Provider value={Informacion}>
            {props.children}
        </informacionContext.Provider>
    )
}

export default SInformacion;