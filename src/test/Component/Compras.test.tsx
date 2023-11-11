import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import SCompras from "../../component/smart/SCompras";
import DCompras from "../../component/dumb/DCompras";
import { BrowserRouter } from "react-router-dom";
import { useInformacionContext } from "../../component/smart/SInfoProvider";
import { carritoProductos1Test, usuario1Test } from "../aulixiliar/ejemplos";

jest.mock("../../component/smart/SInfoProvider");

describe("- Test Compras -", () => {

    describe("- Test sobre dumb component -",() => {
        const cantidad: number = 10;
        let comprar: jest.Mock;
        beforeEach(() => {
            comprar = jest.fn();
            render(<DCompras cantidad={cantidad} click={comprar}/>)
        })

        describe("Se renderiza correctamente", () => {
            it("El boton", () => {
                const elemento: HTMLElement = screen.getByRole("button");
                expect(elemento).toBeInTheDocument();
            })
            it ("El texto del boton", () => {
                const elemento: HTMLElement = screen.getByRole("button");
                expect(elemento).toHaveTextContent("C " + cantidad.toString());
            })

        })
    })

    describe("- Test sobre smart component -" ,() => {
        describe("Se renderiza correctamente",() => {
            describe("Cuando hay usuario",() => {
                it("Se muestran la cantidad de productos del carrito", () => {
                    (useInformacionContext as jest.Mock).mockImplementation(() => {
                        return { usuario: usuario1Test , 
                                 carritoProductos: carritoProductos1Test};
                    });
                    render(<BrowserRouter>
                            <SCompras/>
                          </BrowserRouter>)
                    const elemento: HTMLElement = screen.getByText("C " + carritoProductos1Test.size.toString());
                    expect(elemento).toBeInTheDocument();
                    
                })
            })

            describe("Cuando NO hay usuario",() => {
                it("NO se muestra la cantidad de productos del carrito", () => {
                    (useInformacionContext as jest.Mock).mockImplementation(() => {
                        return { usuario: undefined , 
                                 carritoProductos: carritoProductos1Test};
                    });
                    render(<BrowserRouter>
                            <SCompras/>
                          </BrowserRouter>)
                    const elemento: HTMLElement |null = screen.queryByText("C " + carritoProductos1Test.size.toString());
                    expect(elemento).toBeNull();
                    
                })
            })
        })

    })


})