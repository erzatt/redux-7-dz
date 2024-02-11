import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './slices/mainSlice.jsx'
import { basketReducer } from './slices/basketSlice.jsx'

export const store = configureStore({
    reducer: {
        main: mainReducer,
        basket: basketReducer
    }
})