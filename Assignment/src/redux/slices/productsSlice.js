/* eslint-disable import/no-unresolved */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import ProductsSerice from "src/services/products.service";

const handleAsyncThunk = async (asyncFunction, args, { rejectWithValue }) => {
    try {
        const response = await asyncFunction(...args);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
};


export const login = createAsyncThunk(
    "products/getAll",
    (_, thunkAPI) => handleAsyncThunk(ProductsSerice.getAll, [null], thunkAPI)
);
export const resetProducts = createAction("products/reset")
const productsSlice = createSlice({
    name: "products",
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

export const { resetState: resetProductsAction } = productsSlice.actions;
export default productsSlice.reducer;