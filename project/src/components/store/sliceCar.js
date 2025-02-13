import { createSlice } from '@reduxjs/toolkit'

const initialState = createSlice({
    items: [],
    totalQuantity: 0,
})

export const sliceProducts = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.find((el) => el.id === newItem.id);
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
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price

            }
        },
        removeItemCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.find(state.id === id);
            if (existingItem > 1) {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})
export const { addItem, removeItemCart } = sliceProducts.actions;
export default sliceProducts.reducer