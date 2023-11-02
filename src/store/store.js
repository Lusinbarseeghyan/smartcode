import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app/appSlice";
import { coursesReducer } from "./slices/courses/coursesSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        courses: coursesReducer,
    },
});
