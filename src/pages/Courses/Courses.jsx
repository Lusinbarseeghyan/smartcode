import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import CourseCard from "../../components/CourseCard/CourseCard";

import useAnimations from "../../utils/Animations/useAnimations";

import classes from "./Courses.module.css";
const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    const { leftAnimationVariant } = useAnimations();

    useEffect(() => {
        (async () => {
            const result = await fetch("http://localhost:3001/courses");
            const jsonData = await result.json();

            setCourseData(jsonData);
        })();
    }, []);

    return (
        <div className={`mt-40 mb-footer ${classes.wrapper}`}>
            <div className={classes.course_bg_white}></div>
            <div className={classes.course_bg_dark}></div>

            <motion.div
                className={`container ${classes.course_cards_container}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...leftAnimationVariant(2)}
            >
                {courseData.map((course) => {
                    return <CourseCard key={course.id} {...course} />;
                })}
            </motion.div>
        </div>
    );
};

export default Courses;
