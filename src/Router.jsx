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
import Login from "./pages/Login/Login";
import RouteMiddleware from "./components/RouteMiddleware/RouteMiddleware";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:name" element={<CourseInfo />} />
                <Route path="/features" element={<Features />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />

                <Route element={<RouteMiddleware guest />}>
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<RouteMiddleware user />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<RouteMiddleware admin />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
