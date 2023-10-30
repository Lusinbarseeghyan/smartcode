import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineDone, MdVideoChat, MdOutlineRocketLaunch, MdAssuredWorkload } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { TbFreeRights } from "react-icons/tb";
import { BiSupport, BiSolidHourglassTop } from "react-icons/bi";
import useAnimations from "../../utils/Animations/useAnimations";
import { isOdd } from "../../utils/helpers";
import mainImage from "../../assets/images/header.svg";
import SmartCodeText from "../SmartCodeText/SmartCodeText";
import classes from "./HomeMain.module.css";

const HomeMain = () => {
    const mainRef = useRef(null);
    const imageRef = useRef(null);

    const { leftAnimationVariant, rightAnimationVariant, topAnimationVariant } = useAnimations();

    useEffect(() => {
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
    }, []);

    const reasons = [
        {
            id: 1,
            icon: <LiaChalkboardTeacherSolid />,
            title: "Փորձառու մասնագետներ",
            description:
                "Դասավանդում են փորձառու մասնագետներ, ովքեր կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:",
        },
        {
            id: 2,
            icon: <MdOutlineDone />,
            title: "Փոքր խմբեր անհատական մոտեցում",
            description:
                "Դասընթացները անցկացվում են՝ 6-8 ուսանողից կազմված խմբերից, ապահովելով անհատական մոտեցում յուրաքանչյուր ուսանողին:",
        },
        {
            id: 3,
            icon: <SiCoffeescript />,
            title: "Հարմարավետ կահավորված լսարաններ",
            description: "Մեր հարմարավետ կահավորված լսարաններում Ձեր ուսման պրոցեսը կդառնա էլ ավելի հաճելի։",
        },
        {
            id: 4,
            icon: <TbFreeRights />,
            title: "3 դասի անվճար մասնակցություն",
            description:
                "Բոլոր ուսանողներին կտրամադրվի 3 փարձնական անվճար դաս, որը Ձեզ հնարավորություն կտա փորձել Ձեր ուժերը և ծանոթանալ դասապրոցեսի ընթացքին։",
        },
        {
            id: 5,
            icon: <MdVideoChat />,
            title: "Դասի ձայնագրություն",
            description: "Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝ տանը կրկնելու համար։",
        },
        {
            id: 6,
            icon: <BiSupport />,
            title: "Օնլայն օգնական",
            description: "Կուրսի ամբողջ ընթացքում դուք կստանաք հեռավար աջակցություն` մասնագետի կողմից:",
        },
        {
            id: 7,
            icon: <BiSolidHourglassTop />,
            title: "Ապառիկ ուսուցում",
            description:
                "Շատ լավ հնարավորություն՝ սովորել ապառիկ պայմաններով և վճարել ուսման համար դասընթացի ավարտին՝ աշխատանքի անցնելուց հետո:",
        },
        {
            id: 8,
            icon: <MdOutlineRocketLaunch />,
            title: "Կարիերային աճ",
            description:
                "Բոլոր ուսանողները կստանան 1 ամսյա անվճար թրեյնինգ մեր HR մասնագետի կողմից` հաջողակ կարիերա ստեղծելու համար:",
        },
        {
            id: 9,
            icon: <MdAssuredWorkload />,
            title: "Աշխատանքի առաջարկ",
            description:
                "Դասընթացի ավարտին լավագույն արդյունք ցուցաբերած ուսանողներին կառաջարկվի աշխատանք գործընկեր կազմակերպություններում:",
        },
    ];

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
                        {reasons.map((reason, index) => {
                            const lastReason = index === reasons.length - 1;
                            return (
                                <motion.div
                                    key={reason.id}
                                    className={classNames(classes.reason, {
                                        [classes.span_column]: lastReason && isOdd(reasons.length),
                                    })}
                                    {...leftAnimationVariant(reason.id)}
                                >
                                    <div className={classes.reason_top}>
                                        <h2>{reason.icon}</h2>
                                    </div>
                                    <div className={classes.reason_bottom}>
                                        <div className={classes.reason_icon}>
                                            <h3>{reason.title}</h3>
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
