import { useTranslation } from "react-i18next";
import classes from "./Partner.module.css";

const Partner = ({ title, logo, website, size = "default" }) => {
    const {t, i18n} = useTranslation("menu");
    return (
        <div className={`${classes.partner} ${classes[size]}`} title={title}>
            <div className={classes.logo}>
                <img src={logo} alt={title} />
                <a href={website} target="_blank" rel="noreferrer">
                    <span>{t(`partners.title`)}</span>
                </a>
            </div>
        </div>
    );
};

export default Partner;
