export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';

export const addItem = item => ({ type: ADD_ITEM, item });
export const deleteItem = index => ({ type: DELETE_ITEM, index });
export const deleteAll = () => ({ type: DELETE_ALL });