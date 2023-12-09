import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from './categoryslice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
