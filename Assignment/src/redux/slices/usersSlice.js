/* eslint-disable import/no-unresolved */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import UsersService from "src/services/users.service";

const handleAsyncThunk = async (asyncFunction, args, { rejectWithValue }) => {
    try {
        const response = await asyncFunction(...args);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
};


export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    (_, thunkAPI) => handleAsyncThunk(UsersService.getAll, [null], thunkAPI)
);
export const fetchMe = createAsyncThunk(
    "users/fetchMe",
    (_, thunkAPI) => handleAsyncThunk(UsersService.getMe, [null], thunkAPI)
);
export const updateUser = createAsyncThunk(
    "users/updateUser",
    ({userId, data}, thunkAPI) => handleAsyncThunk(UsersService.update, [userId, data], thunkAPI)
);
export const updatePassword = createAsyncThunk(
    "users/updatePassword",
    (data, thunkAPI) => handleAsyncThunk(UsersService.updatePassword, [data], thunkAPI)
);

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        status: "idle",
        statusMe: "idle",
        error: null,
        me: null,
        statusUpdate: "idle",
        statusPassword: "idle",
    },
    reducers: {
        resetState: (state) => {
            state.error = null;
            state.status = "idle";
            state.statusMe = "idle";
        },
        resetStateUpdate: (state) => {
            state.error = null;
            state.statusUpdate = "idle";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.users = payload.users;
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllUsers.rejected, (state, { payload }) => {
                state.status = "failed";
                state.error = payload;
            })
            .addCase(fetchMe.fulfilled, (state, { payload }) => {
                state.statusMe = "success";
                state.me = payload;
            })
            .addCase(fetchMe.pending, (state) => {
                state.statusMe = "loading";
            })
            .addCase(fetchMe.rejected, (state, { payload }) => {
                state.statusMe = "failed";
                state.error = payload;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.statusUpdate = "success";
                state.updateData = payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.statusUpdate = "loading";
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.statusUpdate = "failed";
                state.error = payload;
            })
            .addCase(updatePassword.fulfilled, (state, { payload }) => {
                state.statusPassword = "success";
                state.mess = payload;
            })
            .addCase(updatePassword.pending, (state) => {
                state.statusPassword = "loading";
            })
            .addCase(updatePassword.rejected, (state, { payload }) => {
                state.statusPassword = "failed";
                state.error = payload;
            })
            ;
    },
});

export const { resetState: resetStateAction } = usersSlice.actions;
export const { resetStateUpdate: resetStateUpdateAction } = usersSlice.actions;
export default usersSlice.reducer;