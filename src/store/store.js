import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"

    const store = configureStore({
        reducer:{
            cart: CartSlice,
        }
    })

    export default store;
/*
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
    }
});

export default Store;
*/