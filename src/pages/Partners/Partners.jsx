import Partner from "../../components/Partner/Partner";
import { isOdd } from "../../utils/helpers";
import classes from "./Partners.module.css";

const Partners = () => {
    const list = [
        {
            id: 1,
            title: "Web Foundation LLC",
            logo: "https://smartcode.am/public/image/partners/webfoundationllc.svg",
            website: "https://webfoundationllc.com/",
        },
        {
            id: 2,
            title: "Hi-Teck Gateway",
            logo: "https://smartcode.am/public/image/partners/hi-teck.png",
            website: "https://hitechgateway.com/about",
        },
        {
            id: 3,
            title: "Iguan Systems",
            logo: "https://smartcode.am/public/image/partners/Iguan.png",
            website: "https://iguansystems.com/",
        },
        {
            id: 4,
            title: "Evistep",
            logo: "https://smartcode.am/public/image/partners/evistep.png",
            website: "https://evistep.com/",
        },
        {
            id: 5,
            title: "Bee-Web",
            logo: "https://smartcode.am/public/image/partners/bee-web.png",
            website: "https://beewebsystems.com/",
        },
        {
            id: 6,
            title: "S2S",
            logo: "https://smartcode.am/public/image/partners/s2s.png",
            website: "https://www.s2s.am/",
        },
        {
            id: 7,
            title: "Unisoft",
            logo: "https://smartcode.am/public/image/partners/unisoft.png",
            website: "https://unisoft.am/",
        },
    ];

    return (
        <div className={classes.partners}>
            <h1>Մեր գործընկերները</h1>
            <p>
                Դասընթացի ավարտին կստանաք հնարավորություն անցնել աշխատանքի մեր գործընկեր
                կազմակերպություններում
            </p>
            <div className={classes.list}>
                {list.map((partner, index) => (
                    <Partner
                        key={partner.id}
                        {...partner}
                        size={[1, 2].includes(index) && isOdd(list.length) ? "big" : "default"}
                    />
                ))}
            </div>
        </div>
    );
};

export default Partners;
