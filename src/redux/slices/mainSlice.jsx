import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products: [],
    loading: false
}


export const asyncGetProducts = createAsyncThunk(
    'mainSlice/asyncGetProducts', async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products`)
            return response.data.products
        }
        catch (e) {
            console.log(e)
        }
    }
)


const { actions: mainAction, reducer: mainReducer } = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncGetProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(asyncGetProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
    }
})

export { mainAction, mainReducer }