import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import classes from "./Features.module.css";
import {
    MdAssuredWorkload,
    MdOutlineDone,
    MdOutlineRocketLaunch,
    MdVideoChat,
} from "react-icons/md";
import { BiSolidHourglassTop, BiSupport } from "react-icons/bi";
import { TbFreeRights } from "react-icons/tb";
import { SiCoffeescript } from "react-icons/si";
import { useRef, useState } from "react";
import Minimap from "../../components/Minimap/Minimap";
import classNames from "classnames";

const Features = ({ theme = "dark" }) => {
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

    const [current, setCurrent] = useState(0);
    const listRef = useRef();
    const currentRef = useRef();

    if (listRef.current && currentRef.current) {
        listRef.current.scrollTo({
            top: currentRef.current.offsetHeight * current,
            behavior: "smooth",
        });
    }

    const detectScroll = (e) => {
        let deltaY = e.deltaY;
        if (deltaY < 0) {
            setCurrent((current) => (current - 1 < 0 ? current : current - 1));
        } else if (deltaY > 0) {
            setCurrent((current) =>
                current + 1 > reasons.length - 1 ? current : current + 1
            );
        }
    };

    return (
        <div
            className={classNames(classes.features, {
                [classes[theme]]: ["dark", "light"].includes(theme),
            })}
        >
            <div className={`container ${classes.wrapper} `}>
                <div
                    ref={listRef}
                    className={classes.list}
                    onWheel={detectScroll}
                >
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.id}
                            className={classes.section}
                            ref={current === index ? currentRef : null}
                        >
                            <div className={classes.line}>
                                <div className={classes.iconWrapper}>
                                    {reason.icon}
                                </div>
                            </div>
                            <div className={classes.content}>
                                <h1>{reason.title}</h1>
                                <p>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Minimap
                    reasons={reasons}
                    current={current}
                    setCurrent={setCurrent}
                    theme={theme}
                />
            </div>
        </div>
    );
};

export default Features;
