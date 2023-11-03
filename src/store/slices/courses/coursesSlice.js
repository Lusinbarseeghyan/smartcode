import { createSlice } from "@reduxjs/toolkit";
import { fetchCourse, fetchCourses } from "./coursesApi";

const coursesSlice = createSlice({
    name: "courses",
    initialState: {
        list: [],
        selected: null,
    },
    reducers: {
        setCoursesList(state, { payload }) {
            state.list = payload;
        },
        setSelectedCourse(state, { payload }) {
            state.selected = payload;
        },
    },
    extraReducers: {
        [fetchCourses.fulfilled]: (state, { payload }) => {
            state.list = payload;
        },
        [fetchCourses.rejected]: (_, action) => {
            console.error(action);
        },
        [fetchCourse.fulfilled]: (state, { payload }) => {
            state.selected = payload;
        },
        [fetchCourse.rejected]: (_, action) => {
            console.error(action);
        },
    },
});

export const selectCoursesList = (state) => state.courses.list;
export const selectCourse = (state) => state.courses.selected;

export const { setCoursesList, setSelectedCourse } = coursesSlice.actions;

export const coursesReducer = coursesSlice.reducer;
