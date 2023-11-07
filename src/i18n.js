import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HTTPApi)
    .init({
        supportedLngs:[`hy`, `ru`, `en`],
        fallbackLng: "hy",
        interpolation: {
            escapeValue: false,
        },
    });
export const chooseLanguage = (e) => {
    const languageValue = i18n.init.supportedLngs
    i18n.changeLanguage(languageValue);
    console.log(languageValue);
};
export default i18n;
