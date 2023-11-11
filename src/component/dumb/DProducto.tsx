import AProducto from "../animation/AProducto";

function DProducto(props: { infoProducto: any , masDetalles: () => void}): JSX.Element {
    return (    
        <AProducto>
            <div className="producto" onClick={props.masDetalles}>
                <img src={props.infoProducto.images[0]}/>
                <p>{props.infoProducto.title}</p>
            </div>
        </AProducto>
    )
}

export default DProducto;