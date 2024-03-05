import {
  configureStore,
  ConfigureStoreOptions,
  combineReducers,
} from '@reduxjs/toolkit';
import OrderReducer from './Order.Reducer';


export const store = configureStore({
  reducer: {
    OrderReducer,
  },
});