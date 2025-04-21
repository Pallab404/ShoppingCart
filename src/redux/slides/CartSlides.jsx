import { createSlice } from "@reduxjs/toolkit";


export const CartSlides = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:()=>{},
        remFromCart:()=>{}
    }
})

export const {addToCart,remFromCart} = CartSlides.actions;
export default CartSlides.reducer;