import "./asset/style/App.css";
import "./asset/style/Header.css";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import useScrollTop from "./hook/useScrollTop";
import SRoutes from "./component/smart/SRoutes";
import SInformacionProvider from "./component/smart/SInfoProvider";
import Footer from "./page/Footer";
import Header from "./page/Header";

function App() {

    useScrollTop(); 

    return (
        <Fragment>
            <Toaster position="bottom-left"/>
            <SInformacionProvider>
                <Header/>
                <SRoutes/>
                <Footer/>
            </SInformacionProvider>
        </Fragment>
    )
}

export default App
