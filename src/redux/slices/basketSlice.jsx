import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    basketProducts: []
}


const { actions: basketAction, reducer: basketReducer } = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.basketProducts.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.basketProducts = state.basketProducts.filter(
                item => item.id !== action.payload
            )
        }
    }
})

export { basketAction, basketReducer }