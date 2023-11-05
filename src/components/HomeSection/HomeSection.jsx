import React from "react";
import { motion } from "framer-motion";

import trainers from "../../assets/videos/trainers.mp4";
import useAnimations from "../../utils/Animations/useAnimations";

import classes from "./HomeSection.module.css";
import Partners from "../Partners/Partners";

const HomeSection = () => {
    const { scaleAnimationVariant, topAnimationVariant } = useAnimations();
    return (
        <motion.section
            className={`container mb-footer ${classes.section_cont}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2 {...topAnimationVariant(1)}>Միացիր մեր թիմին</motion.h2>
            <div className={classes.section}>
                <div className={classes.section_text}>
                    <motion.p {...scaleAnimationVariant(2)}>
                        Մեզ մոտ կարող եք սովորել ծրագրավորման բոլոր լեզուները,
                        UX / UI Design: Մեզ մոտ անհատական մոտեցում է
                        ցուցաբերվում բոլոր ուսանողներին, որը Ձեզ կօգնի հասնել
                        Ձեր նպատակներին։
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

export default HomeSection;
