import { ReactNode } from "react";

function DLista(props: { clase: string, children: ReactNode }): JSX.Element {
    return (
        <div className={props.clase}>
            {props.children}
        </div>
    )
}

export default DLista;