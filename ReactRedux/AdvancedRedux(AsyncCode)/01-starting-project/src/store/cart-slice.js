import { createSlice } from "@reduxjs/toolkit";

const initialCart = { totalQuantity: 0, items: [], changed: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        replaceData(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItem(state, action) {
            const itemToAdd = action.payload;
            const existingItem = state.items.find(item => item.id === itemToAdd.id);
            state.changed = true;
            if (!existingItem) {
                state.totalQuantity++;
                state.items.push({ id: itemToAdd.id, name: itemToAdd.name, quantity: 1, totalPrice: itemToAdd.price, price: itemToAdd.price });
            } else {
                state.totalQuantity += 1
                existingItem.quantity = existingItem.quantity + 1
                existingItem.totalPrice = existingItem.totalPrice + itemToAdd.price
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.totalQuantity--;
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                state.totalQuantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;