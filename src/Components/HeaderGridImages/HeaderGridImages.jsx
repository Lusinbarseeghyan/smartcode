import React, { useRef } from "react";
import { motion } from "framer-motion";

import first from "../../assets/images/1.jpg";
import sec from "../../assets/images/2.jpg";
import third from "../../assets/images/3.jpg";
import fivth from "../../assets/images/4.jpg";
import sixth from "../../assets/images/5.jpg";

import bgVideo from "../../assets/videos/banner.mp4";

import classes from "./HeaderGridImages.module.css";
import useAnimations from "../../utils/Animations/useAnimations";
const HeaderGridImages = () => {
    const { rightAnimationVariant, opacityAnimationVariant } = useAnimations();

    const videoRef = useRef();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const startScalePosition = 30;
        const endScalePosition = 300;
        const stopPosition = 850;

        if (videoRef.current) {
            if (scrollPosition > startScalePosition) {
                let scale =
                    1.2 + (scrollPosition - startScalePosition) / (endScalePosition - startScalePosition);

                scale = scale > 3 ? 3 : scale;

                videoRef.current.style.transform = `translateY(${
                    scrollPosition > stopPosition ? stopPosition : scrollPosition
                }px) scale(${scale})`;

                if (videoRef.current.paused && videoRef.current.play) {
                    videoRef.current.play();
                }
            } else {
                videoRef.current.style.transform = "translateX(0%) translateY(0) scale(1)";

                if (!videoRef.current.paused && videoRef.current.pause) {
                    videoRef.current.pause();
                }
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <motion.div {...opacityAnimationVariant(1)}>
            <motion.div className={classes.list} {...rightAnimationVariant(1)}>
                <img className={classes.first_image} src={third} alt="smartcode" />
                <img className={classes.second_image} src={first} alt="smartcode" />
                <img className={classes.third_image} src={sec} alt="smartcode" />
                <div className={classes.forth_image}>
                    <video ref={videoRef} src={bgVideo} muted></video>
                </div>
                <img className={classes.fivth_image} src={fivth} alt="smartcode" />
                <img className={classes.sixth_image} src={sixth} alt="smartcode" />
            </motion.div>
        </motion.div>
    );
};

export default HeaderGridImages;
