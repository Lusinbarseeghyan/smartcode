import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        modal: null,
    },
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload;
        },
    },
});

export const selectIsLoading = (state) => state.app.isLoading;

export const { setIsLoading } = appSlice.actions;

export const appReducer = appSlice.reducer;
