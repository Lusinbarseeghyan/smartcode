import arm from "../../assets/images/flags/arm.png";
import rus from "../../assets/images/flags/russian.jpg";
import eng from "../../assets/images/flags/gb.png";

import classes from "./Flags.module.css";
import i18n from "../../i18n";

const Flags = () => {
   
   return (
       <div className={classes.lngBar}>
           <button className={classes.lngBtn}>
               <img
                   src={arm}
                   alt="arm"
                   onClick={() => i18n.changeLanguage("hy")}
               />
           </button>
           <button className={classes.lngBtn }>
               <img
                   src={rus}
                   alt="rus"
                   onClick={() => i18n.changeLanguage("ru")}
               />
           </button>
           <button className={classes.lngBtn}>
               <img
                   src={eng}
                   alt="eng"
                   onClick={() => i18n.changeLanguage("en")}
               />
           </button>
       </div>
   );
}

//     return (
//         <div className={classes.flags}>
//             <ul className={classes.lngBar}>
//                 <li>
//                     <FaGlobe />
//                 </li>
//                 <ul className={classes.chooseFlag}>
//                     <li>
//                         <button className={classes.lngBtn}>
//                             <option value="hy" onClick={chooseLanguage}>
//                                 Հայ
//                             </option>
//                             <img src={arm} alt="" />
//                         </button>
//                     </li>
//                     <li>
//                         <button className={classes.lngBtn}>
//                             <li value="ru" onClick={chooseLanguage}>
//                                 Рус
//                             </li>
//                             <img src={rus} alt="" />
//                         </button>
//                     </li>
//                     <li>
//                         <button className={classes.lngBtn}>
//                             <option value="en" onClick={chooseLanguage}>
//                                 Eng
//                             </option>
//                             <img src={eng} alt="" />
//                         </button>
//                     </li>
//                 </ul>
//             </ul>
//         </div>
//     );
// }
export default Flags;
