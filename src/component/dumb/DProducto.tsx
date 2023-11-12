function DProducto(props: { infoProducto: any , masDetalles: () => void}): JSX.Element {
    return (    
        <section className="producto" onClick={props.masDetalles}>
            <img src={props.infoProducto.images[0]}/>
            <p>{props.infoProducto.title}</p>
        </section>
    )
}

export default DProducto;