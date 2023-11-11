import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DCarrito from "../../component/dumb/DCarrito";


describe("- Test Carrito -", () => {
    const precio: number = 1000;
    let comprar: jest.Mock;

    beforeEach(() => {
        comprar = jest.fn();
        render(<DCarrito precio={precio} comprar={comprar} productos={[]}/>);
    })

    describe("Se renderiza correctamente ",() => {
        it("El precio total", () => {
            const elemento: HTMLElement = screen.getByText("Total: $" + precio.toString());
            expect(elemento).toBeInTheDocument();
        })

        it("El boton para comprar", () => {
            const elemento: HTMLElement = screen.getByRole("button");
            expect(elemento).toBeInTheDocument();
        })

        it("Hay un boton para comprar", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(1);
        })
    })

    describe("El boton funciona correctamente", () => {
        it("Se puede hacer click para comprar",  async () => {
            user.setup();
            const elemento: HTMLElement = screen.getByRole("button");
            await user.click(elemento);
            expect(comprar).toBeCalledTimes(1);
        })
    })
})