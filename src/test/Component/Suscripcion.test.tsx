import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DSuscripcion from "../../component/dumb/DSuscripcion";

describe("- Test Suscripcion -", () => {
    const parametros = {
        titulo: "Normal",
        tipo: "Mensual",
        precio: 100,
        beneficios: [],
        deshabilitar: false,
    }
    let fn: jest.Mock;

    beforeEach(() => {
        fn = jest.fn();
        render(<DSuscripcion {...parametros} click={fn}/>)
    })

    describe("Se renderiza correctamente", ()=> {
        it("Se muestra el titulo", () => {
            const elemento: Element = screen.getByText(parametros.titulo);
            expect(elemento).toBeInTheDocument();
        })

        it("Se muestra el tipo", () => {
            const elemento: Element = screen.getByText(parametros.tipo);
            expect(elemento).toBeInTheDocument();
        })

        it("Se muestra el precio", () => {
            const elemento: Element = screen.getByText("$" + parametros.precio.toString());
            expect(elemento).toBeInTheDocument();
        })

        it("El boton muestra Suscribirse", () => {
            const elemento: Element = screen.getByRole("button");
            expect(elemento).toHaveTextContent("Suscribirse");
        })

        it("Hay 3 texts", () => {
            const elementos: Element[] = screen.getAllByRole("text");
            expect(elementos).toHaveLength(3);
        })

        it("Hay solo un boton", () => {
            const elementos: Element[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(1);
        })

    })

    describe("- Manejo correcto del boton", () => {
        beforeEach( async () => {
            user.setup();
            const elemento: Element = screen.getByRole("button");
            await user.click(elemento);
        })

        it("Se aplica el click", async () => {
            expect(fn).toBeCalledTimes(1);
        })
    })
})