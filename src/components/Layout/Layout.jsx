import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div id="app">
            <Outlet />
        </div>
    );
};

export default Layout;
