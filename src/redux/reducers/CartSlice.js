import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartElements: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addElement: (state, action) => {
            const element = state.cartElements.find(item => item.id === action.payload.id);

            if (element) {
                element.count++;
            } else {
                action.payload.count = 1;
                state.cartElements.push(action.payload);
            }
        },
        removeElement: (state, action) => {
            const element = state.cartElements.find(item => item.id === action.payload.id);

            if (element) {
                if (element.count > 1) {
                    element.count--;
                } else {
                    state.cartElements = state.cartElements.filter(cartElement => cartElement.id !== action.payload.id);
                }
            }
        },
        // fullyRemoveElement: (state, action) => {
            
        // }
    },
});

export default cartSlice.reducer;
export const { addElement, removeElement } = cartSlice.actions;
