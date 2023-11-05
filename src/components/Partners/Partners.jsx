// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPartnersList } from "../../store/slices/partners/partnersSlice";
// import { fetchPartners } from "../../store/slices/partners/partnersApi";

// import classes from "./Partners.module.css";
// import { Link } from "react-router-dom";

// const Partners = () => {
//     const list = useSelector(selectPartnersList);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchPartners());
//     }, [dispatch]);

//     return (
//         <div className={classes.partners}>
//             <div className={classes.partners_slide}>
//                 {list.map((partner) => {
//                     return (
//                         <div className={classes.partner}>
//                             <img src={partner.logo} alt="" />
//                             <div className={classes.partner_info}>
//                                 <h3>{partner.title}</h3>
//                                 <Link to={partner.website}>Տեսնել ավելին</Link>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Partners;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPartnersList } from "../../store/slices/partners/partnersSlice";
import { fetchPartners } from "../../store/slices/partners/partnersApi";

import classes from "./Partners.module.css";
import { Link } from "react-router-dom";

const Partners = () => {
    const list = useSelector(selectPartnersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPartners());
    }, [dispatch]);

    return (
        <div className={classes.partners}>
            <h3 className={classes.title}>Մեր գործընկերները</h3>
            <div className={classes.partners_slide}>
                {list.map((partner) => {
                    return (
                        <Link to={partner.website}>
                            <div className={classes.partner}>
                                <img
                                    src={partner.logo}
                                    alt={partner.title}
                                    title={partner.title}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className={classes.partners_slide}>
                {list.map((partner) => {
                    return (
                        <Link to={partner.website}>
                            <div className={classes.partner}>
                                <img
                                    src={partner.logo}
                                    alt={partner.title}
                                    title={partner.title}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Partners;
