import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
    return (await JsonServerAPI.get("courses")).data;
});

export const fetchCourse = createAsyncThunk("courses/fetchCourse", async (name) => {
    return (await JsonServerAPI.get(`courses?name=${name}`)).data[0];
});
