import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import classes from "./Menu.module.css";
const Menu = () => {
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navRef.current.classList.add(classes.scroll_nav);
                navRef.current.classList.remove(classes.scroll_nav_exit);
            } else {
                navRef.current.classList.remove(classes.scroll_nav);
                navRef.current.classList.add(classes.scroll_nav_exit);

            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={classes.header_cont} ref={navRef}>
            <header className={`container ${classes.header}`}>
                <nav className={classes.nav}>
                    <div className={classes.logo}>
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
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
        </div>
    );
};

export default Menu;
