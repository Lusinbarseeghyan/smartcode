import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { isOdd } from "../../utils/helpers";
import useAnimations from "../../utils/Animations/useAnimations";
<<<<<<< HEAD
// import SmartCodeText from "../SmartCodeText/SmartCodeText";
import FormBox from "../FormBox/FormBox";

=======
import FormBox from "../FormBox/FormBox";
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
import { useDispatch, useSelector } from "react-redux";
import { selectFeaturesList } from "../../store/slices/features/featuresSlice";
import { fetchFeatures } from "../../store/slices/features/featuresApi";
import SVG from "react-inlinesvg";
import classes from "./HomeMain.module.css";
<<<<<<< HEAD
import useTranslation from "../../utils/hooks/useTranslation";
// import { useTranslation } from "react-i18next";
=======
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8

const HomeMain = () => {
    const t = useTranslation(["menu", "features"]);

    const list = useSelector(selectFeaturesList);
    const dispatch = useDispatch();

    const mainRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        dispatch(fetchFeatures());
    }, [dispatch]);

<<<<<<< HEAD
    const { scaleAnimationVariant, topAnimationVariant } = useAnimations();
=======
    const { leftAnimationVariant, rightAnimationVariant, topAnimationVariant } = useAnimations();
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8

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
            {/* <div className={classes.smart_code_parallax}>
                <SmartCodeText baseVelocity={-5}>
                    Smart Code Smart Code
                </SmartCodeText>
                <SmartCodeText baseVelocity={5}>Learn With Us</SmartCodeText>
            </div> */}
            <motion.main
                className={classes.main}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
<<<<<<< HEAD
                <motion.h2 {...topAnimationVariant(1)}>
                    {t(`HomeMain.why`)}
                </motion.h2>
                <motion.p {...topAnimationVariant(2)}>
                    {t(`HomeMain.becouse`)}
                </motion.p>
=======
                <motion.h2 {...topAnimationVariant(1)}>Ինչո՞ւ սովորել մեզ մոտ</motion.h2>
                <motion.p {...topAnimationVariant(2)}>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է`</motion.p>
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
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
                                    {...scaleAnimationVariant(feature.id)}
                                >
                                    <div className={classes.reason_top}>
                                        <h2>
                                            <SVG
<<<<<<< HEAD
                                                src={`/images/features/${feature.icon}`}
                                                title={t(
                                                    feature.title,
                                                    "features"
                                                )}
=======
                                                src={
                                                    feature.icon.startsWith("http")
                                                        ? feature.icon
                                                        : `/images/features/${feature.icon}`
                                                }
                                                title={feature.title}
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
                                            />
                                        </h2>
                                    </div>
                                    <div className={classes.reason_bottom}>
                                        <div className={classes.reason_title}>
                                            <h3>
                                                {t(feature.title, "features")}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <motion.div
                        className={classes.main_image}
                        ref={imageRef}
                        {...scaleAnimationVariant(2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <FormBox />
                    </motion.div>
                </div>
            </motion.main>
        </main>
    );
};

export default HomeMain;
