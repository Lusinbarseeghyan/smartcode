import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../i18n";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        modal: null,
        supportedLanguages: [`hy`, `ru`, `en`],
        lang: 0,
    },
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload;
        },
        changeLang(state) {
            state.lang =
                state.lang + 1 > state.supportedLanguages.length - 1
                    ? 0
                    : state.lang + 1;
            i18n.changeLanguage(state.supportedLanguages[state.lang]);
        },
        setLang(state, { payload }) {
            state.lang = state.supportedLanguages.indexOf(payload);
            i18n.changeLanguage(payload);
        },
    },
});

export const selectIsLoading = (state) => state.app.isLoading;
export const selectLang = (state) => state.app.lang;

export const { setIsLoading, changeLang, setLang } = appSlice.actions;

export const appReducer = appSlice.reducer;
