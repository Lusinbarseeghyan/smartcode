import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ReactComponent as SmartCodeLogo } from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";

import classes from "./Menu.module.css";

const Menu = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () =>
            window.scrollY ? setDarkMode(true) : setDarkMode(false);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { t, i18n } = useTranslation("menu");


    return (
        <div className={`${classes.menu} ${darkMode && classes.dark}`}>
            <header className={`container ${classes.header}`}>
                <div className={classes.wrapper}>
                    <div className={classes.logo}>
                        <NavLink to="/">
                            <SmartCodeLogo
                                title="SmartCode logo"
                                className={!darkMode ? "black" : undefined}
                            ></SmartCodeLogo>
                        </NavLink>
                    </div>
                    <nav>
                        <div
                            className={`${classes.hamburger} ${
                                darkMode && classes.dark
                            }`}
                        >
                            <FaBars />
                        </div>
                        <div
                            className={`${classes.links} ${
                                darkMode && classes.dark
                            }`}
                        >
<<<<<<< HEAD
                            <NavLink to="/courses">{t("menu.courses")}</NavLink>
                            <NavLink to="/features">{t("menu.features")}</NavLink>
                            <NavLink to="/staff">{t("menu.staff")}</NavLink>
                            <NavLink to="/about">{t("menu.about")}</NavLink>
                            <NavLink to="/partners">{t("menu.partners")}</NavLink>
=======
                            <NavLink to="/courses">Դասընթացներ</NavLink>
                            <NavLink to="/features">Առավելություններ</NavLink>
                            <NavLink to="/staff">Թրեյներներ</NavLink>
                            <NavLink to="/about">Մեր մասին</NavLink>
                            {/* <NavLink to="/partners">Գործընկերներ</NavLink> */}
>>>>>>> 96e36e4de5a4328d4fe78cf0074463374c26524d
                        </div>
                    </nav>
                </div>
                <div className={classes.socials}>
                    <Link>
                        <BsInstagram />
                    </Link>
                    <Link>
                        <BsLinkedin />
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Menu;
