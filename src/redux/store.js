import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { itemsReducer } from './itemsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});