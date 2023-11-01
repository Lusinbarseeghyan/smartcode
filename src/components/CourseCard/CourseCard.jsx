import { useNavigate } from "react-router-dom";
import classes from "./CourseCard.module.css";

const CourseCard = ({ image, name, price, duration }) => {
    const navigate = useNavigate();

    const navigateTo = (course) => {
        navigate(`${course}`);
    };
    return (
        <div className={classes.course_card}>
            <div className={classes.course}>
                <header>
                    <img src={image} alt="" />
                </header>
                <main>
                    <h2>{name}</h2>
                    <div className={classes.overview}>
                        <span>{price} ֏</span>
                        <span>{`${duration} ամիս`} </span>
                    </div>
                </main>
                <footer>
                    <button onClick={() => navigateTo(name)}>
                        Տեսնել ավելին
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default CourseCard;
