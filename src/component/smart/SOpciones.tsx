import { Children, ReactNode, isValidElement } from "react";
import DOpcion from "../dumb/DOpcion";

type Parametros = {
    children: ReactNode;
    clase: string;
    opcionClase: string;
    layoutClase: string;
    elegido?: string;
}

function SOpciones({ children , clase, opcionClase, layoutClase, elegido }: Parametros): JSX.Element {
    return (
        <div className={clase}>
            {Children.map(children, child => {
                if(!isValidElement(child)) return child;
                return <DOpcion key={child.props.children}
                                divClase={opcionClase}
                                layoutClase={layoutClase}
                                condicion={child.props.children == elegido}>
                                    {child}
                </DOpcion>
            })}
        </div>
    )
}

export default SOpciones;