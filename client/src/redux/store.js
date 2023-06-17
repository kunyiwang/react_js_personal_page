import { createStore } from 'redux';
import inventoryReducer from './reducers';

const store = createStore(inventoryReducer);

export default store;