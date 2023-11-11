import "../asset/style/Busqueda.css";
import SProductoEspecifico from "../component/smart/SProductoEspecifico";

function Busqueda(): JSX.Element {
    return(
        <main className="pagina-busqueda">
            <SProductoEspecifico/>
        </main>
    )
}

export default Busqueda;