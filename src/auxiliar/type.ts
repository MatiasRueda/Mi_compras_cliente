/* Archivo utilizado para tener los types mas utilizados a lo largo
de la seccion client y asi evitar repetir el codigo */

// Type del producto que llega de la peticion a dummyjson
export type Producto = {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    images: string[];
}

export type Usuario = {
    id: number;
    nombre: string;
    contrasenia?: string;
    email: string;
    DNI: string;
    puntos: number;
    suscripcionTitulo: string;
    suscripcionDescuento: number,
    suscripcionRestantes: number,
    canjeTitulo: string;
    canjeDescuento: number;
    canjeRestantes: number,
};

export type Canje = {
    titulo: string;
    puntos: number;
    descuento: number;
    restantes: number;
};

export type Novedad = {
    id: number;
    titulo: string;
    descripcion: string;
};

export type Suscripcion = {
    titulo: string;
    tipo: string;
    precio: number;
    descuento: number;
    restantes: number;
    beneficios: string[];
};


export type Data = {
    products: Producto[];
    total:number;
    skip: number;
    limit: number;
}

export interface Oferta extends Producto {
    descuento: number;
}

export interface ProductoCarrito extends Producto {
    cantidad: number;
}

export type Informacion = {
    usuario?: Usuario;
    agregarInfoUsuario: (usuario: Usuario | undefined) => void;
    productos: Producto[];
    ofertas: Oferta[];
    carritoProductos: Map<number, ProductoCarrito>;
    agregarProducto: (producto: ProductoCarrito) => void;
    sacarProducto: (id: number) => void;
    limpiarCarrito: () => void;
}