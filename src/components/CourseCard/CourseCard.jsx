import { Link } from "react-router-dom";
import classes from "./CourseCard.module.css";

const CourseCard = ({ name, posters, shortTitle, price, duration }) => {
    return (
        <div className={classes.course_card}>
            <div className={classes.course}>
                <header>
                    <img src={posters.small} alt={shortTitle} />
                </header>
                <main>
                    <h2>{shortTitle}</h2>
                    <div className={classes.overview}>
                        <span>{price} ֏</span>
                        <span>{`${duration} ամիս`} </span>
                    </div>
                </main>
                <footer>
                    <Link to={`/courses/${name}`}>Տեսնել ավելին</Link>
                </footer>
            </div>
        </div>
    );
};

export default CourseCard;
