import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DProductoDetalles from "../../component/dumb/DProductoDetalles";
import { producto1Test } from "../auxiliar/ejemplos";

describe("- Test Productos Detalles -",() => {
    let aumentar: jest.Mock;
    let disminuir: jest.Mock;

    describe("Se renderiza correctamente", () => {
        beforeEach(() => {
            aumentar = jest.fn();
            disminuir = jest.fn();
            render(<DProductoDetalles producto={producto1Test}
                    clickReducir={disminuir} clickAumentar={aumentar} cantidad={1}
                    deshabilitar={false} precio={<></>}/>);
        })

        it ("El titulo", () => {
            const elemento: HTMLElement = screen.getByText(producto1Test.title);
            expect(elemento).toBeInTheDocument();
        })

        it("La categoria", () => {
            const elemento: HTMLElement = screen.getByText("Categoria: " + producto1Test.category);
            expect(elemento).toBeInTheDocument();
        })

        it("La descripcion", () => {
            const elemento: HTMLElement = screen.getByText(producto1Test.description);
            expect(elemento).toBeInTheDocument();
        })

        it("La cantidad", () => {
            const elemento: HTMLElement = screen.getByText("Cantidad:");
            expect(elemento).toBeInTheDocument();
        })


        it("El boton disminuir", () => {
            const elemento: HTMLElement = screen.getByRole("button", { name: "boton-disminuir" })
            expect(elemento).toBeInTheDocument();
        })

        it("El boton disminuir tiene el texto: - ", () => {
            const elemento: HTMLElement = screen.getByRole("button", { name: "boton-disminuir" })
            expect(elemento).toHaveTextContent("-");
        })

        it("La cantidad de productos", () => {
            const elemento: HTMLElement = screen.getByText("x1");
            expect(elemento).toBeInTheDocument();
        })


        it("El boton aumentar", () => {
            const elemento: HTMLElement = screen.getByRole("button", { name: "boton-aumentar" })
            expect(elemento).toBeInTheDocument();
        })

        it("El boton aumentar tiene el texto: + ", () => {
            const elemento: HTMLElement = screen.getByRole("button", { name: "boton-aumentar" })
            expect(elemento).toHaveTextContent("+");
        })

        it("La cantidad de botones es 2", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(2);
        })
    })

    describe("Los botones funcionan correctamente", () => {

        describe("Deshabilitar en false",() => {
            beforeEach(() => {
                user.setup();
                aumentar = jest.fn();
                disminuir = jest.fn();
                render(<DProductoDetalles producto={producto1Test}
                        clickReducir={disminuir} clickAumentar={aumentar} cantidad={1}
                        deshabilitar={false} precio={<></>}/>);
            })


            it ("Se puede hacer click sobre disminuir", async () => {
                const elemento = screen.getByRole("button", {name: "boton-disminuir"});
                await user.click(elemento);
                expect(disminuir).toBeCalledTimes(1);
            })
    
            it ("Se puede hacer click sobre aumentar", async () => {
                const elemento = screen.getByRole("button", {name: "boton-aumentar"});
                await user.click(elemento);
                expect(aumentar).toBeCalledTimes(1);
            })
        })

        describe("Deshabilitar en true",() => {
            beforeEach(() => {
                user.setup();
                aumentar = jest.fn();
                disminuir = jest.fn();
                render(<DProductoDetalles producto={producto1Test}
                        clickReducir={disminuir} clickAumentar={aumentar} cantidad={1}
                        deshabilitar={true} precio={<></>}/>);
            })


            it ("No se puede hacer click sobre disminuir", async () => {
                const elemento = screen.getByRole("button", {name: "boton-disminuir"});
                await user.click(elemento);
                expect(disminuir).toBeCalledTimes(0);
            })
    
            it ("Se puede hacer click sobre aumentar", async () => {
                const elemento = screen.getByRole("button", {name: "boton-aumentar"});
                await user.click(elemento);
                expect(aumentar).toBeCalledTimes(1);
            })
        })

    })

})