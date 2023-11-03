import React, { useRef } from "react";
import { motion } from "framer-motion";
import classes from "./AboutMain.module.css";
import PlayBtn from "../PlayBtn/PlayBtn";
import useAnimations from "../../utils/Animations/useAnimations";
const AboutMain = ({ title, firstP, secondP, video, image }) => {
    const videoRef = useRef(null);

    const { opacityAnimationVariant, blurAnimationVariant } = useAnimations();
    return (
        // <motion.header
        //     className={classes.headerWrapper}
        //     initial="hidden"
        //     whileInView="visible"
        //     viewport={{ once: true }}
        // >
        //     <div className={classes.header_text}>
        //         <motion.p {...leftAnimationVariant(1)}>
        //             SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 7 տարի
        //             է կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ,
        //             նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:
        //         </motion.p>
        //         <motion.p {...leftAnimationVariant(2)}>
        // Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և
        // կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված
        // ծրագրի, տնային առաջադրանքների և անվճար փորձաշրջանի
        // արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ:
        // Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք
        // մեր ուսանողների սերն ու վստահությունը: Համագործակցելով IT
        // ընկերությունների հետ՝ մենք Երաշխավորում ենք լավագույն
        // ուսանողների փորձաշրջանն ու աշխատանքը:
        //         </motion.p>
        //     </div>
        //     <motion.div
        //         className={classes.header_image}
        //         {...rightAnimationVariant(4)}
        //     >
        //         <img src="https://smartcode.am/public/image/per3.svg" alt="" />
        //     </motion.div>
        // </motion.header>

        <motion.main
            className={classes.main}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            {...opacityAnimationVariant(1)}
        >
            <div className={classes.main_left}>
                {image ? (
                    <img src={image} alt={image} />
                ) : (
                    <video src={video} ref={videoRef} autoPlay loop muted />
                )}
                <div className={classes.btn}>
                    {image ? null : <PlayBtn videoRef={videoRef} />}
                </div>
            </div>
            <div className={classes.main_right}>
                <motion.div
                    className={classes.about}
                    {...blurAnimationVariant(2)}
                >
                    <h2>{title}</h2>
                    <p>{firstP}</p>
                    {secondP ? <p>{secondP}</p> : null}
                </motion.div>
            </div>
        </motion.main>
    );
};

export default AboutMain;
