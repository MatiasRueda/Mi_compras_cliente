import "./asset/style/App.css";
import "./asset/style/Header.css";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import useScrollTop from "./hook/useScrollTop";
import SRoutes from "./component/smart/SRoutes";
import SInformacion from "./component/smart/SInformacion";
import Footer from "./page/Footer";
import Header from "./page/Header";

function App() {

    useScrollTop(); 

    return (
        <SInformacion>
            <Toaster position="bottom-left"/>
            <Header/>
            <SRoutes/>
            <Footer/>
        </SInformacion>
    )
}

export default App
