import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEMS,
    async () => {
        return await ItemService.getItems();
    }
);

export const addItemAsync = createAsyncThunk(
    actionTypes.ADD_ITEM,
    async (item) => {
        return await ItemService.addItem( item );
    }
);

export const deleteItemAsync = createAsyncThunk(
    actionTypes.DELETE_ITEM,
    async (item) => {
        return await ItemService.deleteItem( item );
    }
);

// delete all items
export const deleteItemsAsync = createAsyncThunk(
    actionTypes.DELETE_ITEMS,
    async () => {
        return await ItemService.deleteItems();
    }
);
