import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./CourseInfo.module.css";

const CourseInfo = () => {
    const [currentCourse, setCurrentCourse] = useState(null);
    const { course } = useParams();

    useEffect(() => {
        (async () => {
            const result = await fetch(
                `http://localhost:3001/courses?name=${course}`
            );
            const jsonData = await result.json();
            setCurrentCourse(jsonData[0]);
        })();
    }, [course]);

    console.log(currentCourse);
    return (
        <div
            className={`container mb-footer mt-20 ${classes.course_info_container}`}
        >
            <div className={classes.course_image}>
                <img src={currentCourse?.image} alt={currentCourse?.name} />
            </div>
            <div className={classes.bottom}>
                <div className={classes.info}>
                    <h1>{currentCourse?.name}</h1>
                    <h2>{currentCourse?.description.title}</h2>
                    <p>{currentCourse?.description.subtitle}</p>
                    <p>{currentCourse?.description.body.text}</p>
                </div>
                <div className={classes.body_image}>
                    <img src={currentCourse?.description.body.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
