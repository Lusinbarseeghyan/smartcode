import { createSlice } from "@reduxjs/toolkit";
import { fetchPartners } from "./partnersApi";

const partnersSlice = createSlice({
    name: "partners",
    initialState: {
        list: [],
    },
    reducers: {
        setPartners(state, { payload }) {
            state.list = payload;
        },
    },
    extraReducers: {
        [fetchPartners.fulfilled]: (state, { payload }) => {
            state.list = payload;
        },
        [fetchPartners.rejected]: (_, action) => {
            console.error(action);
        },
    },
});

export const selectPartnersList = (state) => state.partners.list;

export const { setPartners } = partnersSlice.actions;

export const partnersReducer = partnersSlice.reducer;
