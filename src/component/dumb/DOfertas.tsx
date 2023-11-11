import ASliderOfertas from "../animation/ASliderOfertas";

function DOfertas(props: { ofertas: JSX.Element[] }): JSX.Element {
    return (
        <div className="cont-ofertas">
            <h2>Ofertas: </h2>
            <ASliderOfertas elementos={props.ofertas}
                            clasePadre="cont-controlador-ofertas" 
                            claseHijo="cont-controlador-oferta"/>
        </div>
    )
}

export default DOfertas;