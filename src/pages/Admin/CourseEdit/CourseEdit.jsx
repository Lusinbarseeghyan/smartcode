import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectEditableCourse } from "../../../store/slices/courses/coursesSlice";
import { fetchCourseById } from "../../../store/slices/courses/coursesApi";
import classes from "./CourseEdit.module.css";

const CourseEdit = () => {
    const { id } = useParams();
    const course = useSelector(selectEditableCourse);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourseById(id));
    }, [id, dispatch]);

    if (!course) {
        return <h1>Not Found</h1>;
    }

    return <div className={classes.edit}>{course.id}</div>;
};

export default CourseEdit;
