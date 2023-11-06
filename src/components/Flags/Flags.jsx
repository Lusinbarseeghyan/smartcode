import arm from "../../assets/images/flags/arm.jpg";
import rus from "../../assets/images/flags/russian.jpg";
import eng from "../../assets/images/flags/gb.jpg";

import classes from "./Flags.module.css"
import { chooseLanguage } from "../../i18n";

const Flags =() =>{
    return (
        <div className={classes.flags}>
            <button>
                <option value="hy" onClick={chooseLanguage}>Հայ</option>
                <img src={arm} alt="" />
            </button>
            <button>
                <option value="ru" onClick={chooseLanguage}>Рус</option>
                <img src={rus
                } alt="" />
            </button>
            <button>
                <option value="en" onClick={chooseLanguage}>Eng</option>
                <img src={eng} alt="" />
            </button>
        </div>
    );
}
export default Flags;
