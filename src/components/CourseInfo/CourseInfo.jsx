import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCourse } from "../../store/slices/courses/coursesSlice";
import { fetchCourse } from "../../store/slices/courses/coursesApi";

import classes from "./CourseInfo.module.css";
const CourseInfo = () => {
    const selectedCourse = useSelector(selectCourse);
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            dispatch(fetchCourse(name));
        })();
    }, [name, dispatch]);

    if (!selectedCourse) {
        return null;
    }

    return (
        <div
            className={`container mb-footer mt-20 ${classes.course_info_container}`}
        >
            <div className={classes.course_image}>
                <img
                    src={selectedCourse.posters.small}
                    alt={selectedCourse.name}
                />
            </div>
            <div className={classes.bottom}>
                <div className={classes.info}>
                    <h1>{selectedCourse.name}</h1>
                    <h2>{selectedCourse.title}</h2>
                    <p>{selectedCourse.subtitle}</p>
                    <p>{selectedCourse.description}</p>
                </div>
                <div className={classes.body_image}>
                    <img
                        src={selectedCourse.posters.big}
                        alt={selectedCourse.title}
                    />
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
