import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DPrecioDescontado from "../../component/dumb/DPrecioDescontado";


describe("- Test Precio Descontado -", () => {
    const precio: number = 100;
    const precioDescontado: number = 90;
    let agregar: jest.Mock;

    beforeEach(() => {
        agregar = jest.fn();
        render(<DPrecioDescontado precioDescontado={precioDescontado} precio={precio} click={agregar}/>)
    })

    describe("Se renderiza correctamente", () => {
        it("Se muestra el precio", () => {
            const elemento: HTMLElement = screen.getByText("$"+ precio.toString());
            expect(elemento).toBeInTheDocument();
        })

        it("Se muestra el precio descontado", () => {
            const elemento: HTMLElement = screen.getByText("$"+ precioDescontado.toString());
            expect(elemento).toBeInTheDocument();
        })
        
        it("Se muestra un boton", () => {
            const elemento: HTMLElement = screen.getByRole("button");
            expect(elemento).toBeInTheDocument();
        })

        it("El boton aparece con su texto correcto", () => {
            const elemento: HTMLElement = screen.getByRole("button");
            expect(elemento).toHaveTextContent("Agregar al carrito");        
        })

        it("Solo hay un boton", () => {
            const elemento: HTMLElement[] = screen.getAllByRole("button");
            expect(elemento).toHaveLength(1);
        })
    })

    describe("El control sobre el boton es correcto",() => {
        it("Se puede hacer click", async () => {
            user.setup();
            const elemento: HTMLElement = screen.getByRole("button");
            await user.click(elemento);
            expect(agregar).toBeCalledTimes(1);
        })
    })
})