import classes from "./Course.module.css";

const Course = ({ image, name, price, duration }) => {
    return (
        <div className={classes.course}>
            <div className={classes.poster}>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <button>Տեսնել ավելին</button>
                <p>{price} ֏</p>
                <p>{duration} ամիս</p>
            </div>
        </div>
    );
};

export default Course;
