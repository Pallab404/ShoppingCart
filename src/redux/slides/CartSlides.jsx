import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cart: JSON.parse(localStorage.getItem("cart")) || []
}

export const CartSlides = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,actions)=>{
            state.cart.push(actions.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        remFromCart:(state,actions)=>{
            state.cart = state.cart.filter((items)=> items.id !== actions.payload)
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
})

export const {addToCart,remFromCart} = CartSlides.actions;
export default CartSlides.reducer;