import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DOferta from "../../component/dumb/DOferta";
import { oferta1Test } from "../aulixiliar/ejemplos";

describe("- Test Oferta -", () => {
    let verDetalles: jest.Mock;

    beforeEach(() => {
        verDetalles = jest.fn();
        render(<DOferta click={verDetalles} oferta={oferta1Test}/>)
    })

    describe("Se renderiza correctamente",() => {
        it("El titulo", () => {
            const elemento: HTMLElement = screen.getByText(oferta1Test.title);
            expect(elemento).toBeInTheDocument(); 
        })

        it("La descripcion", () => {
            const elemento: HTMLElement = screen.getByText(oferta1Test.description);
            expect(elemento).toBeInTheDocument(); 
        })

        it("El boton", () => {
            const elemento: HTMLElement = screen.getByRole("button");
            expect(elemento).toBeInTheDocument(); 
        })

        it("El texto del boton", () => {
            const elemento: HTMLElement = screen.getByRole("button");
            expect(elemento).toHaveTextContent("Mas detalles"); 
        })

        it("La imagen de la oferta", () => {
            const elemento: HTMLElement = screen.getByRole("img");
            expect(elemento).toBeInTheDocument();
        })

        it("La cantidad de botones es 1", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(1); 
        })
    })

    describe("El control sobre el boton es correcto",() => {
        it("Se puede hacer click", async () => {
            user.setup();
            const elemento: HTMLElement = screen.getByRole("button");
            await user.click(elemento);
            expect(verDetalles).toBeCalledTimes(1);
        })
    })
})