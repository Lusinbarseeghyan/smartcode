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
    const { rightAnimationVariant } = useAnimations();

    const videoRef = useRef();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const startScalePosition = 30;
        const endScalePosition = 300;

        if (scrollPosition > startScalePosition) {
            let scale =
                1.2 +
                (scrollPosition - startScalePosition) /
                    (endScalePosition - startScalePosition);
            if (scale > 3) scale = 3;
            if (videoRef.current) {
                videoRef.current.style.transform = `translateY(${scrollPosition}px) scale(${scale})`;
                if (videoRef.current.paused) {
                    videoRef.current.play();
                }
            }
        } else {
            if (videoRef.current) {
                videoRef.current.style.transform =
                    " translateX(0%) translateY(0) scale(1)";
                if (!videoRef.current.paused) {
                    videoRef.current.pause();
                }
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <div>
            <motion.div
                className={classes.header_images}
                {...rightAnimationVariant(1)}
            >
                <img className={classes.first_image} src={third} alt="" />

                <img
                    className={classes.second_image}
                    src={first}
                    alt="smartcode"
                />

                <img
                    className={classes.third_image}
                    src={sec}
                    alt="smartcode"
                />
                <div className={classes.forth_image}>
                    <video ref={videoRef} src={bgVideo} muted></video>
                </div>
                <img
                    className={classes.fivth_image}
                    src={fivth}
                    alt="smartcode"
                />
                <img
                    className={classes.sixth_image}
                    src={sixth}
                    alt="smartcode"
                />
            </motion.div>
        </div>
    );
};

export default HeaderGridImages;
