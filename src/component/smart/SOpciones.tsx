import DOpcion from "../dumb/DOpcion";
import DLista from "../dumb/DLista";

type Parametros = {
    lista: JSX.Element[];
    clase: string;
    opcionClase: string;
    layoutClase: string;
    elegido?: string;
}

function SOpciones({ lista , clase, opcionClase, layoutClase, elegido }: Parametros): JSX.Element {
    const opciones: JSX.Element[] = lista.map(
        (elemento: JSX.Element) => 
            <DOpcion  key={elemento.props.children}
                      divClase={opcionClase}
                      layoutClase={layoutClase}
                      condicion={elemento.props.children == elegido}>
                        {elemento}
            </DOpcion>)
    
    return (
        <DLista clase={clase} children= {opciones}/>
    )
}

export default SOpciones;