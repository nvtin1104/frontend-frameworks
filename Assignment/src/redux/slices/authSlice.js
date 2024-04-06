/* eslint-disable import/no-unresolved */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import AuthService from "src/services/auth.service";

const handleAsyncThunk = async (asyncFunction, args, { rejectWithValue }) => {
    try {
        const response = await asyncFunction(...args);
        console.log(args);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
};


export const login = createAsyncThunk(
    "auth/login",
    (data, thunkAPI) => handleAsyncThunk(AuthService.login, [data], thunkAPI)
);
export const resetAuth = createAction("auth/reset")
const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {
        resetState: (state) => {
            state.error = null;
            state.status = "idle";
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.user = payload;
            })
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.status = "failed";
                state.error = payload;
            });
    },
});

export const { resetState: resetAuthAction } = authSlice.actions;
export default authSlice.reducer;