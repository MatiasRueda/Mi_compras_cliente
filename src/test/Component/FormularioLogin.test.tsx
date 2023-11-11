import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import FormularioLogin from "../../component/smart/SFormularioLogin";
import user from "@testing-library/user-event";

const usuarioLoginTest = {
    nombre: "AGBIYAGBGANGOAGONGA",
    contrasenia: "ABGIAGBIGAGA",
}

describe(("- Test FormularioLogin -"), () => {
    let fnMock: jest.Mock;
    let elemento: HTMLElement;
    let posibleElemento : HTMLElement | null;

    beforeEach(() => {
        fnMock = jest.fn();
        render(<FormularioLogin enviarInformacion={fnMock}/>)
    })

    describe("- Se renderiza correctamente -", () => {

        it("- Label nombre -", () => {
            elemento = screen.getByLabelText("Nombre:");
            expect(elemento).toBeInTheDocument();
        })

        it("- Placeholder usuario-nombre -", () => {
            elemento = screen.getByPlaceholderText("escriba su nombre");
            expect(elemento).toBeInTheDocument();
        })

        it("- TextBox nombre -", () => {
            elemento = screen.getByRole("textbox", {name: "nombre"});
            expect(elemento).toBeInTheDocument();
        })

        it("- Label contrasenia -", () => {
            elemento = screen.getByLabelText("Contrasenia:");
            expect(elemento).toBeInTheDocument();
        })

        it("- Placeholder usuario-nombre -", () => {
            elemento = screen.getByPlaceholderText("escriba su contrasenia");
            expect(elemento).toBeInTheDocument();
        })

        it("- TextBox contrasenia -", () => {
            elemento = screen.getByRole("contrasenia", {name: "contrasenia"});
            expect(elemento).toBeInTheDocument();
        })

        it("- Boton para compartir -", () => {
            elemento = screen.getByRole("button", {name: "Ingresar"});
            expect(elemento).toBeInTheDocument();
        })
    })

    describe("- Tienen los atributos correctos -", () => {

        it("- Text en nombre -", () => {
            elemento = screen.getByRole("textbox", {name: "nombre"});
            expect(elemento).toHaveAttribute("type", "text");
        })

        it("- Password en contrasenia -", () => {
            elemento = screen.getByRole("contrasenia", {name: "contrasenia"});
            expect(elemento).toHaveAttribute("type", "password");
        })

        it("- Submit en el boton ingresar -", () => {
            elemento = screen.getByRole("button", {name: "Ingresar"});
            expect(elemento).toHaveAttribute("type", "submit");
        })
    })


    describe("- Correcto funcionamientos de los inputs -", () => {
        beforeEach(() => {
            user.setup();
        })

        it("Se puede escribir sobre el input nombre", async () => {
          elemento = screen.getByRole("textbox", {name: "nombre"});
          await user.type(elemento, usuarioLoginTest.nombre);
          expect(elemento).toHaveValue(usuarioLoginTest.nombre);
        })
    
        it("Se puede escribir sobre el input contrasenia", async () => {
          elemento = screen.getByRole("contrasenia", {name: "contrasenia"});
          await user.type(elemento, usuarioLoginTest.contrasenia);
          expect(elemento).toHaveValue(usuarioLoginTest.contrasenia);
        })
    })

    describe("- Aparecen los errores correctamente -",() => {
        let ingresar: HTMLElement;
        
        beforeEach(() => {
            user.setup();
            ingresar = screen.getByRole("button", {name: "Ingresar"});
        }) 

        
        it("NO aparece el error del campo nombre", () => {
            posibleElemento = screen.queryByRole("error", {name: "nombre-error"});
            expect(posibleElemento).toBeNull();
        })

        it("NO aparece el error del campo contrasenia", () => {
            posibleElemento = screen.queryByRole("error", {name: "contrasenia-error"});
            expect(posibleElemento).toBeNull();
        })

        it("NO aparece ningun error", () => {
            const posiblesElementos: HTMLElement[] = screen.queryAllByRole("error");
            expect(posiblesElementos).toHaveLength(0);
        })

        it("Aparecen unicamente 2 errores cuando das click en ingresar", async () => {
            await user.click(ingresar)
            const posiblesElementos: HTMLElement[] = screen.getAllByRole("error");
            expect(posiblesElementos).toHaveLength(2);
        })

        it("Aparece el error es requerido el campo nombre", async () => {
            await user.click(ingresar);
            elemento = screen.getByRole("error", {name: "nombre-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error es requerido el campo contrasenia", async () => {
            await user.click(ingresar);
            elemento = screen.getByRole("error", {name: "contrasenia-error"});
            expect(elemento).toBeInTheDocument();
        })
    })


    describe("- Aparecen los texto de los errores -",() => {
        let ingresar: HTMLElement;
        
        beforeEach(() => {
            user.setup();
            ingresar = screen.getByRole("button", {name: "Ingresar"});
        }) 
        
        it("Campo nombre es requerido", async () => {
            await user.click(ingresar);
            elemento = screen.getByText("Escriba su nombre porfavor")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo contrasenia es requerido", async () => {
            await user.click(ingresar);
            elemento = screen.getByText("Escriba su contrasenia porfavor")
            expect(elemento).toBeInTheDocument();
        })
    })

    describe("- Enviar informacion -", () => {

        let ingresar: HTMLElement;
        
        beforeEach(() => {
            user.setup();
            ingresar = screen.getByRole("button", {name: "Ingresar"});
        }) 

        it("No se puede enviar si no se completa el campo nombre", async () => {
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioLoginTest.contrasenia);
            await user.click(ingresar);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("No se puede enviar si no se completa el campo contrasenia", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioLoginTest.nombre);
            await user.click(ingresar);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("Se puede enviar una vez completado los campos", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioLoginTest.nombre);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioLoginTest.contrasenia);
            await user.click(ingresar);
            expect(fnMock).toBeCalledTimes(1);
        })

        it("Recibe al usuario", async () => {
          await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioLoginTest.nombre);
          await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioLoginTest.contrasenia);
          await user.click(ingresar);
          expect(fnMock).toBeCalledWith(usuarioLoginTest);
        })
    })

})