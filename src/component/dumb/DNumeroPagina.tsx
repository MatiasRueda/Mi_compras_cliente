function DNumeroPagina(props: { nroPagina?: number , anterior: JSX.Element | false, siguiente: JSX.Element | false }): JSX.Element {
    return (
        <div className="nro-pagina">
            <div className="cont-nro-pagina">
                <div className="btn-anterior">
                    {props.anterior}
                </div>
                <p>{props.nroPagina}</p>
                <div className="btn-siguiente">
                    {props.siguiente}
                </div>
            </div>
        </div>
    )
}

export default DNumeroPagina;