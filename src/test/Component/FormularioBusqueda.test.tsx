import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormularioBusqueda from "../../component/smart/SFormularioBusqueda";

describe("- Test FormularioBusqueda -", () => {
    let elemento: HTMLElement;
    let fnMock: jest.Mock;

    beforeEach(() => {
        fnMock = jest.fn();
        render(<FormularioBusqueda enviarInformacion={fnMock}/>)
    })
    
    describe("- Se renderiza correctamente -", () => {

        it("Textbox busqueda", () => {
            elemento = screen.getByRole("textbox", {name: "busqueda"})
            expect(elemento).toBeInTheDocument();
        })

        it("Placeholder busqueda", () => {
            elemento = screen.getByPlaceholderText("Que es lo que esta buscando?");
            expect(elemento).toBeInTheDocument();
        })

        it("Boton de busqueda", () => {
            elemento = screen.getByRole("button", {name: "Buscar"});
            expect(elemento).toBeInTheDocument();
        })
    })

    describe("- Tienen los atributos correctos -", () => {

        it("campo busqueda placeholder", () => {
            elemento = screen.getByRole("textbox", {name: "busqueda"});
            expect(elemento).toHaveAttribute("placeholder");
        })
        
        it("campo busqueda text", () => {
            elemento = screen.getByRole("textbox", {name: "busqueda"});
            expect(elemento).toHaveAttribute("type", "text");
        })
        
        it("Boton busqueda submit", () => {
            elemento = screen.getByRole("button", {name: "Buscar"});
            expect(elemento).toHaveAttribute("type", "submit");
        })
    })

    describe("- Aparece el error correctamente -", () => {
        beforeEach(() => {
            user.setup();
        })

        it("No aparece en un comienzo el error", () => {
            const posibleElemento: HTMLElement | null = screen.queryByRole("error", {name: "busqueda-error"});
            expect(posibleElemento).toBeNull();
        })

        it("Es requerido el campo de busqueda", async () => {
            await user.click(screen.getByRole("button", {name: "Buscar"}));
            elemento = screen.getByRole("error", {name: "busqueda-error"});
            expect(elemento).toBeInTheDocument();
        })
    })

    describe("- Aparecen los texto correctos los errores -", () => {
        it("Es requerido el campo de busqueda", async() => {
            user.setup();
            await user.click(screen.getByRole("button", {name: "Buscar"}));
            elemento = screen.getByText("Escriba lo que quiera buscar");
            expect(elemento).toBeInTheDocument();
        })
    })

    describe("- Enviar informacion -", () => {

        let buscar: HTMLElement;
        const marcaBuscada: string = "Apple";

        beforeEach(() => {
            user.setup();
            buscar = screen.getByRole("button", {name: "Buscar"});
        })

        it("No se puede enviar informacion si no se completa el campo", async() => {
            await user.click(buscar);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("Se puede enviar informacion si se completa el campo", async () => {
            await user.type(screen.getByRole("textbox", {name: "busqueda"}), marcaBuscada);
            await user.click(buscar);
            expect(fnMock).toBeCalledTimes(1);
        })

        it("La informacion recibida es correcta", async () => {
            await user.type(screen.getByRole("textbox", {name: "busqueda"}), marcaBuscada);
            await user.click(buscar);
            expect(fnMock).toHaveBeenCalledWith({busqueda: marcaBuscada});
        })
    })
})