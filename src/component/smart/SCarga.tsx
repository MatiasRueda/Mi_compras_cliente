import { Fragment, ReactNode } from "react";

function SCarga(props: { mostrarCarga: boolean , children: ReactNode }): JSX.Element {
    return (
        <Fragment>
            {props.mostrarCarga ? <h1>Cargando</h1> : props.children}
        </Fragment>
    )
}

export default SCarga;