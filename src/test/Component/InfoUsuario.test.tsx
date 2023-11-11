import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import DInfoUsuario from "../../component/dumb/DInfoUsuario";
import { usuario1Test } from "../auxiliar/ejemplos";

describe("- Test Informacion usuario -" ,() => {
    beforeEach(() => {
        render(<DInfoUsuario usuario={usuario1Test}/>)
    })

    describe("Se renderiza correctamente",() => {
        it("- Se muestra el nombre -", () => {
            const elemento: HTMLElement = screen.getByText("Nombre: " + usuario1Test.nombre);
            expect(elemento).toBeInTheDocument();
        })

        it("- Se muestra el DNI -", () => {
            const elemento: HTMLElement = screen.getByText("DNI: " + usuario1Test.DNI);
            expect(elemento).toBeInTheDocument();
        })

        it("- Se muestran los puntos -", () => {
            const elemento: HTMLElement = screen.getByText("Puntos: " + usuario1Test.puntos);
            expect(elemento).toBeInTheDocument();
        })

        it("- Se muestra el email -", () => {
            const elemento: HTMLElement = screen.getByText("Email: " + usuario1Test.email);
            expect(elemento).toBeInTheDocument();
        })

        it("- Se muestra el tipo de suscripcion -", () => {
            const elemento: HTMLElement = screen.getByText("Suscripcion: " + usuario1Test.suscripcionTitulo);
            expect(elemento).toBeInTheDocument();
        })

        it("- Se muestra el tipo de canje activo -", () => {
            const elemento: HTMLElement = screen.getByText("Canje Activo: " + usuario1Test.canjeTitulo);
            expect(elemento).toBeInTheDocument();
        })

        it ("La cantidad de etiquetas p es 6", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("info");
            expect(elementos).toHaveLength(6);
        })
    })
})