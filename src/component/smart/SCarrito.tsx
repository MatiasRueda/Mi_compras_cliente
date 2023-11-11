import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { METODO, useEnviarSolicitud } from "../../hook/useEnviarSolicitud";
import { MENSAJE_ERROR, MENSAJE_EXITO } from "../../auxiliar/mensajes";
import { useInformacionContext } from "./SInfoProvider";
import DCarrito from "../dumb/DCarrito";
import DProductoCompra from "../dumb/DProductoCompra";
import SDescuentos from "./SDescuentos";
import { PATH_CLIENT, SERVER_PATH_ACTUALIZAR } from "../../auxiliar/path";
import SVerificar from "./SVerificar";
import { Usuario } from "../../auxiliar/type";

function SCarrito(): JSX.Element {
    const navigate = useNavigate();
    const { usuario, agregarInfoUsuario, carritoProductos, sacarProducto , limpiarCarrito } = useInformacionContext();
    const [ suscripcion, setSuscripcion ] = useState<boolean>(false);
    const [ canje, setCanje ] = useState<boolean>(false);
    let total = 0;

    const productosCreados = (): JSX.Element[] => {
        let productos: JSX.Element[] = [];
        carritoProductos.forEach((producto, id) => {
            total += producto.price * producto.cantidad;
            productos.push(<DProductoCompra key={id} id={id} 
                                producto={producto} precio={producto.price * producto.cantidad} 
                                cantidad={producto.cantidad} click={sacarProducto}/>);
        })
        return productos;
    }



    const comprar = async (): Promise<void> => {
        if (!usuario) {
            toast.error(MENSAJE_ERROR.NO_INGRESADO);
            navigate("/" + PATH_CLIENT.INGRESAR);
            return;
        }

        const nuevosCanjesRestantes: number = canje? usuario.canjeRestantes - 1 : usuario.canjeRestantes;
        const nuevosSuscripRestantes: number = suscripcion? usuario.suscripcionRestantes - 1 : usuario.suscripcionRestantes; 
        const data: Usuario = {
            ...usuario,
            puntos: usuario.puntos + (Math.floor(total)),
            canjeRestantes: nuevosCanjesRestantes,
            canjeTitulo: !nuevosCanjesRestantes? "ninguno" : usuario.canjeTitulo,
            canjeDescuento: 0, 
            suscripcionRestantes: nuevosSuscripRestantes,
            suscripcionDescuento: !nuevosSuscripRestantes? 0 : usuario.suscripcionDescuento,
        }
        await useEnviarSolicitud(data, SERVER_PATH_ACTUALIZAR, METODO.PUT);
        agregarInfoUsuario({ ...usuario, ...data});
        toast.success(MENSAJE_EXITO.COMPRA);
        limpiarCarrito();
        navigate("/");
    } 

    const calcularTotal = (): number => {
        if (suscripcion)
            total -= (total * (usuario!.suscripcionDescuento / 100));
        if (canje)
            total -= (total * (usuario!.canjeDescuento / 100));
        return Number(total.toFixed(2));
    }

    return <SVerificar necesario={!!usuario} msjError={MENSAJE_ERROR.NO_INGRESADO}>
                {!carritoProductos.size? 
                    <h1>No hay productos agregados</h1>:
                    <DCarrito productos={productosCreados()} 
                              precio={calcularTotal()}
                              descuentos={(!usuario!.canjeRestantes && !usuario!.suscripcionRestantes? 
                                    undefined :
                                    <SDescuentos canje={canje} canjeAplicar={() => {setCanje(!canje)}} 
                                                canjeDeshabilitar={!usuario!.canjeRestantes}
                                                suscripcion={suscripcion} 
                                                suscripcionAplicar={() => {setSuscripcion(!suscripcion)}} 
                                                suscripcionDeshabilitar={!usuario!.suscripcionRestantes}/>)}
                                                comprar={comprar}/>}
            </SVerificar>
}

export default SCarrito;