import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

const Layout = () => {
    return (
        <div id="app">
            <Menu />
            <div className="mt-20">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
