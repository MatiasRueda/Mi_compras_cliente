import AProducto from "../animation/AProducto";

function DProducto(props: { infoProducto: any , masDetalles: () => void}): JSX.Element {
    return (    
        <AProducto clase="producto" click={props.masDetalles}>
                <img src={props.infoProducto.images[0]}/>
                <p>{props.infoProducto.title}</p>
        </AProducto>
    )
}

export default DProducto;