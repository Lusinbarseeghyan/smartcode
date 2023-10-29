import React, { useRef } from "react";
import { motion } from "framer-motion";

import bgVideo from "../../assets/videos/banner.mp4";
import useAnimations from "../../utils/Animations/useAnimations";

import HeaderGridImages from "../HeaderGridImages/HeaderGridImages";
import FormBox from "../../components/FormBox/FormBox";

import classes from "./HomeHeader.module.css";
const HomeHeader = () => {
    const formRef = useRef();
    const videoRef = useRef();

    const { leftAnimationVariant, opacityAnimationVariant } = useAnimations();

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
                videoRef.current.play();
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();

                videoRef.current.style.transform =
                    " translateX(0%) translateY(0) scale(1)";
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

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

                    <motion.div
                        className={classes.bg_video}
                        {...leftAnimationVariant(1)}
                    >
                        <video ref={videoRef} src={bgVideo} muted></video>
                    </motion.div>
                </motion.div>
            </motion.header>
            <div className={` ${classes.form_container}`}>
                <div className={`container ${classes.form_box}`}>
                    <motion.div
                        ref={formRef}
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
