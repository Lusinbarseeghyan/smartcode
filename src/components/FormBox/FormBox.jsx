import React from "react";

import classes from "./Form.module.css";
import { useTranslation } from "react-i18next";
const FormBox = () => {

    const {t, i18n}= useTranslation("menu");
    return (
        <div className={classes.form_container}>
            <h2>{t(`formBox.signin`)}</h2>
            <form>
                <input type="text" name="" placeholder="Անուն Ազգանուն" />
                <input type="text" name="" placeholder="Էլ․ փոստ" />
                <input type="tel" name="" placeholder="Հեռախոսահամար" />
                <button type="submit">{t(`formBox.begin`)}</button>
            </form>
        </div>
    );
};

export default FormBox;
