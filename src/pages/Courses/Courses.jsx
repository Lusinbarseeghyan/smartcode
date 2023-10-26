import { useState, useEffect } from "react";

import Course from "../../components/Course/Course";
import classes from "./Courses.module.css";

const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    const Courses = () => {
        const [courseData, setCourseData] = useState([]);

        useEffect(() => {
            (async () => {
                const result = await fetch("http://localhost:3001/courses");
                const jsonData = await result.json();

                setCourseData(jsonData);
            })();
        }, []);

        return (
            <div id="courses" className={classes.cards}>
                {courseData.map((course) => {
                    return (
                        <div className={classes.course}>
                            <div className={classes.courseImage}>
                                <img src={course.image} alt="img" />
                            </div>
                            <div className="courseInfo">
                                <h2>{course.name}</h2>
                                <button>Տեսնել ավելին</button>
                                <p>{course.price} ֏</p>
                                <p>{course.duration} ամիս</p>
                            </div>
                        </div>
                    );
                })}
                <div className={`container mt-20 ${classes.cards}`}>
                    {courseData.map((course, index) => (
                        <Course
                            key={course.id}
                            {...course}
                            isBig={index === 0 && courseData.length % 3 !== 0}
                        />
                    ))}
                </div>
            </div>
        );
    };
};
export default Courses;
