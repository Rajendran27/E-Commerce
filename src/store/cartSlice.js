
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state,action) {
       return state.filter(item => item.id !== action.payload)
    }
  }
});

export const { add, remove } = cartSlice.actions; // Corrected: "actions" instead of "action"
export default cartSlice.reducer;
