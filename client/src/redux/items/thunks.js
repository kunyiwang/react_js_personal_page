import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEMS,
    async () => {
        return await ItemService.getUsers();
    }
);

export const addItemAsync = createAsyncThunk(
    actionTypes.ADD_ITEM,
    async (item) => {
        return await ItemService.addUser( item );
    }
);
