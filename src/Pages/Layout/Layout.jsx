import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

const Layout = () => {
    return (
        <div id="app">
            <Menu />
            <Outlet />
        </div>
    );
};

export default Layout;
