import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import DRedes from "../../component/dumb/DRedes";

describe("- Test Redes -" ,() => {
    beforeEach(() => {
        render(<DRedes/>)
    })

    describe("- Se renderiza correctamente -", () => {
        it("Encabezado de las redes", () => {
            const elemento: HTMLElement = screen.getByRole("titulo");    
            expect(elemento).toBeInTheDocument();
        })

        it("Se muestra facebook", () => {
            const elemento: HTMLElement = screen.getByText("Facebook: MiTienda");    
            expect(elemento).toBeInTheDocument();
        })

        it("Se muestra twitter", () => {
            const elemento: HTMLElement = screen.getByText("Twitter: MiTienda");    
            expect(elemento).toBeInTheDocument();
        }) 

        it("Se muestra instagram", () => {
            const elemento: HTMLElement = screen.getByText("Instagram: MiTiendaOficial");    
            expect(elemento).toBeInTheDocument();
        }) 

        it("Se tienen solamente 3 etiquetas p", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("info");
            expect(elementos).toHaveLength(3);
        })
    })
}) 