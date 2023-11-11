function DNovedad(props: { titulo: string , descripcion: string }): JSX.Element {
    return (
        <div className="cont-novedad">
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default DNovedad;