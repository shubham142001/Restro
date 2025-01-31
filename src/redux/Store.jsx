import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./slices/cartSlice";

const Store = configureStore({
    reducer: {
        carts: cartSlice,
    },
})

export default Store;