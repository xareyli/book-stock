import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { default as authReducer } from './reducers/AuthSlice';
import { default as cartReducer } from './reducers/CartSlice';

const rootReducer = combineReducers({
    authReducer,
    cartReducer
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
