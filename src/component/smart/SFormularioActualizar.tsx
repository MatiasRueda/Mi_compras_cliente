import SFormulario from "./SFormulario";
import Input from "./SInput";

function SFormularioActualizar(props: { enviarInformacion: (data: any) => Promise<void> , nombre?: boolean , email?: boolean, contrasenia?: boolean }): JSX.Element {
    return (
        <SFormulario id="form-actualizar" btnEnviar="Actualizar" onSubmit={props.enviarInformacion}>
            {props.nombre && <label htmlFor="nombre">Nombre:</label>}
            {props.nombre && <Input nombre="nombre" type="text" reglas={{ required: "Escriba su nombre porfavor"}}
                            {...{ placeholder: "escriba su nuevo nombre"}}/>}
            {props.email && <label htmlFor="email">Email:</label>}
            {props.email && <Input nombre="email" type="text" reglas={{required: "Escriba su email porfavor"}}
                            {...{placeholder: "escriba su nuevo email"}}/>}
            {props.contrasenia && <label htmlFor="contrasenia">Contrasenia:</label>}
            {props.contrasenia && <Input nombre="contrasenia" type="password" reglas={{required: "Escriba su contrasenia porfavor"}}
                            {...{placeholder: "escriba su nueva contrasenia"}}/>}
            {props.contrasenia && <label htmlFor="confirmarContrasenia">Confirmar contrasenia:</label>}
            {props.contrasenia  && <Input nombre="confirmarContrasenia" role="contrasenia" type="password" 
                reglas={{ required: "Reescriba su contrasenia porfavor" }} inputIgual="contrasenia"
                {...{ placeholder: "reescriba su nueva contrasenia"}}/>}
        </SFormulario>
    )
}

export default SFormularioActualizar;