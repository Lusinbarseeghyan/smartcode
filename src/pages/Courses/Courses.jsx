import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import CourseCard from "../../components/CourseCard/CourseCard";
import useAnimations from "../../utils/Animations/useAnimations";
import { selectCoursesList } from "../../store/slices/courses/coursesSlice";
import classes from "./Courses.module.css";
import { fetchCourses } from "../../store/slices/courses/coursesApi";

const Courses = () => {
    const list = useSelector(selectCoursesList);
    const dispatch = useDispatch();

    const { leftAnimationVariant } = useAnimations();

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <motion.div
            className={`mt-20 mb-footer ${classes.wrapper}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className={classes.course_bg_white}></div>
            <div className={classes.course_bg_dark}></div>

            <div className={`container ${classes.course_cards_container}`}>
                {list.map((course) => {
                    return <CourseCard key={course.id} {...course} />;
                })}
            </div>
        </motion.div>
    );
};

export default Courses;
