import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./sliceCar";
import uiSlice from "./sliceUi"
export const store = configureStore({
    reducer: {
        cart: sliceProducts.reducer,
        ui: uiSlice.reducer
    }
})