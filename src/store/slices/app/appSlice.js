import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        modal: {
            isShow: false,
            title: null,
            body: null,
            actionBtn: {
                text: null,
                callback: null,
                color: null,
            },
        },
    },
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload;
        },
        showModal(
            state,
            { payload: { title, body, actionBtnText, actionBtnCallback, actionBtnType = "default" } }
        ) {
            state.modal = {
                isShow: true,
                title,
                body,
                actionBtn: {
                    text: actionBtnText,
                    callback: actionBtnCallback,
                    type: actionBtnType,
                },
            };
        },
        hideModal(state) {
            state.modal = {
                isShow: false,
                title: null,
                body: null,
            };
        },
    },
});

export const selectIsLoading = (state) => state.app.isLoading;
export const selectModal = (state) => state.app.modal;
export const selectModalStatus = (state) => state.app.modal.isShow;

export const { setIsLoading, showModal, hideModal } = appSlice.actions;

export const appReducer = appSlice.reducer;
