import { Route, Routes } from "react-router-dom";
import Inicio from "../../page/Inicio";
import ProductoDetalles from "../../page/ProductoDetalles";
import Busqueda from "../../page/Busqueda";
import Canjes from "../../page/Canjes";
import Perfil from "../../page/Perfil";
import Novedades from "../../page/Novedades";
import Suscripciones from "../../page/Suscripciones";
import Ingresar from "../../page/Ingresar";
import Registrarse from "../../page/Registrarse";
import Carrito from "../../page/Carrito";
import { PATH_CLIENT } from "../../auxiliar/path";

function SRoutes(): JSX.Element {
    return (
        <Routes>
            <Route index element={<Inicio/>}/>
            <Route path={PATH_CLIENT.PRODUCTO + "/:id"} element={<ProductoDetalles/>}/>
            <Route path={PATH_CLIENT.BUSQUEDA + "/:caracteristica"} element={<Busqueda/>}/>
            <Route path={PATH_CLIENT.SUSCRIPCION} element={<Suscripciones/>}/>
            <Route path={PATH_CLIENT.CANJE} element={<Canjes/>}/>
            <Route path={PATH_CLIENT.PERFIL} element={<Perfil/>}/>
            <Route path={PATH_CLIENT.CARRITO} element={<Carrito/>}/>
            <Route path={PATH_CLIENT.NOVEDADES} element={<Novedades/>}/>  
            <Route path={PATH_CLIENT.INGRESAR} element={<Ingresar/>}/>
            <Route path={PATH_CLIENT.REGISTRARSE} element={<Registrarse/>}/>
        </Routes>
    )
}

export default SRoutes;