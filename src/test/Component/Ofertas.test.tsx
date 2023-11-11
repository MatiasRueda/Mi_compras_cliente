import "@testing-library/jest-dom";
import { render , screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useInformacionContext  } from "../../component/smart/SInfoProvider";
import SOfertas from "../../component/smart/SOfertas";
import { BrowserRouter } from "react-router-dom";
import { oferta1Test, oferta2Test } from "../auxiliar/ejemplos";

const maximoMiliSegundosEspera = 50000;
const maximoMiliSegundosParaDesmontar = 2000;
jest.mock("../../component/smart/SInfoProvider");
jest.setTimeout(maximoMiliSegundosEspera);

describe("- Test Ofertas.test -", () => {

    describe("Se renderiza correctamente cuando hay ofertas", () => {

        beforeEach(() => {
            (useInformacionContext as jest.Mock).mockImplementation(() => {
                return {ofertas: [oferta1Test, oferta2Test]};
            });
            render(<BrowserRouter>
                        <SOfertas/>
                    </BrowserRouter>)
        })

        it("Titulo", () => {
            const elemento: HTMLElement = screen.getByText("Ofertas:");
            expect(elemento).toBeInTheDocument();
        })


        it("Titulo de la oferta 1", () => {
            const elemento: HTMLElement = screen.getByText(oferta1Test.title);
            expect(elemento).toBeInTheDocument();
        })

        it("Descripcion de la oferta 1", () => {
            const elemento: HTMLElement = screen.getByText(oferta1Test.description);
            expect(elemento).toBeInTheDocument();
        })

        it("Titulo de la oferta 2 NO se muestra", () => {
            const elemento: HTMLElement | null = screen.queryByText(oferta2Test.title);
            expect(elemento).toBeNull();
        })

        it("Descripcion de la oferta 2 NO se muestra", () => {
            const elemento: HTMLElement | null = screen.queryByText(oferta2Test.description);
            expect(elemento).toBeNull();
        })

        it("Hay boton siguiente", () => {
            const elementos: HTMLElement = screen.getByRole("button", {name: "siguiente"});
            expect(elementos).toBeInTheDocument();
        })

        it("El boton siguiente su texto es >", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "siguiente"});
            expect(elemento).toHaveTextContent(">");
        })

        it("Hay boton anterior", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "anterior"});
            expect(elemento).toBeInTheDocument();
        })

        it("El boton anterior su texto es <", () => {
            const elementos: HTMLElement = screen.getByRole("button", {name: "anterior"});
            expect(elementos).toHaveTextContent("<");
        })

        it("Hay boton mas detalles", () => {
            const elementos: HTMLElement = screen.getByRole("button", {name: "Mas detalles"});
            expect(elementos).toBeInTheDocument();
        })

        it("El boton mas detalles su texto es Mas detalles", () => {
            const elementos: HTMLElement = screen.getByRole("button", {name: "Mas detalles"});
            expect(elementos).toHaveTextContent("Mas detalles");
        })

        it("Hay 3 botones", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(3);
        })
    })

    describe("Se renderiza correctamente cuando NO hay productos",() => {
        beforeEach(() => {
            (useInformacionContext as jest.Mock).mockImplementation(() => {
                return {ofertas: undefined};
            });
            render(<BrowserRouter>
                        <SOfertas/>
                    </BrowserRouter>)
        })

        it("El cartel de cargando..", () => {
            const elemento: HTMLElement = screen.getByText("Cargando");
            expect(elemento).toBeInTheDocument();
        })

        it("NO se muestra la oferta 1", async () => {
            let elemento: HTMLElement | null = screen.queryByText(oferta1Test.title);
            expect(elemento).toBeNull();
            elemento = screen.queryByText(oferta1Test.description);
            expect(elemento).toBeNull();
        })

        it("NO se muestra la oferta 2", async () => {
            let elemento: HTMLElement | null = screen.queryByText(oferta2Test.title);
            expect(elemento).toBeNull();
            elemento = screen.queryByText(oferta2Test.description);
            expect(elemento).toBeNull();
        })
    })

    describe("Uso correcto de los botones", () => {

        beforeEach(() => {
            user.setup();
            (useInformacionContext as jest.Mock).mockImplementation(() => {
                return {ofertas: [oferta1Test, oferta2Test]};
            });
            render(<BrowserRouter>
                        <SOfertas/>
                    </BrowserRouter>)
        })

        it("Hago click sobre el boton siguiente y se muestra la oferta 2", async () => {
            let elemento: HTMLElement = screen.getByRole("button", {name: "siguiente"});
            await user.click(elemento);
            elemento = screen.getByText(oferta2Test.title);
            expect(elemento).toBeInTheDocument();
            elemento = screen.getByText(oferta2Test.description);
            expect(elemento).toBeInTheDocument();
        })

        it("Hago click sobre el boton siguiente y NO se muestra la oferta 1", async () => {
            let elemento: HTMLElement | null = screen.getByRole("button", {name: "siguiente"});
            await user.click(elemento);
            await waitFor(async () => {
                await new Promise((r) => setTimeout(r, maximoMiliSegundosParaDesmontar));
                elemento = screen.queryByText(oferta1Test.title);
                expect(elemento).toBeNull();
                elemento = screen.queryByText(oferta1Test.description);
                expect(elemento).toBeNull();
            }, { timeout: maximoMiliSegundosEspera})
        })


        it("Hago click sobre el boton anterior y se muestra la oferta 2", async () => {
            let elemento: HTMLElement  | null = screen.getByRole("button", {name: "anterior"});
            await user.click(elemento);
            elemento = screen.getByText(oferta2Test.title);
            expect(elemento).toBeInTheDocument();
            elemento = screen.getByText(oferta2Test.description);
            expect(elemento).toBeInTheDocument();
        })

        it("Hago click sobre el boton siguiente y NO se muestra la oferta 1", async () => {
            let elemento: HTMLElement | null = screen.getByRole("button", {name: "siguiente"});
            await user.click(elemento);
            await waitFor(async () => {
                await new Promise((r) => setTimeout(r, maximoMiliSegundosParaDesmontar));
                elemento = screen.queryByText(oferta1Test.title);
                expect(elemento).toBeNull();
                elemento = screen.queryByText(oferta1Test.description);
                expect(elemento).toBeNull();
            }, { timeout: maximoMiliSegundosEspera })
        })

        it("Hago click sobre el boton siguiente 2 veces y se muestra la oferta 1", async () => {
            let elemento: HTMLElement = screen.getByRole("button", {name: "siguiente"});
            await user.click(elemento);
            await user.click(elemento);
            await waitFor(async () => {
                await new Promise((r) => setTimeout(r, maximoMiliSegundosParaDesmontar));
                elemento = screen.getByText(oferta1Test.title);
                expect(elemento).toBeInTheDocument();
                elemento = screen.getByText(oferta1Test.description);
                expect(elemento).toBeInTheDocument();
            }, { timeout: maximoMiliSegundosEspera })
        })

        it("Hago click sobre el boton siguiente 2 veces Y NO se muestra la oferta 2", async () => {
            let elemento: HTMLElement | null = screen.getByRole("button", {name: "siguiente"});
            await user.click(elemento);
            await user.click(elemento);
            await waitFor(async () => {
                await new Promise((r) => setTimeout(r, maximoMiliSegundosParaDesmontar));
                elemento = screen.queryByText(oferta2Test.title);
                expect(elemento).toBeNull();
                elemento = screen.queryByText(oferta2Test.description);
                expect(elemento).toBeNull();
            }, { timeout: maximoMiliSegundosEspera })
        })

        it("Hago click sobre el boton anterior 2 veces y se muestra la oferta 1", async () => {
            let elemento: HTMLElement = screen.getByRole("button", {name: "anterior"});
            await user.click(elemento);
            await user.click(elemento);
            await waitFor(async () => {
                await new Promise((r) => setTimeout(r, maximoMiliSegundosParaDesmontar));
                elemento = screen.getByText(oferta1Test.title);
                expect(elemento).toBeInTheDocument();
                elemento = screen.getByText(oferta1Test.description);
                expect(elemento).toBeInTheDocument();
            }, { timeout: maximoMiliSegundosEspera })
        })

        it("Hago click sobre el boton anterior 2 veces Y NO se muestra la oferta 2", async () => {
            let elemento: HTMLElement | null = screen.getByRole("button", {name: "anterior"});
            await user.click(elemento);
            await user.click(elemento);
            await waitFor(async () => {
                await new Promise((r) => setTimeout(r, maximoMiliSegundosParaDesmontar));
                elemento = screen.queryByText(oferta2Test.title);
                expect(elemento).toBeNull();
                elemento = screen.queryByText(oferta2Test.description);
                expect(elemento).toBeNull();
            }, { timeout: maximoMiliSegundosEspera })
        })
    })
})