import React from "react";
import { motion } from "framer-motion";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
    MdOutlineDone,
    MdVideoChat,
    MdOutlineRocketLaunch,
    MdAssuredWorkload,
} from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { TbFreeRights } from "react-icons/tb";
import { BiSupport, BiSolidHourglassTop } from "react-icons/bi";

import classes from "./HomeSection.module.css";
const HomeSection = ({ textAnimation }) => {
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
            description:
                "Մեր հարմարավետ կահավորված լսարաններում Ձեր ուսման պրոցեսը կդառնա էլ ավելի հաճելի։",
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
            description:
                "Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝ տանը կրկնելու համար։",
        },
        {
            id: 6,
            icon: <BiSupport />,
            title: "Օնլայն օգնական",
            description:
                "Կուրսի ամբողջ ընթացքում դուք կստանաք հեռավար աջակցություն` մասնագետի կողմից:",
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
        <section>
            <motion.main
                className={classes.main}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
            >
                <h2>Ինչո՞ւ սովորել մեզ մոտ</h2>
                <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է`</p>
                <div className={classes.reasons}>
                    {reasons.map((reason) => {
                        return (
                            <motion.div
                                key={reason.id}
                                className={classes.reason}
                                variants={textAnimation}
                                custom={reason.id}
                            >
                                <div className={classes.reason_top}>
                                    <h2>{reason.icon}</h2>
                                </div>
                                <div className={classes.reason_bottom}>
                                    <div className={classes.reason_icon}>
                                        <h3>{reason.title}</h3>
                                    </div>
                                    <div className={classes.reason_description}>
                                        <p>{reason.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.main>
        </section>
    );
};

export default HomeSection;
