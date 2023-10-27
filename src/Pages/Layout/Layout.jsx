import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
    return (
        <div id="app">
            <Menu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
