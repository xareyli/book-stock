import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { default as authReducer } from './reducers/AuthSlice';

                    const rootReducer = combineReducers({
    authReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
