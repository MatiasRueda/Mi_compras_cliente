import { ReactNode } from "react";
import ALayout from "../animation/ALayout";

function DOpcion(props:{ condicion: boolean, children: ReactNode , divClase?: string , layoutClase?: string }): JSX.Element {
    return (
        <ALayout divClase={props.divClase} layoutClase={props.layoutClase} condicion={props.condicion}>
            {props.children}
        </ALayout>
    )
}

export default DOpcion;