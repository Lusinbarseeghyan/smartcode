import { useEffect, useState } from "react";
<<<<<<< HEAD
import {  NavLink } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
import { FaBars } from "react-icons/fa";
import { ReactComponent as SmartCodeLogo } from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";

import Flags from "../Flags/Flags";
import classes from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectAuthUser } from "../../store/slices/auth/authSlice";

<<<<<<< HEAD
const Menu = ({darkmode}) => {
=======
const Menu = () => {
    const authUser = useSelector(selectAuthUser);
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
    const [darkMode, setDarkMode] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () =>
            window.scrollY ? setDarkMode(true) : setDarkMode(false);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

<<<<<<< HEAD
    const { t } = useTranslation("menu");
=======
    const logout = () => {
        dispatch(logoutUser());
    };
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8

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
<<<<<<< HEAD
                <div className={classes.globe}>
                    <Flags />
=======
                <div className={classes.socials}>
                    {!authUser ? (
                        <NavLink to={"/login"}>Login</NavLink>
                    ) : (
                        <>
                            {authUser.type === "admin" ? (
                                <NavLink to={"/dashboard"}>Dashboard</NavLink>
                            ) : (
                                <NavLink to={"/profile"}>Profile</NavLink>
                            )}
                            <NavLink onClick={logout}>Logout</NavLink>
                        </>
                    )}
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
                </div>
            </header>
        </div>
    );
};

export default Menu;
