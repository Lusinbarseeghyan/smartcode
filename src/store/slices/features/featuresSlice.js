import { createSlice } from "@reduxjs/toolkit";
import { fetchFeatures } from "./featuresApi";

const featuresSlice = createSlice({
    name: "features",
    initialState: {
        list: [],
    },
    reducers: {
        setFeatures(state, { payload }) {
            state.list = payload;
        },
    },
    extraReducers: {
        [fetchFeatures.fulfilled]: (state, { payload }) => {
            state.list = payload;
        },
        [fetchFeatures.rejected]: (_, action) => {
            console.error(action);
        },
    },
});

export const selectFeaturesList = (state) => state.features.list;

export const { setFeatures } = featuresSlice.actions;

export const featuresReducer = featuresSlice.reducer;
