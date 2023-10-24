import { Outlet } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

const Layout = () => {
    return (
        <div id="app">
            <Menu />
            <Outlet />
        </div>
    );
};

export default Layout;
