import APagina from "../animation/APagina";

function DPagina(props: { clase: string , lista?: JSX.Element[] , llave?: number | string}): JSX.Element {
    return (
        <APagina key={props.llave} clase={props.clase}>
            {props.lista}
        </APagina>
    )
}

export default DPagina;