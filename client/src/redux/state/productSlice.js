import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'product',
    initialState:{
        Product: [],
        Total: 0
    },

    reducers:{
        setProduct:(state, action)=>{
            state.Product = action.payload
        },
        setTotal:(state, action)=>{
            state.Total = action.payload
        }
    }
})

export const {setProduct, setTotal} = productSlice.actions
export default productSlice.reducer