import { useState, useEffect } from "react";
import classes from "./Courses.module.css";
import Course from "../../components/Course/Course";

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
        <div className={`container mt-20 ${classes.cards}`}>
            {courseData.map((course, index) => (
                <Course key={course.id} {...course} isBig={index === 0 && courseData.length % 3 !== 0} />
            ))}
        </div>
    );
};

export default Courses;
