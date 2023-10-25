import React from "react";

import classes from "./Form.module.css";
const FormBox = () => {
    return (
        <div className={classes.form_container}>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Գրանցվել</legend>
                <form>
                    <input type="text" name="" placeholder="Անուն Ազգանուն" />
                    <input type="text" name="" placeholder="Էլ․ փոստ" />
                    <input type="tel" name="" placeholder="Հեռախոսահամար" />
                    <button type="submit">Սկսել ուսումը</button>
                </form>
            </fieldset>
        </div>
    );
};

export default FormBox;
