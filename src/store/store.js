import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app/appSlice";
import { coursesReducer } from "./slices/courses/coursesSlice";
import { featuresReducer } from "./slices/features/featuresSlice";
import { partnersReducer } from "./slices/partners/partnersSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        courses: coursesReducer,
        features: featuresReducer,
        partners: partnersReducer,
    },
});
