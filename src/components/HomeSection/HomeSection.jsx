import React from "react";
import { motion } from "framer-motion";

import trainers from "../../assets/videos/trainers.mp4";
import useAnimations from "../../utils/Animations/useAnimations";


import classes from "./HomeSection.module.css";
// <<<<<<< HEAD
import { useTranslation } from "react-i18next";
import Partners from "../Partners/Partners";


const HomeSection = () => {
const {t, i18n} = useTranslation("menu");

    const { leftAnimationVariant, topAnimationVariant } = useAnimations();


const HomeSection = () => {
    const { scaleAnimationVariant, topAnimationVariant } = useAnimations();
// >>>>>>> 96e36e4de5a4328d4fe78cf0074463374c26524d
    return (
        <motion.section
            className={`container mb-footer ${classes.section_cont}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2 {...topAnimationVariant(1)}>
                {t(`homeSection.title`)}
            </motion.h2>
            <div className={classes.section}>
                <div className={classes.section_text}>
{/* <<<<<<< HEAD */}
                    <motion.p {...leftAnimationVariant(2)}>
                        {t(`homeSection.body`)}
                        </motion.p>
=======
                    <motion.p {...scaleAnimationVariant(2)}>
                        Մեզ մոտ կարող եք սովորել ծրագրավորման բոլոր լեզուները,
                        UX / UI Design: Մեզ մոտ անհատական մոտեցում է
                        ցուցաբերվում բոլոր ուսանողներին, որը Ձեզ կօգնի հասնել
                        Ձեր նպատակներին։
{/* >>>>>>> 96e36e4de5a4328d4fe78cf0074463374c26524d */}
                    </motion.p>
                </div>
                <motion.div
                    className={classes.section_video_cont}
                    {...scaleAnimationVariant(3)}
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

            <Partners />
        </motion.section>
    );
};
}

export default HomeSection;
