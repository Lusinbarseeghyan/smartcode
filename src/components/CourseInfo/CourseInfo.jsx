import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCourse } from "../../store/slices/courses/coursesSlice";
<<<<<<< HEAD
import { fetchCourse } from "../../store/slices/courses/coursesApi";
import { motion } from "framer-motion";

import useAnimations from "../../utils/Animations/useAnimations";

=======
import { fetchCourseByName } from "../../store/slices/courses/coursesApi";
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
import classes from "./CourseInfo.module.css";

const CourseInfo = () => {
    const { scaleAnimationVariant } = useAnimations();
    const selectedCourse = useSelector(selectCourse);
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            dispatch(fetchCourseByName(name));
        })();
    }, [name, dispatch]);

    if (!selectedCourse) {
        return null;
    }

    return (
        <motion.div
            className={`container mb-footer mt-20 ${classes.course_info_container}`}
            initial="hidden"
            whileInView="visible"
            {...scaleAnimationVariant(1)}
        >
            <div className={classes.course_image}>
                <img
                    src={selectedCourse.posters.small}
                    alt={selectedCourse.name}
                />
            </div>
            <div className={classes.bottom}>
                <div className={classes.info}>
<<<<<<< HEAD
                    <h2>{selectedCourse.title}</h2>
                    <p>{selectedCourse.subtitle}</p>
                    <p>{selectedCourse.description.mainTitle}</p>
                    {selectedCourse.description.stages.first ||
                    selectedCourse.description.stages.second ||
                    selectedCourse.description.stages.third ||
                    selectedCourse.description.stages.forth ? (
                        <ul>
                            <li>{selectedCourse.description.stages.first}</li>
                            <li>{selectedCourse.description.stages.second}</li>
                            <li>{selectedCourse.description.stages.third}</li>
                            <li>{selectedCourse.description.stages.forth}</li>
                        </ul>
                    ) : null}
=======
                    <h1>{selectedCourse.shortTitle}</h1>
                    <h2>{selectedCourse.title}</h2>
                    <p>{selectedCourse.subtitle}</p>
                    <p>{selectedCourse.description.mainTitle}</p>
                    <ul>
                        <li>{selectedCourse.description.stages.first}</li>
                        <li>{selectedCourse.description.stages.second}</li>
                        <li>{selectedCourse.description.stages.third}</li>
                        <li>{selectedCourse.description.stages.fourth}</li>
                    </ul>
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
                    <p>{selectedCourse.description.content}</p>
                    <p>{selectedCourse.description.offer}</p>
                </div>
                <div className={classes.body_image}>
                    <img
                        src={selectedCourse.posters.big}
                        alt={selectedCourse.title}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default CourseInfo;
