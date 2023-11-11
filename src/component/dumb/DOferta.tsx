import { Oferta } from "../../auxiliar/type";

function DOferta(props: {click: () => void, oferta: Oferta}): JSX.Element {
    return (
        <div className="cont-oferta">
            <div className="cont-oferta-imagen">
                <img src={props.oferta.images[0]}/>
            </div>
            <div className="cont-oferta-informacion">
                <h2>{props.oferta.title}</h2>
                <p>{props.oferta.description}</p>
                <button aria-label="Mas detalles" onClick={props.click}>
                    Mas detalles
                </button>
            </div>
        </div>
    )
}

export default DOferta;