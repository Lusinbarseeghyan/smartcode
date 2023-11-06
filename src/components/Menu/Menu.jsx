import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ReactComponent as SmartCodeLogo } from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";

import Flags from "../Flags/Flags";
import classes from "./Menu.module.css";

const Menu = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () =>
            window.scrollY ? setDarkMode(true) : setDarkMode(false);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { t } = useTranslation("menu");

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
                            <NavLink to="/courses">{t("menu.courses")}</NavLink>
                            <NavLink to="/features">
                                {t("menu.features")}
                            </NavLink>
                            <NavLink to="/staff">{t("menu.staff")}</NavLink>
                            <NavLink to="/about">{t("menu.about")}</NavLink>
                            {/* <NavLink to="/partners">
                                {t("menu.partners")}
                            </NavLink> */}
                        </div>
                    </nav>
                </div>
                <div>
                    <Flags />
                </div>
            </header>
        </div>
    );
};

export default Menu;
