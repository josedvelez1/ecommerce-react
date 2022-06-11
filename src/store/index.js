import { configureStore } from "@reduxjs/toolkit";
import isLoading from './Slices/isLoading.slice'
import products from './Slices/products.slice'
import purchases from "../pages/Purchases";

export default configureStore({
    reducer: {
        isLoading,
        products,
        purchases
    }
})