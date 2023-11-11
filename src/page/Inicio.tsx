import "../asset/style/Inicio.css";
import SOfertas from "../component/smart/SOfertas";
import SProductos from "../component/smart/SProductos";

function Inicio(): JSX.Element {

    return (
        <main className="pagina-inicio">
            <SOfertas/>
            <SProductos/>
        </main>
    )
}

export default Inicio;