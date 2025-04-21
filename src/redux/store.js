import { configureStore } from "@reduxjs/toolkit";
import CartSlides from "./slides/CartSlides";


export const store = configureStore({
    reducer:{
        cart:CartSlides
    }
})