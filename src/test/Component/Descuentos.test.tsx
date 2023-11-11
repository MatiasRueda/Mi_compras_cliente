import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import SDescuentos from "../../component/smart/SDescuentos";


describe("- Test Descuento.test -", () => {
    let canjeAplicar: jest.Mock = jest.fn();
    let suscripcionAplicar: jest.Mock = jest.fn();

    describe(" Se renderiza correctamente al estar activo canje y suscripcion", () => {

        beforeEach(() => {
            render(<SDescuentos canje={true} canjeAplicar={canjeAplicar} canjeDeshabilitar={false} 
                    suscripcion={true} suscripcionAplicar={suscripcionAplicar} suscripcionDeshabilitar={false}/>)
        })

        it("Titulo", () => {
            const elemento: HTMLElement = screen.getByText("Descuentos para aplicar:");
            expect(elemento).toBeInTheDocument();
        })

        it("Boton canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton canje tiene su estilo al estar activo", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toHaveStyle({color: "white", backgroundColor: "blue"});
        })

        it("Boton canje tiene el texto canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toHaveTextContent("Canje");
        })

        it("Boton suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton suscripcion tiene su estilo al estar activo", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toHaveStyle({color: "white", backgroundColor: "blue"});
        })

        it("Boton suscripcion tiene el texto suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toHaveTextContent("Suscripcion");
        })

        it("Solo hay 2 botones", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(2);
        })
    })

    
    describe(" Se renderiza correctamente al estar activo canje y NO suscripcion", () => {

        beforeEach(() => {
            render(<SDescuentos canje={true} canjeAplicar={canjeAplicar} canjeDeshabilitar={false} 
                    suscripcion={false} suscripcionAplicar={suscripcionAplicar} suscripcionDeshabilitar={false}/>)
        })

        it("Titulo", () => {
            const elemento: HTMLElement = screen.getByText("Descuentos para aplicar:");
            expect(elemento).toBeInTheDocument();
        })

        it("Boton canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton canje tiene su estilo al estar activo", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toHaveStyle({color: "white", backgroundColor: "blue"});
        })

        it("Boton canje tiene el texto canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toHaveTextContent("Canje");
        })

        it("Boton suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton suscripcion tiene su estilo al NO estar activo", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toHaveStyle({color: "black", backgroundColor: "white"});
        })

        it("Boton suscripcion tiene el texto suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toHaveTextContent("Suscripcion");
        })

        it("Solo hay 2 botones", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(2);
        })
    })

    describe(" Se renderiza correctamente al estar activo suscripcion y NO canje", () => {

        beforeEach(() => {
            render(<SDescuentos canje={false} canjeAplicar={canjeAplicar} canjeDeshabilitar={false} 
                    suscripcion={true} suscripcionAplicar={suscripcionAplicar} suscripcionDeshabilitar={false}/>)
        })

        it("Titulo", () => {
            const elemento: HTMLElement = screen.getByText("Descuentos para aplicar:");
            expect(elemento).toBeInTheDocument();
        })

        it("Boton canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton canje tiene su estilo al estar activo", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toHaveStyle({color: "black", backgroundColor: "white"});
        })

        it("Boton canje tiene el texto canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toHaveTextContent("Canje");
        })

        it("Boton suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton suscripcion tiene su estilo al NO estar activo", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toHaveStyle({color: "white", backgroundColor: "blue"});
        })
        
        it("Boton suscripcion tiene el texto suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toHaveTextContent("Suscripcion");
        })

        it("Solo hay 2 botones", () => {
            const elementos: HTMLElement[] = screen.getAllByRole("button");
            expect(elementos).toHaveLength(2);
        })
    })

    describe(" Se renderiza correctamente al deshabilitar suscripcion y canje", () => {

        beforeEach(() => {
            render(<SDescuentos canje={false} canjeAplicar={canjeAplicar} canjeDeshabilitar={true} 
                    suscripcion={true} suscripcionAplicar={suscripcionAplicar} suscripcionDeshabilitar={true}/>)
        })

        it("Boton canje", () => {
            const elemento: HTMLElement | null = screen.queryByRole("button", {name: "canje"});
            expect(elemento).toBeNull();
        })

        it("Boton suscripcion", () => {
            const elemento: HTMLElement | null = screen.queryByRole("button", {name: "suscripcion"});
            expect(elemento).toBeNull();
        })

        it("Hay 0 botones", () => {
            const elementos: HTMLElement[] = screen.queryAllByRole("button");
            expect(elementos).toHaveLength(0);
        })
    })

    describe(" Se renderiza correctamente al deshabilitar suscripcion y NO canje", () => {

        beforeEach(() => {
            render(<SDescuentos canje={false} canjeAplicar={canjeAplicar} canjeDeshabilitar={false} 
                    suscripcion={true} suscripcionAplicar={suscripcionAplicar} suscripcionDeshabilitar={true}/>)
        })

        it("Boton canje", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "canje"});
            expect(elemento).toBeInTheDocument();
        })

        it("Boton suscripcion", () => {
            const elemento: HTMLElement | null = screen.queryByRole("button", {name: "suscripcion"});
            expect(elemento).toBeNull();
        })

        it("Hay 1 boton", () => {
            const elementos: HTMLElement[] = screen.queryAllByRole("button");
            expect(elementos).toHaveLength(1);
        })
    })

    describe(" Se renderiza correctamente al deshabilitar canje y NO suscripcion", () => {

        beforeEach(() => {
            render(<SDescuentos canje={false} canjeAplicar={canjeAplicar} canjeDeshabilitar={true} 
                    suscripcion={true} suscripcionAplicar={suscripcionAplicar} suscripcionDeshabilitar={false}/>)
        })

        it("Boton canje", () => {
            const elemento: HTMLElement | null = screen.queryByRole("button", {name: "canje"});
            expect(elemento).toBeNull();
        })

        it("Boton suscripcion", () => {
            const elemento: HTMLElement = screen.getByRole("button", {name: "suscripcion"});
            expect(elemento).toBeInTheDocument();
        })

        it("Hay 1 boton", () => {
            const elementos: HTMLElement[] = screen.queryAllByRole("button");
            expect(elementos).toHaveLength(1);
        })
    })
})