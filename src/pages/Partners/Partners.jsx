import { useEffect } from "react";
import Partner from "../../components/Partner/Partner";
import { isOdd } from "../../utils/helpers";
import classes from "./Partners.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../../store/slices/partners/partnersApi";
import { selectPartnersList } from "../../store/slices/partners/partnersSlice";
import { useTranslation } from "react-i18next";

const Partners = () => {
const {t, i18n} = useTranslation("menu");

    const list = useSelector(selectPartnersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPartners());
    }, [dispatch]);

    return (
        <div className={`mt-40 mb-footer section ${classes.wrapper}`}>
            <div className={`container ${classes.partners}`}>
<<<<<<< HEAD
                <h1>{t(`partners.mainTitle`)}</h1>
                {/* երկրորդ Հ1 թեգն է */}
                <p>{t(`partners.offer`)}</p>
=======
                <h1>Մեր գործընկերները</h1>
                <p>
                    Դասընթացի ավարտին կստանաք հնարավորություն անցնել աշխատանքի
                    մեր գործընկեր կազմակերպություններում
                </p>
>>>>>>> 96e36e4de5a4328d4fe78cf0074463374c26524d
                <div className={classes.list}>
                    {list.map((partner, index) => (
                        <Partner
                            key={partner.id}
                            {...partner}
                            size={
                                [1, 2].includes(index) && isOdd(list.length)
                                    ? "big"
                                    : "default"
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
