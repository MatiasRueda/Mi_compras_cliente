import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DPrecio from "../../component/dumb/DPrecio";


describe("- Test Precio -", () => {
    const precio: number = 100;
    let agregar: jest.Mock;

    beforeEach(() => {
        agregar = jest.fn();
        render(<DPrecio precio={precio} click={agregar}/>)
    })

    describe("Se renderiza correctamente", () => {
        it("Se muestra el precio", () => {
            const elemento: HTMLElement = screen.getByText("$"+ precio.toString());
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