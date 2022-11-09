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
            state.isAuthPopupOpen = false;
        },
        setPopupState: (state, action) => {
            if (!state.isAuthenticated)
                state.isAuthPopupOpen = action.payload;
        }
    },
});

export default authSlice.reducer;
export const { authenticate, setPopupState } = authSlice.actions;
