import React, { useEffect, useState } from "react";

import js from "../../assets/images/js.png";
import c_sharp from "../../assets/images/c#.png";

import node_js from "../../assets/images/node_js.png";
import windows from "../../assets/images/windows.png";
import laptop from "../../assets/images/laptop.png";
import { useTranslation } from "react-i18next";

import classes from "./Form.module.css";
import { random } from "../../utils/helpers";
const FormBox = () => {
    const [images, setImages] = useState([
        js,
        c_sharp,
        node_js,
        windows,
        laptop,
        js,
        c_sharp,
        node_js,
        windows,
        laptop,
        js,
        c_sharp,
        node_js,
        windows,
        laptop,
        js,
        c_sharp,
        node_js,
        windows,
        laptop,
        js,
        c_sharp,
        node_js,
        windows,
        laptop,
        js,
        c_sharp,
        node_js,
        windows,
        laptop,
    ]);

    useEffect(() => {
        setInterval(() => {
            setImages((images) => [...images]);
        }, 3000);
    }, []);

    return (
        <div className={classes.form_container}>
            <div className={classes.icons}>
                {images.map((item, index) => (
                    <img
                        src={item}
                        alt=""
                        className={`${classes.icon} ${classes["icon" + index]}`}
                        style={{
                            top: random(0, 100) + "%",
                            left: random(0, 100) + "%",
                        }}
                    />
                ))}
            </div>
            <h2>{t(`formBox.signin`)}</h2>
            <form>
                <input type="text" name="" placeholder={t(`formBox.name`)} />
                <input type="text" name="" placeholder={t(`formBox.eMail`)} />
                <input type="tel" name="" placeholder={t(`formBox.phone`)} />
                <button type="submit">{t(`formBox.begin`)}</button>
            </form>
        </div>
    );
};

export default FormBox;
