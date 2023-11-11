function DSuscripcion(props: { titulo: string , tipo: string , precio: number , beneficios: JSX.Element[] , click: () => void, deshabilitar: boolean}): JSX.Element {
    return (
        <div className="cont-suscripcion">
            <h2 role="text">{props.titulo}</h2>
            <h4 role="text">{props.tipo}</h4>
            <h5 role="text">${props.precio}</h5>
            <ul>
                {props.beneficios}
            </ul>
            <button onClick={props.click} 
                {...{disabled: props.deshabilitar}}>
                    Suscribirse
            </button>
        </div>
    )
}

export default DSuscripcion;