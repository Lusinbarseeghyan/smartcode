import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchPartners = createAsyncThunk("partners/fetchPartners", async () => {
    return (await JsonServerAPI.get("partners")).data;
});
