import React from "react";

import first from "../../assets/images/1.jpg";
import sec from "../../assets/images/2.jpg";
import third from "../../assets/images/3.jpg";
import fivth from "../../assets/images/4.jpg";
import sixth from "../../assets/images/5.jpg";

import classes from "./HeaderGridImages.module.css";
const HeaderGridImages = () => {
    return (
        <div>
            <div className={classes.header_images}>
                <img className={classes.first_image} src={third} alt="" />

                <img
                    className={classes.second_image}
                    src={first}
                    alt="smartcode"
                />

                <img
                    className={classes.third_image}
                    src={sec}
                    alt="smartcode"
                />
                <div className={classes.forth_image}></div>
                <img
                    className={classes.fivth_image}
                    src={fivth}
                    alt="smartcode"
                />
                <img
                    className={classes.sixth_image}
                    src={sixth}
                    alt="smartcode"
                />
            </div>
        </div>
    );
};

export default HeaderGridImages;
