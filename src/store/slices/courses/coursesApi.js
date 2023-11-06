import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
    return (await JsonServerAPI.get("courses?isDeleted=false")).data;
});

export const fetchCourseByName = createAsyncThunk("courses/fetchCourseByName", async (name) => {
    return (await JsonServerAPI.get(`courses?name=${name}`)).data[0];
});

export const fetchCourseById = createAsyncThunk("courses/fetchCourseById", async (id) => {
    return (await JsonServerAPI.get(`courses/${id}`)).data;
});

export const deleteCourse = createAsyncThunk("courses/deleteCourse", async (id, { rejectWithValue }) => {
    let course = (await JsonServerAPI.get(`courses/${id}`)).data;

    if (course) {
        course.isDeleted = true;

        await JsonServerAPI.put(`courses/${id}`, course);

        return id;
    }

    return rejectWithValue("Course not found.");
});
