import { useEffect } from "react";
import Partner from "../../components/Partner/Partner";
import { isOdd } from "../../utils/helpers";
import classes from "./Partners.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../../store/slices/partners/partnersApi";
import { selectPartnersList } from "../../store/slices/partners/partnersSlice";

const Partners = () => {
    const list = useSelector(selectPartnersList);
    const disptach = useDispatch();

    useEffect(() => {
        disptach(fetchPartners());
    }, [disptach]);

    return (
        <div className={`mt-40 mb-footer section ${classes.wrapper}`}>
            <div className={`container ${classes.partners}`}>
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
        </div>
    );
};

export default Partners;
