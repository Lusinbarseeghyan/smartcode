import React from "react";
import { motion } from "framer-motion";

import trainers from "../../assets/videos/trainers.mp4";
import useAnimations from "../../utils/Animations/useAnimations";

import classes from "./HomeSection.module.css";
import { useTranslation } from "react-i18next";

const HomeSection = () => {
const {t, i18n} = useTranslation("menu");

    const { leftAnimationVariant, topAnimationVariant } = useAnimations();
    return (
        <motion.section
            className={`container mb-footer ${classes.section_cont}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <motion.h2 {...topAnimationVariant(1)}>
                {t(`homeSection.title`)}
            </motion.h2>
            <div className={classes.section}>
                <div className={classes.section_text}>
                    <motion.p {...leftAnimationVariant(2)}>
                        {t(`homeSection.body`)}
                    </motion.p>
                </div>
                <motion.div
                    className={classes.section_video_cont}
                    {...topAnimationVariant(4)}
                >
                    <video
                        disablePictureInPicture
                        src={trainers}
                        autoPlay
                        loop
                        muted
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HomeSection;
