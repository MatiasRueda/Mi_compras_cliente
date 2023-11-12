function DPagina(props: { clase: string , lista?: JSX.Element[]}): JSX.Element {
    return (
        <section className={props.clase}>
            {props.lista}
        </section>
    )
}

export default DPagina;