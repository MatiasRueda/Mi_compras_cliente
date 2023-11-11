import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import DSugerencia from "../../component/dumb/DSugerencia";

describe("- Test Sugerencias -" ,() => {
    beforeEach(() => {
        render(<DSugerencia/>);
    })

    describe("Se renderiza correctamente", () => {
        it("Se muestra la sugerencia", () => {
            const elemento: Element = screen.getByText("Si tienes sugerencias o comentarios:");
            expect(elemento).toBeInTheDocument();
        })
        
        it("Se muestra un boton", () => {
            const elemento: Element = screen.getByRole("button");
            expect(elemento).toBeInTheDocument();
        })
    })
})