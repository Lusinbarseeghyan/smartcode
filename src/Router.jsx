import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Courses from "./pages/Courses/Courses";
import AdminCourses from "./pages/Admin/Courses/Courses";
import Features from "./pages/Features/Features";
import AdminFeatures from "./pages/Admin/Features/Features";
import Staff from "./pages/Staff/Staff";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import AdminPartners from "./pages/Admin/Partners/Partners";
import NotFound from "./pages/NotFound/NotFound";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Login from "./pages/Login/Login";
import RouteMiddleware from "./components/RouteMiddleware/RouteMiddleware";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import PartnerEdit from "./pages/Admin/PartnerEdit/PartnerEdit";
import FeatureEdit from "./pages/Admin/FeatureEdit/FeatureEdit";
import CourseEdit from "./pages/Admin/CourseEdit/CourseEdit";
import PartnerNew from "./pages/Admin/PartnerNew/PartnerNew";
import FeatureNew from "./pages/Admin/FeatureNew/FeatureNew";

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
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="/dashboard/courses" element={<AdminCourses />} />
                        <Route path="/dashboard/courses/:id" element={<CourseEdit />} />
                        <Route path="/dashboard/features" element={<AdminFeatures />} />
                        <Route path="/dashboard/features/:id" element={<FeatureEdit />} />
                        <Route path="/dashboard/features/new" element={<FeatureNew />} />
                        <Route path="/dashboard/partners" element={<AdminPartners />} />
                        <Route path="/dashboard/partners/:id" element={<PartnerEdit />} />
                        <Route path="/dashboard/partners/new" element={<PartnerNew />} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
