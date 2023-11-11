import ASeccion from "../animation/ASeccion";

function DPagina(props: { clase: string , lista?: JSX.Element[] , llave?: number | string}): JSX.Element {
    return (
        <ASeccion key={props.llave} clase={props.clase}>
            {props.lista}
        </ASeccion>
    )
}

export default DPagina;