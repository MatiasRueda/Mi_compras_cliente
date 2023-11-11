import "../asset/style/Canje.css";
import SCanjes from "../component/smart/SCanjes";

function Canje(): JSX.Element {
    return (
        <main className="pagina-canjes">
            <h3>El total del dinero gastado se convierte en puntos {"(Se redondea para abajo)"}</h3>
            <SCanjes/>
        </main>
    )
}

export default Canje;