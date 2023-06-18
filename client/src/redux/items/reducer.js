import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addItemAsync, getItemsAsync } from './thunks';

const INITIAL_STATE = {
    list: [],
    getUsers: REQUEST_STATE.IDLE,
    addUser: REQUEST_STATE.IDLE,
    error: null
};

const itemsSlice = createSlice({
    name: 'items',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAsync.pending, (state) => {
                state.getUsers = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.getUsers = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getItemsAsync.rejected, (state, action) => {
                state.getUsers = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addItemAsync.pending, (state) => {
                state.addUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.addUser = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(addItemAsync.rejected, (state, action) => {
                state.addUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default itemsSlice.reducer;
