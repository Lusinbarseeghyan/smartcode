import classes from "./CourseCard.module.css";

const CourseCard = ({ image, name, price, duration }) => {
    return (
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
                <button>Տեսնել ավելին</button>
            </footer>
        </div>
    );
};

export default CourseCard;
