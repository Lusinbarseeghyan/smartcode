import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAnimations from "../../utils/Animations/useAnimations";
import HeaderGridImages from "../HeaderGridImages/HeaderGridImages";
import FormBox from "../../components/FormBox/FormBox";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
    const { leftAnimationVariant, rightAnimationVariant } = useAnimations();
    const videoStopRef = useRef();
    const videoSectionRef = useRef();

    return (
        <div className={classes.wrapper}>
            <motion.header
                className={`container section ${classes.header}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                ref={videoSectionRef}
            >
                <motion.div className={classes.content}>
                    <div className={classes.text}>
                        <div className={classes.title}>
                            <h1 {...leftAnimationVariant(1)}>
                                Smart<span>Code</span>
                            </h1>
                        </div>

                        <motion.p {...leftAnimationVariant(2)}>
                            <span>Սովորի՛ր</span> ծրագրավորում <br />
                            <span>Դարձի՛ր</span> պահանջված մասնագետ
                        </motion.p>

                        <motion.p {...leftAnimationVariant(3)}>
                            Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։
                        </motion.p>
                    </div>
                    <HeaderGridImages videoSectionRef={videoSectionRef} videoStopRef={videoStopRef} />
                </motion.div>
            </motion.header>
            <div className={`section ${classes.form}`}>
                <div className={`container ${classes.formWrapper}`}>
                    <motion.div
                        className={classes.form_container}
                        initial="hidden"
                        whileInView="visible"
                        {...leftAnimationVariant(2)}
                    >
                        <div className={classes.form_box}>
                            <FormBox />
                        </div>
                        <img src="https://smartcode.am/public/image/per4.svg" alt="header" />
                    </motion.div>
                    <motion.div
                        className={classes.contacts}
                        initial="hidden"
                        whileInView="visible"
                        {...rightAnimationVariant(3)}
                    >
                        <Link to={`https://www.instagram.com/smartcode.am/?ysclid=lohadj8leo782877109`}>
                            <AiOutlineInstagram />
                        </Link>
                        <Link to={`https://www.facebook.com/SmartCode.am/`}>
                            <BiLogoFacebook />
                        </Link>
                        <Link to={`https://am.linkedin.com/company/smartcode-development-school`}>
                            <BiLogoLinkedin />
                        </Link>
                    </motion.div>
                    <div ref={videoStopRef} className={classes.videoStop}></div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
