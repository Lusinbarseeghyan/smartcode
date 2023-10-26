import React from "react";
import { motion } from "framer-motion";

import bgVideo from "../../assets/videos/banner.mp4";
import FormBox from "../../components/FormBox/FormBox";

import classes from "./HomeHeader.module.css";
const HomeHeader = ({ leftAnimation, rightAnimation }) => {
    return (
        <motion.header
            className={classes.home_header}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <div className={classes.home_bg}>
                <video src={bgVideo} autoPlay muted loop></video>
            </div>
            <div className={`container ${classes.header_content}`}>
                <div className={classes.header_text}>
                    <motion.h1
                        variants={leftAnimation}
                        custom={1}
                        className={classes.header_title}
                    >
                        Smart Code
                    </motion.h1>
                    <motion.p
                        variants={leftAnimation}
                        custom={2}
                        className={classes.header_intro}
                    >
                        <span>Սովորի՛ր</span> ծրագրավորում <br />
                        <span>Դարձի՛ր</span> պահանջված մասնագետ
                    </motion.p>
                    <motion.p
                        variants={leftAnimation}
                        custom={3}
                        className={classes.header_intro}
                    >
                        Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված
                        աշխատանք։
                    </motion.p>
                </div>
                <motion.div
                    className={classes.header_form}
                    variants={rightAnimation}
                    custom={4}
                >
                    <FormBox />
                </motion.div>
            </div>
        </motion.header>
    );
};

export default HomeHeader;
