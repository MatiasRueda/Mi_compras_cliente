import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import DNovedad from "../../component/dumb/DNovedad";

describe("- Test Novedad -", () => {
    const titulo: string = "Titulo de la novedad";
    const descripcion: string = "Esta es una descripcion"

    beforeEach(() => {
        render(<DNovedad titulo={titulo} descripcion={descripcion}/>)
    })

    describe("Se renderiza correctamente", () => {
        it("Titulo", () => {
            const elemento: HTMLElement = screen.getByText(titulo);
            expect(elemento).toBeInTheDocument();
        })

        it("Descripcion", () => {
            const elemento: HTMLElement = screen.getByText(descripcion);
            expect(elemento).toBeInTheDocument();
        })
    })
})