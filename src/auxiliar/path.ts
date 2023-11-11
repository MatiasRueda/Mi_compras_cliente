enum PATH {
    // GET ROUTES
    USUARIOS = "/usuarios",
    CANJES = "/canjes",
    NOVEDADES = "/novedades",
    SUSCRIPCIONES = "/suscripciones",

    // POST ROUTES
    INGRESAR = "/ingresar",
    REGISTRAR = "/registro",

    // PUT ROUTES
    ACTUALIZAR = "/actualizar",
}


export enum PATH_CLIENT {
    INICIO = "/",
    PRODUCTO = "producto",
    BUSQUEDA = "busqueda",
    SUSCRIPCION = "suscripcion",
    CANJE = "canjes",
    PERFIL = "perfil",
    CARRITO = "carrito",
    NOVEDADES = "novedades",
    INGRESAR = "ingresar",
    REGISTRARSE = "registrarse",
}



export const TODOS_PRODUCTOS: string = "https://dummyjson.com/products?skip=0&limit=100";
export const PRODUCTO_ESPECIFICO: string = "https://dummyjson.com/products/";

const SERVER: string = "http://localhost:5000" ;

export const SERVER_PATH_INGRESAR = SERVER + PATH.INGRESAR;
export const SERVER_PATH_REGISTRARSE = SERVER + PATH.REGISTRAR;
export const SERVER_PATH_NOVEDADES = SERVER + PATH.NOVEDADES;
export const SERVER_PATH_CANJES = SERVER + PATH.CANJES;
export const SERVER_PATH_SUSCRIPCIONES = SERVER + PATH.SUSCRIPCIONES;
export const SERVER_PATH_ACTUALIZAR = SERVER + PATH.ACTUALIZAR;
