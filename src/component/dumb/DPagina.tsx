import APagina from "../animation/APagina";

function DPagina(props: { clase: string , lista?: JSX.Element[] , llave?: number | string}): JSX.Element {
    return (
        <APagina key={props.llave}>
            <div className={props.clase}>
                {props.lista}
            </div>
        </APagina>
    )
}

export default DPagina;