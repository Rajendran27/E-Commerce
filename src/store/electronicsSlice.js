
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[],
}

const electronicsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
        state.data = action.payload;

    }

    
  }
});

export const { fetchProducts } = electronicsSlice.actions; 
export default electronicsSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch, getState){
       const data = await fetch('https://fakestoreapi.com/products/category/electronics')
        const result = data.json();
        dispatch(fetchProducts(result))
    }
}
