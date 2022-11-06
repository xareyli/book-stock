import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartElements: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        // addElement: (state, action) => {
            
        // },
        // removeElement: (state, action) => {
            
        // },
        // fullyRemoveElement: (state, action) => {
            
        // }
    },
});

export default cartSlice.reducer;
