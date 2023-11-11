import { Oferta, Producto, ProductoCarrito, Usuario } from "../../auxiliar/type";

export const usuario1Test: Usuario = {
    id: 1,
    nombre: "Matias",
    puntos: 1000,
    email: "123@gmail.com",
    DNI: "12345",
    canjeTitulo: "ninguno",
    canjeDescuento: 0,
    canjeRestantes: 0,
    suscripcionTitulo: "ninguno",
    suscripcionDescuento: 0,
    suscripcionRestantes: 0,
}

export const producto1Test: Producto = {            
    id: 1,
    title: "Iphone X",
    description: "Un celelar",
    price: 100,
    brand: "Apple",
    category: "smarthphone",
    images: ["imagen1"]
};

export const producto2Test: Producto = {            
    id: 2,
    title: "Samsumg Galaxy",
    description: "Un celular",
    price: 130,
    brand: "Samsumg",
    category: "smarthphone",
    images: ["imagen1"]
};

export const oferta1Test: Oferta = {
    ...producto1Test,
    descuento: 10,
}

export const oferta2Test: Oferta = {
    ...producto2Test,
    descuento: 15,
}

export const productoCarrito1Test: ProductoCarrito = {
    ...producto1Test,
    cantidad: 1,
}


export const productoCarrito2Test: ProductoCarrito = {
    ...producto2Test,
    cantidad: 12,
}

export const carritoProductos1Test: Map<number, ProductoCarrito> = 
    new Map([[productoCarrito1Test.id, productoCarrito1Test],
             [productoCarrito2Test.id, productoCarrito2Test]])

