import "@testing-library/jest-dom";
import FormularioRegister from "../../component/smart/SFormularioRegister";
import { render , screen } from "@testing-library/react";
import user from "@testing-library/user-event";

const usuarioRegisterTest = {
    nombre: "AGBIYAGBGANGOAGONGA",
    email: "pablo@gmail.com",
    dni: "0123456789",
    contrasenia: "ABGIAGBIGAGA",
    confirContrasenia: "ABGIAGBIGAGA",
}

jest.setTimeout(50000);

describe("- Test FormularioRegister -", ()=> {
    let fnMock: jest.Mock;
    let elemento: HTMLElement;
    let posibleElemento : HTMLElement | null;

    beforeEach(() => {
        fnMock = jest.fn();
        render(<FormularioRegister enviarInformacion={fnMock}/>)
    })

    describe("- Se renderiza correctamente -", () => {

        it("Label nombre", () => {
            elemento = screen.getByLabelText("Nombre:");
            expect(elemento).toBeInTheDocument();
        })

        it("Placeholder nombre", () => {
            elemento = screen.getByPlaceholderText("escriba su nombre");
            expect(elemento).toBeInTheDocument();
        })

        it("Label email", () => {
            elemento = screen.getByLabelText("Email:");
            expect(elemento).toBeInTheDocument();
        })

        it("Placeholder email", () => {
            elemento = screen.getByPlaceholderText("escriba su email");
            expect(elemento).toBeInTheDocument();
        })

        it("Label dni", () => {
            elemento = screen.getByLabelText("DNI:");
            expect(elemento).toBeInTheDocument();
        })

        it("Placeholder dni", () => {
            elemento = screen.getByPlaceholderText("escriba su DNI");
            expect(elemento).toBeInTheDocument();
        })

        it("Label contrasenia", () => {
            elemento = screen.getByLabelText("Contrasenia:");
            expect(elemento).toBeInTheDocument();
        })

        it("Placeholder contrasenia", () => {
            elemento = screen.getByPlaceholderText("escriba su contrasenia");
            expect(elemento).toBeInTheDocument();
        })

        it("Label confirmar contrasenia", () => {
            elemento = screen.getByLabelText("Confirmar contrasenia:");
            expect(elemento).toBeInTheDocument();
        })

        it("Placeholder confirmar contrasenia", () => {
            elemento = screen.getByPlaceholderText("reescriba su contrasenia");
            expect(elemento).toBeInTheDocument();
        })

        it("Boton para registrarse", () => {
            elemento = screen.getByRole("button", {name: "Registrarse"});
            expect(elemento).toBeInTheDocument();
        })
    })

    describe("- Tienen los atributos correctos -", () => {

        it("- Text en nombre -", () => {
            elemento = screen.getByRole("textbox", {name: "nombre"});
            expect(elemento).toHaveAttribute("type", "text");
        })

        it("- Placeholder en nombre -", () => {
            elemento = screen.getByRole("textbox", {name: "nombre"});
            expect(elemento).toHaveAttribute("placeholder");
        })

        it("- Text en email -", () => {
            elemento = screen.getByRole("textbox", {name: "email"});
            expect(elemento).toHaveAttribute("type", "text");
        })

        it("- Placeholder en email -", () => {
            elemento = screen.getByRole("textbox", {name: "email"});
            expect(elemento).toHaveAttribute("placeholder");
        })

        it("- Text en dni -", () => {
            elemento = screen.getByRole("textbox", {name: "dni"});
            expect(elemento).toHaveAttribute("type", "text");
        })

        it("- Placeholder en dni -", () => {
            elemento = screen.getByRole("textbox", {name: "dni"});
            expect(elemento).toHaveAttribute("placeholder");
        })

        it("- Password en contrasenia -", () => {
            elemento = screen.getByRole("contrasenia", {name: "contrasenia"});
            expect(elemento).toHaveAttribute("type", "password");
        })

        it("- Placeholder en contrasenia -", () => {
            elemento = screen.getByRole("contrasenia", {name: "contrasenia"});
            expect(elemento).toHaveAttribute("placeholder");
        })

        it("- Password en confirmar contrasenia -", () => {
            elemento = screen.getByRole("contrasenia", {name: "confirContrasenia"});
            expect(elemento).toHaveAttribute("type", "password");
        })

        it("- Placeholder en confirmar contrasenia -", () => {
            elemento = screen.getByRole("contrasenia", {name: "confirContrasenia"});
            expect(elemento).toHaveAttribute("placeholder");
        })

        it("- Submit en el boton registrarse -", () => {
            elemento = screen.getByRole("button", {name: "Registrarse"});
            expect(elemento).toHaveAttribute("type", "submit");
        })
    })

    describe("- Correcto funcionamientos de los inputs -", () => {
        beforeEach(() => {
            user.setup();
        })

        it("Se puede escribir sobre el input nombre", async () => {
          elemento = screen.getByRole("textbox", {name: "nombre"});
          await user.type(elemento, usuarioRegisterTest.nombre);
          expect(elemento).toHaveValue(usuarioRegisterTest.nombre);
        })
    
        it("Se puede escribir sobre el input email", async () => {
            elemento = screen.getByRole("textbox", {name: "email"});
            await user.type(elemento, usuarioRegisterTest.email);
            expect(elemento).toHaveValue(usuarioRegisterTest.email);
        })

        it("Se puede escribir sobre el input dni", async () => {
            elemento = screen.getByRole("textbox", {name: "dni"});
            await user.type(elemento, usuarioRegisterTest.dni);
            expect(elemento).toHaveValue(usuarioRegisterTest.dni);
        })

        it("Se puede escribir sobre el input contrasenia", async () => {
          elemento = screen.getByRole("contrasenia", {name: "contrasenia"});
          await user.type(elemento, usuarioRegisterTest.contrasenia);
          expect(elemento).toHaveValue(usuarioRegisterTest.contrasenia);
        })

        it("Se puede escribir sobre el input confirContrasenia", async () => {
            elemento = screen.getByRole("contrasenia", {name: "confirContrasenia"});
            await user.type(elemento, usuarioRegisterTest.contrasenia);
            expect(elemento).toHaveValue(usuarioRegisterTest.contrasenia);
        })
    })

    describe("- Aparecen los errores correctamente -",() => {
        let registrarse: HTMLElement;
        
        beforeEach(() => {
            user.setup();
            registrarse = screen.getByRole("button", {name: "Registrarse"});
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

        it("Aparecen unicamente 2 errores cuando das click en registrarse", async () => {
            await user.click(registrarse)
            const posiblesElementos: HTMLElement[] = screen.getAllByRole("error");
            expect(posiblesElementos).toHaveLength(5);
        })

        it("Aparece el error es requerido el campo nombre", async () => {
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "nombre-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error es requerido el campo email", async () => {
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "email-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error del email invalido", async () => {
            await user.type(screen.getByRole("textbox", {name: "email"}), "12471941");
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "email-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error es requerido el campo dni ", async () => {
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "dni-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error es requerido el campo contrasenia", async () => {
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "contrasenia-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error es requerido el campo confirmContrasenia", async () => {
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "confirContrasenia-error"});
            expect(elemento).toBeInTheDocument();
        })

        it("Aparece el error de que las contrasenia no son iguales", async () => {
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia + "agba");
            await user.click(registrarse);
            elemento = screen.getByRole("error", {name: "confirContrasenia-error"});
            expect(elemento).toBeInTheDocument();
        })
    })


    describe("- Aparecen los texto de las errores -",() => {
        let registrarse: HTMLElement;
        
        beforeEach(() => {
            user.setup();
            registrarse = screen.getByRole("button", {name: "Registrarse"});
        }) 
        
        it("Campo nombre es requerido", async () => {
            await user.click(registrarse);
            elemento = screen.getByText("Escriba su nombre porfavor")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo email es requerido", async () => {
            await user.click(registrarse);
            elemento = screen.getByText("Escriba su email porfavor")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo email no es valido", async () => {
            await user.type(screen.getByRole("textbox", {name: "email"}), "123");
            await user.click(registrarse);
            elemento = screen.getByText("Email invalido")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo dni es requerido", async () => {
            await user.click(registrarse);
            elemento = screen.getByText("Escriba su dni porfavor")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo contrasenia es requerido", async () => {
            await user.click(registrarse);
            elemento = screen.getByText("Escriba su contrasenia porfavor")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo confirmar contrasenia es requerido", async () => {
            await user.click(registrarse);
            elemento = screen.getByText("Reescriba su contrasenia porfavor")
            expect(elemento).toBeInTheDocument();
        })

        it("Campo confirmar contrasenia no la misma contrasenia", async () => {
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.contrasenia + "12341");
            await user.click(registrarse);
            elemento = screen.getByText("Las contrasenias no coinciden");
            expect(elemento).toBeInTheDocument();
        })

    })

    describe("- Enviar informacion -", () => {

        let registrarse: HTMLElement;
        
        beforeEach(() => {
            user.setup();
            registrarse = screen.getByRole("button", {name: "Registrarse"});
        }) 

        it("No se puede enviar si no se completa el campo nombre", async () => {
            await user.type(screen.getByRole("textbox", {name: "email"}), usuarioRegisterTest.email);
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(0);
        })


        it("No se puede enviar si no se completa el campo email", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("No se puede enviar si el email es invalido", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "email"}), "151515");
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("No se puede enviar si no se completa el campo dni", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "email"}), usuarioRegisterTest.email);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(0);
        })


        it("No se puede enviar si no se completa el campo contrasenia", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "email"}), usuarioRegisterTest.email);
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("No se puede enviar si las contrasenias no coinciden", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "email"}), usuarioRegisterTest.email);
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia + "1231");
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(0);
        })

        it("Se puede enviar una vez completado los campos", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "email"}), usuarioRegisterTest.email);
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledTimes(1);
        })

        it("Recibe al usuario", async () => {
            await user.type(screen.getByRole("textbox", {name: "nombre"}), usuarioRegisterTest.nombre);
            await user.type(screen.getByRole("textbox", {name: "email"}), usuarioRegisterTest.email);
            await user.type(screen.getByRole("textbox", {name: "dni"}), usuarioRegisterTest.dni);
            await user.type(screen.getByRole("contrasenia", {name: "contrasenia"}), usuarioRegisterTest.contrasenia);
            await user.type(screen.getByRole("contrasenia", {name: "confirContrasenia"}), usuarioRegisterTest.confirContrasenia);
            await user.click(registrarse);
            expect(fnMock).toBeCalledWith(usuarioRegisterTest);
        })
    })

})