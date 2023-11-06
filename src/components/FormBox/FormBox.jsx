import React from "react";

import classes from "./Form.module.css";
import { useTranslation } from "react-i18next";
const FormBox = () => {

    const {t}= useTranslation("menu");
    return (
        <div className={classes.form_container}>
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
