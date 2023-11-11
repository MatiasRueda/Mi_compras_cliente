import { Usuario } from "../../auxiliar/type";

function DInfoUsuario(props: { usuario?: Usuario }): JSX.Element {
    return (
        <div className="cont-perfil">
            <p role="info">Nombre: {props.usuario?.nombre}</p>
            <p role="info">DNI: {props.usuario?.DNI}</p>
            <p role="info">Email: {props.usuario?.email}</p>
            <p role="info">Puntos: {props.usuario?.puntos}</p>
            <p role="info">Suscripcion: {props.usuario?.suscripcionTitulo}</p>
            <p role="info">Canje Activo: {props.usuario?.canjeTitulo}</p>
        </div>
    )
}

export default DInfoUsuario;