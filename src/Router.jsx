import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Courses from "./pages/Courses/Courses";
import Features from "./pages/Features/Features";
import Staff from "./pages/Staff/Staff";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import NotFound from "./pages/NotFound/NotFound";
import CourseInfo from "./components/CourseInfo/CourseInfo";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="courses/:course" element={<CourseInfo />} />
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
