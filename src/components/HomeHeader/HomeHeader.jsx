import React, { useRef } from "react";
import { motion } from "framer-motion";
import useAnimations from "../../utils/Animations/useAnimations";
import HeaderGridImages from "../HeaderGridImages/HeaderGridImages";
import FormBox from "../../components/FormBox/FormBox";
import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
    const { leftAnimationVariant } = useAnimations();
    const videoStopRef = useRef();
    const videoSectionRef = useRef();

    return (
        <div className={classes.wrapper}>
            <motion.header
                className={`container ${classes.section} ${classes.header}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                ref={videoSectionRef}
            >
                <motion.div className={classes.content}>
                    <div className={classes.text}>
                        <motion.h1 {...leftAnimationVariant(1)}>SmartCode</motion.h1>
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
            <div className={`${classes.section} ${classes.form}`}>
                <div className={`container ${classes.formWrapper}`}>
                    <motion.div initial="hidden" whileInView="visible" {...leftAnimationVariant(2)}>
                        <FormBox />
                    </motion.div>
                    <div ref={videoStopRef} className={classes.videoStop}></div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
