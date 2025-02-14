import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./sliceCar";
export const store = configureStore({
    reducer: {
        cart: sliceProducts.reducer
    }
})