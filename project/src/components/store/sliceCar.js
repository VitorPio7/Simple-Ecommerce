import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalQuantity: 0,
    change: false
}

export const sliceProducts = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((el) => el.id === newItem.id);
            state.change = true
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price

            }
        },
        removeItemCart: (state, action) => {
            const id = action.payload;
            state.change = true
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})
export const { addItem, removeItemCart, replaceCart } = sliceProducts.actions;
export default sliceProducts