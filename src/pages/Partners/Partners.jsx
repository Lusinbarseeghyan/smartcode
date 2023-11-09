import { useEffect } from "react";
import Partner from "../../components/Partner/Partner";
import { isOdd } from "../../utils/helpers";
import classes from "./Partners.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../../store/slices/partners/partnersApi";
import { selectPartnersList } from "../../store/slices/partners/partnersSlice";
import { useTranslation } from "react-i18next";

const Partners = () => {
    const { t } = useTranslation("menu");

    const list = useSelector(selectPartnersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPartners());
    }, [dispatch]);

    return (
        <div className={`mt-40 mb-footer section ${classes.wrapper}`}>
            <div className={`container ${classes.partners}`}>
                <h1>{t(`partners.mainTitle`)}</h1>
                <p>{t(`partners.offer`)}</p>
                <div className={classes.list}>
                    {list.map((partner, index) => (
                        <Partner
                            key={partner.id}
                            {...partner}
                            size={
<<<<<<< HEAD
                                [1, 2].includes(index) && isOdd(list.length)
=======
                                isOdd(list.length)
                                    ? [1, 2].includes(index)
                                        ? "big"
                                        : "default"
                                    : index === list.length - 1
>>>>>>> 128fc2e95e30f26a1ac8260efb4ea0cc9c7350e8
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
