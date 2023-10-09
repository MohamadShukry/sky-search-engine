import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from '../features/SearchSlice';

const Store = configureStore({

    reducer:{
        search: SearchReducer,
    }
})

export default Store ;