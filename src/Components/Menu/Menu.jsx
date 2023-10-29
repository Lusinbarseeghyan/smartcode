import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

import classes from "./Menu.module.css";
const Menu = () => {
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            navRef.current.classList[window.scrollY ? "add" : "remove"](
                classes.scrolled
            );
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        navRef.current.scrollIntoView({ scrollBehavior: "smooth" });
    }, [navRef]);
    return (
        <div className={classes.wrapper} ref={navRef}>
            <header className={`container ${classes.header}`}>
                <nav className={classes.nav}>
                    <div className={classes.logo}>
                        <NavLink to="/">
                            <img src={logo} alt="SmartCode Logo" />
                        </NavLink>
                    </div>
                    <div className={classes.toggle_menu}>
                        <FaBars />
                    </div>
                    <div className={classes.nav_menu}>
                        <NavLink to="/courses">Դասընթացներ</NavLink>
                        <NavLink to="/features">Առավելություններ</NavLink>
                        <NavLink to="/staff">Թրեյներներ</NavLink>
                        <NavLink to="/about">Մեր մասին</NavLink>
                        <NavLink to="/partners">Գործընկերներ</NavLink>
                    </div>
                </nav>

                <div className={classes.links}>
                    <Link>
                        <BsInstagram />
                    </Link>
                    <Link>
                        <BsLinkedin />
                    </Link>
                </div>
            </header>
            <ScrollArrow />
        </div>
    );
};

export default Menu;
