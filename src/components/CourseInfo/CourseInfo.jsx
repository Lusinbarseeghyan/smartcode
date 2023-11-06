import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCourse } from "../../store/slices/courses/coursesSlice";
import { fetchCourseByName } from "../../store/slices/courses/coursesApi";
import classes from "./CourseInfo.module.css";

const CourseInfo = () => {
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
                    <p>{selectedCourse.description.mainTitle}</p>
                    <ul>
                        <li>{selectedCourse.description.stages.first}</li>
                        <li>{selectedCourse.description.stages.second}</li>
                        <li>{selectedCourse.description.stages.third}</li>
                        <li>{selectedCourse.description.stages.forth}</li>
                    </ul>
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
        </div>
    );
};

export default CourseInfo;
