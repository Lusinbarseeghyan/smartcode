import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}></Route>
        </Routes>
    );
};

export default Router;
