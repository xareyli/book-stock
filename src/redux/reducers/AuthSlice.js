import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    isAuthPopupOpen: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        authenticate: state => {
            state.isAuthenticated = true;
        },
        setPopupState: (state, action) => {
            state.isAuthPopupOpen = action.payload;
        }
    },
});

export default authSlice.reducer;
export const { authenticate, setPopupState } = authSlice.actions;
