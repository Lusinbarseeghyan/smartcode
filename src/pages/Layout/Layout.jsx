import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";

const Layout = () => {
    return (
        <div id="app">
            <Menu />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
            <ScrollArrow />
        </div>
    );
};

export default Layout;
