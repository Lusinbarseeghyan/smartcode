import { Link } from "react-router-dom";
import classes from "./CourseCard.module.css";
import { useTranslation } from "react-i18next";

const CourseCard = ({ name, posters, shortTitle, price, duration }) => {
    const {t} = useTranslation("menu")
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
                    <Link to={`/courses/${name}`}>{t(`courses`)}</Link>
                </footer>
            </div>
        </div>
    );
};

export default CourseCard;
