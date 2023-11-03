import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchFeatures = createAsyncThunk("features/fetchFeatures", async () => {
    return (await JsonServerAPI.get("features")).data;
});
