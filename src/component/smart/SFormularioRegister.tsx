import SFormulario from "./SFormulario";
import Input from "./SInput";

function FormularioRegister(props: { enviarInformacion: (data: any) => Promise<void>}): JSX.Element {

    return (
        <SFormulario id="form-register" btnEnviar="Registrarse" onSubmit={props.enviarInformacion}>
            <label htmlFor="nombre">Nombre:</label>
            <Input nombre="nombre" type="text" reglas={{ required: "Escriba su nombre porfavor"}}
                {...{ placeholder: "escriba su nombre"}}/>

            <label htmlFor="dni">DNI:</label>
            <Input nombre="dni" type="text" reglas={{ required: "Escriba su dni porfavor"}}
                {...{ placeholder: "escriba su DNI"}}/>

            <label htmlFor="email">Email:</label>
            <Input nombre="email" type="text" 
                reglas={{ required: "Escriba su email porfavor",
                          pattern: {value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i, message:"Email invalido"}}}
                {...{ placeholder: "escriba su email"}}/>

            <label htmlFor="contrasenia">Contrasenia:</label>
            <Input nombre="contrasenia" role="contrasenia" type="password" 
                reglas={{required: "Escriba su contrasenia porfavor"}}
                {...{ placeholder: "escriba su contrasenia"}}/>

            <label htmlFor="confirContrasenia">Confirmar contrasenia:</label>
            <Input nombre="confirContrasenia" role="contrasenia" type="password" 
                reglas={{ required: "Reescriba su contrasenia porfavor" }} inputIgual="contrasenia"
                {...{ placeholder: "reescriba su contrasenia"}}/>
        </SFormulario>
    )
}

export default FormularioRegister;