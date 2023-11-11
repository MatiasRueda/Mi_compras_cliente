function Info(props: { infoProducto: any }): JSX.Element {
    return (
        <div className="cont-informacion">
            <p>{"Titulo: " + props.infoProducto.title}</p>
            <p>{"Precio: " + props.infoProducto.price}$</p>
            <p>{"Descripcion: " + props.infoProducto.description}</p>
            <p>{"Rating: "+ props.infoProducto.rating}</p>
            <p>{"Category: "+ props.infoProducto.category}</p>
        </div>
    )
}

export default Info;