import { Route, Routes } from "react-router-dom";

import Layout from "./Pages/Layout/Layout";
import Courses from "./Pages/Courses/Courses";
import Features from "./Pages/Features/Features";
import Staff from "./Pages/Staff/Staff";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners";
import NotFound from "./Pages/NotFound/NotFound";

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
