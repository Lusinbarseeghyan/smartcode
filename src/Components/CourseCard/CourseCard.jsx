import React from "react";

import classes from "./CourseCard.module.css";
const CourseCard = ({ course }) => {
    return (
        <div>
            <div className={classes.course_card_box}>
                <div className={classes.course_card_top}>
                    <img src={course.image} alt="" />
                </div>
                <div className={classes.course_card_middle}>
                    <h2>{course.name}</h2>
                    <div className={classes.overview}>
                        <span>{course.price} ֏</span>
                        <span>{`${course.duration} ամիս`} </span>
                    </div>
                </div>
                <div className={classes.course_card_bottom}>
                    <button>Տեսնել ավելին</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
