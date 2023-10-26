import React from "react";
import { motion } from "framer-motion";
import trainers from "../../assets/videos/trainers.mp4";
import classes from "./HomeSection.module.css";

const HomeSection = ({ topAnimation, leftAnimation, rightAnimation }) => {
    return (
        <motion.section
            className={`container ${classes.section_cont}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <motion.h2 variants={topAnimation} custom={1}>
                Միացիր մեր թիմին
            </motion.h2>
            <div className={classes.section}>
                <div className={classes.section_text}>
                    <motion.p variants={leftAnimation} custom={2}>
                        Մեզ մոտ կարող եք սովորել ծրագրավորման բոլոր լեզուները,
                        UX / UI Design: Մեզ մոտ անհատական մոտեցում է
                        ցուցաբերվում բոլոր ուսանողներին, որը Ձեզ կօգնի հասնել
                        Ձեր նպատակներին։
                    </motion.p>
                </div>
                <motion.div
                    className={classes.section_video_cont}
                    variants={rightAnimation}
                    custom={3}
                >
                    <video src={trainers} autoPlay loop muted />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HomeSection;
