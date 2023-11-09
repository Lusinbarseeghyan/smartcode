import hy from "../../assets/images/flags/arm.svg";
import ru from "../../assets/images/flags/ru.svg";
import en from "../../assets/images/flags/gb (2).svg";

import classes from "./Flags.module.css";
import { FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
    changeLang,
    selectLang,
    setLang,
} from "../../store/slices/app/appSlice";

const Flags = () => {
    const flags = [hy, ru, en];
    const currentLang = useSelector(selectLang);
    const dispatch = useDispatch();

    return (
        <div className={classes.translate}>
            <div className={classes.lngBar}>
                <img
                    src={flags[currentLang]}
                    alt="lang"
                    onClick={() => dispatch(changeLang())}
                />
            </div>
            <div className={classes.globe}>
                <FaGlobe />
                
                <select onChange={(e) => dispatch(setLang(e.target.value))}>
                    <option value="hy">Հայ</option>
                    <option value="ru">Рус</option>
                    <option value="en">Eng</option>
                </select>
            </div>
            <div className={classes.burgerLang}>
                <select onChange={(e) => dispatch(setLang(e.target.value))}>
                    <option>hay</option>
                    <option>eng</option>
                    <option>rus</option>
                    {/* <option value="hy">Հայ</option>
                    <option value="ru">Рус</option>
                    <option value="en">Eng</option> */}
                </select>
            </div>
        </div>
    );
};

export default Flags;
