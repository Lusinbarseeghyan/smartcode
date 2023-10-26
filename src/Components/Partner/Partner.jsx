import classes from "./Partner.module.css";

const Partner = ({ title, logo, website, size = "default" }) => {
    return (
        <div className={`${classes.partner} ${classes[size]}`} title={title}>
            <div className={classes.logo}>
                <img src={logo} alt={title} />
                <a href={website} target="_blank" rel="noreferrer">
                    <span>Կարդալ ավելին</span>
                </a>
            </div>
        </div>
    );
};

export default Partner;
