import { Oferta, Producto } from "./type";

export default function encontrarOfertas(productos: Producto[]): Oferta[] {
    const maximasOfertas: number = 10;
    const minimoDescuento: number = 5;
    const maximoDescuento: number = 10;
    let randomsElegidos: number[] = [];
    let ofertas: Oferta[] = [];
    while (ofertas.length <= maximasOfertas) {
        let indiceRandom = Math.floor(Math.random() * productos.length);
        if (randomsElegidos.find((e: number) => e == indiceRandom)) 
            continue;
        const descuento: number = Math.floor(Math.random() * maximoDescuento) + minimoDescuento;
        const oferta: Oferta = {...productos[indiceRandom], descuento};
        ofertas.push(oferta);
        randomsElegidos.push(indiceRandom);
    }
    return ofertas;
}