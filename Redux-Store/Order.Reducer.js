import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import items from '../db.json'

const INITIAL_STATE = {
  items,
  cart:[]
};

const orderReducer = createSlice({
  name: 'Order',
  initialState: INITIAL_STATE,
  reducers: {
    ADD_TO_CART(state, action) {
      if (state.cart.filter((x) => x.name === action.payload.name).length === 0) {
        console.log('ADD_TO_CART #1 ')
        state.cart.push({ ...action.payload, qty:1 });
      }else{
        console.log('ADD_TO_CART #2 ')
        state.cart = state.cart.map(item => {
          if (item.name === action.payload.name) {
            console.log('ADD_TO_CART #3 ', item.qty + 1)
            return { ...item, qty: item.qty+1};
          }
          return item;
        });
      }
      // if (state.cart.filter((x) => x.id === action.payload.id && x.key === action.payload.key).length === 0) {
      //   console.log('ADD_TO_CART #1 ')
      //   state.cart.push({...action.payload,qty:1});
      // }else{
      //   console.log('ADD_TO_CART #2 ')
      //   state.cart = state.cart.map(item => {
      //     if (item.id === action.payload.id && item.key === action.payload.key) {
      //       console.log('ADD_TO_CART #3 ')
      //       return {...action.payload, qty: item.qty+1};
      //     }
      //   });
      // }
    },
    REMOVE_FROM_CART(state, action) {
      if (state.cart.length > 0) {
        var newdata = state.cart.map(item => {
          if (item.name === action.payload.name) {
            return { ...action.payload, qty: item.qty - 1 };
          }
          return item;
        });
        console.log('newdata ', newdata)
        state.cart = newdata.filter(item => item?.qty !== 0);
        
      } 
      // state.cart = state.cart.filter(item => item.name !== action.payload.name || item.key !== action.payload.key);
      // console.log('REMOVE_FROM_CART #0 ')
      // if (state.cart.filter((x) => x.id === action.payload.id && x.key === action.payload.key).length !== 0) {
      //   console.log('REMOVE_FROM_CART #1 ')
      //  var newdata = state.cart.map(item => {
      //    if (item.id === action.payload.id && item.key === action.payload.key) {
      //      console.log('REMOVE_FROM_CART #2 ')
      //       return { ...action.payload, qty: item.qty-1 };
      //     }
      //   });
      //   console.log('REMOVE_FROM_CART #3 ', newdata)
      //   state.cart = newdata.filter(item => item?.qty !== 0);
      // } 
    },
    RESET_CART(state, action){
      state.cart = INITIAL_STATE.cart;
    },
    RESET(state, action) {
      state = INITIAL_STATE;
    },
  },

});

export const { ADD_TO_CART, REMOVE_FROM_CART, RESET, RESET_CART } = orderReducer.actions;
export default orderReducer.reducer;