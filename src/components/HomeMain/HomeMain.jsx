import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import useAnimations from "../../utils/Animations/useAnimations";
import { isOdd } from "../../utils/helpers";
import mainImage from "../../assets/images/header.svg";
import SmartCodeText from "../SmartCodeText/SmartCodeText";
import classes from "./HomeMain.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFeaturesList } from "../../store/slices/features/featuresSlice";
import { fetchFeatures } from "../../store/slices/features/featuresApi";
import SVG from "react-inlinesvg";

const HomeMain = () => {
    const list = useSelector(selectFeaturesList);
    const dispatch = useDispatch();
    const mainRef = useRef(null);
    const imageRef = useRef(null);

    const { leftAnimationVariant, rightAnimationVariant, topAnimationVariant } = useAnimations();

    useEffect(() => {
        dispatch(fetchFeatures());

        const handleScroll = () => {
            const sectionRect = mainRef.current.getBoundingClientRect();

            if (sectionRect.top < 800 && sectionRect.bottom > window.innerHeight - 500) {
                imageRef.current.classList.remove(classes.absolute);
                imageRef.current.classList.add(classes.fixed);
            } else {
                imageRef.current.classList.remove(classes.fixed);
                imageRef.current.classList.add(classes.absolute);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch]);

    return (
        <main ref={mainRef} className={`container ${classes.wrapper}`}>
            <div className={classes.smart_code_parallax}>
                <SmartCodeText baseVelocity={-5}>Smart Code Smart Code</SmartCodeText>
                <SmartCodeText baseVelocity={5}>Learn With Us</SmartCodeText>
            </div>
            <motion.main
                className={classes.main}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2 {...topAnimationVariant(1)}>Ինչո՞ւ սովորել մեզ մոտ</motion.h2>
                <motion.p {...topAnimationVariant(2)}>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է`</motion.p>
                <div className={classes.content}>
                    <div className={classes.reasons}>
                        {list.map((feature, index) => {
                            const lastReason = index === list.length - 1;
                            return (
                                <motion.div
                                    key={feature.id}
                                    className={classNames(classes.reason, {
                                        [classes.span_column]: lastReason && isOdd(list.length),
                                    })}
                                    {...leftAnimationVariant(feature.id)}
                                >
                                    <div className={classes.reason_top}>
                                        <h2>
                                            <SVG
                                                src={`/images/features/${feature.icon}`}
                                                title={feature.title}
                                            />
                                        </h2>
                                    </div>
                                    <div className={classes.reason_bottom}>
                                        <div className={classes.reason_icon}>
                                            <h3>{feature.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <motion.div
                        className={classes.main_image}
                        ref={imageRef}
                        {...rightAnimationVariant(2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <img src={mainImage} alt="SmartCode" />
                    </motion.div>
                </div>
            </motion.main>
        </main>
    );
};

export default HomeMain;
