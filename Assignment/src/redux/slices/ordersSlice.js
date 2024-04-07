/* eslint-disable import/no-unresolved */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import AuthService from "src/services/auth.service";
import OrdersService from "src/services/orders.service";

const handleAsyncThunk = async (asyncFunction, args, { rejectWithValue }) => {
    try {
        const response = await asyncFunction(...args);
        console.log(args);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
};


export const createOrder = createAsyncThunk(
    "orders/create",
    (data, thunkAPI) => handleAsyncThunk(OrdersService.create, [data], thunkAPI)
);
export const getAllOrders = createAsyncThunk(
    "orders/getAll",
    (userId, thunkAPI) => handleAsyncThunk(OrdersService.getAll, [userId], thunkAPI)
);
export const resetOrders = createAction("orders/reset")
const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        order: [],
        status: "idle",
        error: null,
        statusGet: "idle",
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
            .addCase(createOrder.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.order = payload;
            })
            .addCase(createOrder.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createOrder.rejected, (state, { payload }) => {
                state.status = "failed";
                state.error = payload;
            })
            .addCase(getAllOrders.fulfilled, (state, { payload }) => {
                state.statusGet = "success";
                state.orders = payload;
            })
            .addCase(getAllOrders.pending, (state) => {
                state.statusGet = "loading";
            })
            .addCase(getAllOrders.rejected, (state, { payload }) => {
                state.statusGet = "failed";
                state.error = payload;
            });
    },
});

export const { resetState: resetOrdersAction } = ordersSlice.actions;
export default ordersSlice.reducer;