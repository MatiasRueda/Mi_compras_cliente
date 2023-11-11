function DDescuento(props: {botonCanje: JSX.Element | false, botonSuscripcion: JSX.Element | false}): JSX.Element {
    return (
        <div className="cont-descuentos">
            <h3>Descuentos para aplicar:</h3>
            {props.botonCanje}
            {props.botonSuscripcion}
        </div>
    )
}

export default DDescuento;