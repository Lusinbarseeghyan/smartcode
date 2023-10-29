import React from "react";
import { motion } from "framer-motion";

import useAnimations from "../../utils/Animations/useAnimations";

import HeaderGridImages from "../HeaderGridImages/HeaderGridImages";
import FormBox from "../../components/FormBox/FormBox";

import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
    const { leftAnimationVariant, opacityAnimationVariant } = useAnimations();

    return (
        <div className={classes.header_container}>
            <motion.header
                className={` container ${classes.header}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className={classes.header_content}>
                    <div className={classes.text}>
                        <motion.h1 {...leftAnimationVariant(1)}>
                            SmartCode
                        </motion.h1>
                        <motion.p
                            className={classes.header_intro}
                            {...leftAnimationVariant(2)}
                        >
                            <span>Սովորի՛ր</span> ծրագրավորում <br />
                            <span>Դարձի՛ր</span> պահանջված մասնագետ
                        </motion.p>

                        <motion.p
                            className={classes.header_tagline}
                            {...leftAnimationVariant(3)}
                        >
                            Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված
                            աշխատանք։
                        </motion.p>
                    </div>

                    <motion.div
                        className={classes.grid_images_container}
                        {...opacityAnimationVariant(1)}
                    >
                        <HeaderGridImages />
                    </motion.div>
                </motion.div>
            </motion.header>
            <div className={` ${classes.form_container}`}>
                <div className={`container ${classes.form_box}`}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        {...leftAnimationVariant(2)}
                        className={classes.form}
                    >
                        <FormBox />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
