import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/features" element={<Features />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
