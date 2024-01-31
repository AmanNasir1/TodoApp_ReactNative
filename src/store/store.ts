import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: "todoApp",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer:
        persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),

})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch