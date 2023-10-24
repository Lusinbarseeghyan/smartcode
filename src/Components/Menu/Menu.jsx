import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import classes from "./Menu.module.css";
const Menu = () => {
    return (
        <div className={classes.header_cont}>
            <header className={`container ${classes.header}`}>
                <nav className={classes.nav}>
                    <div className={classes.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className={classes.nav_menu}>
                            <NavLink>
                                <li>1</li>
                            </NavLink>
                            <NavLink>
                                <li>2</li>
                            </NavLink>
                            <NavLink>
                                <li>3</li>
                            </NavLink>
                            <NavLink>
                                <li>4</li>
                            </NavLink>
                            <NavLink>
                                <li>5</li>
                            </NavLink>
                            <NavLink>
                                <li>6</li>
                            </NavLink>
                        </ul>
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
