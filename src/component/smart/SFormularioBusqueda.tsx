import SFormulario from "./SFormulario";
import Input from "./SInput";

function FormularioBusqueda(props: { enviarInformacion: (data: any) => Promise<void> }): JSX.Element {
    return (
        <SFormulario id="form-busqueda" btnEnviar="Buscar" onSubmit={props.enviarInformacion}>
            <Input nombre="busqueda" type="text" reglas={{required: "Escriba lo que quiera buscar"}}
                {...{placeholder: "Que es lo que esta buscando?"}}/>
        </SFormulario>
    )
}

export default FormularioBusqueda;