import React from "react";
import { motion } from "framer-motion";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

import logo from "../../assets/images/logo.svg";
import {
    BsFillEnvelopePaperHeartFill,
    BsFillTelephoneFill,
} from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
    const opacityAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    return (
        <motion.div
            className={`mt-20 ${classes.footer_container}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <footer className={`container ${classes.footer}`}>
                <div className={classes.logo_container}>
                    <motion.img
                        src={logo}
                        alt="logo"
                        variants={opacityAnimation}
                        custom={1}
                    />
                    <motion.p variants={opacityAnimation} custom={2}>
                        Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված
                        աշխատանք
                    </motion.p>

                    <motion.div
                        className={classes.links}
                        variants={opacityAnimation}
                        custom={7}
                    >
                        <Link>
                            <BsInstagram />
                        </Link>
                        <Link>
                            <BsLinkedin />
                        </Link>
                    </motion.div>
                </div>
                <div className={classes.about_container}>
                    <motion.h3 variants={opacityAnimation} custom={3}>
                        Կապ մեզ հետ
                    </motion.h3>
                    <motion.div
                        className={classes.about_phone}
                        variants={opacityAnimation}
                        custom={4}
                    >
                        <BsFillTelephoneFill />
                        <ul>
                            <li>+374 41 435344</li>
                            <li>+374 95 435341</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className={classes.about_email}
                        variants={opacityAnimation}
                        custom={5}
                    >
                        <BsFillEnvelopePaperHeartFill />
                        <ul>
                            <li>support@smartcode.am</li>
                            <li>hr@smartcode.am</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className={classes.about_location}
                        variants={opacityAnimation}
                        custom={6}
                    >
                        <ImLocation2 />
                        <ul>
                            <li>Հանրապետության 22</li>
                            <li>Երվանդ Քոչար 28/2</li>
                        </ul>
                    </motion.div>
                </div>
                <div className={classes.links}>
                    <Link>
                        <BsInstagram />
                    </Link>
                    <Link>
                        <BsLinkedin />
                    </Link>
                </div>
            </footer>
        </motion.div>
    );
};

export default Footer;
