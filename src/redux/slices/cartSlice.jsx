import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        quantity: (state, action) => {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeCart: (state, action) => {
            return state.filter((cart) => cart.id !== action.payload.id);
        },
    },
})



export default cartSlice.reducer;
export const { quantity, removeCart } = cartSlice.actions;