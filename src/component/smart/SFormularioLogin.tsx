import SFormulario from "./SFormulario";
import Input from "./SInput";

function FormularioLogin(props: { enviarInformacion:  (data: any) => Promise<void> }): JSX.Element {
    return (
        <SFormulario id="form-login" btnEnviar="Ingresar" onSubmit={props.enviarInformacion}>
            <label htmlFor="nombre">Nombre:</label>
            <Input nombre="nombre" type="text" reglas={{ required: "Escriba su nombre porfavor"}}
                {...{ placeholder: "escriba su nombre"}}/>
            <label htmlFor="contrasenia">Contrasenia:</label>
            <Input nombre="contrasenia" role="contrasenia" type="password" reglas={{required: "Escriba su contrasenia porfavor"}}
                {...{ placeholder: "escriba su contrasenia"}}/>
        </SFormulario>
    )
}

export default FormularioLogin;