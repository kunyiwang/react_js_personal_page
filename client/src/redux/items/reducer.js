import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {addItemAsync, getItemsAsync, deleteItemAsync, deleteItemsAsync, modifyDescriptionAsync} from './thunks';

const INITIAL_STATE = {
    list: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    deleteItem: REQUEST_STATE.IDLE,
    deleteItems: REQUEST_STATE.IDLE,
    modifyDescription: REQUEST_STATE.IDLE,
    error: null
};

const itemsSlice = createSlice({
    name: 'items',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAsync.pending, (state) => {
                state.getItems = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.getItems = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getItemsAsync.rejected, (state, action) => {
                state.getItems = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addItemAsync.pending, (state) => {
                state.addItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.addItem = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(addItemAsync.rejected, (state, action) => {
                state.addItem = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteItemAsync.pending, (state) => {
                state.deleteItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                state.deleteItem = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(deleteItemAsync.rejected, (state, action) => {
                state.deleteItem = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteItemsAsync.pending, (state) => {
                state.deleteItems = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteItemsAsync.fulfilled, (state, action) => {
                state.deleteItems = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(deleteItemsAsync.rejected, (state, action) => {
                state.deleteItems = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(modifyDescriptionAsync.pending, (state) => {
                state.modifyDescription = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(modifyDescriptionAsync.fulfilled, (state, action) => {
                state.modifyDescription = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(modifyDescriptionAsync.rejected, (state, action) => {
                state.modifyDescription = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default itemsSlice.reducer;
