import { configureStore } from "@reduxjs/toolkit";
import counterActions from "../slices/counter";

const store = configureStore({
    reducer:{
        counterApp: counterActions
    }
});


export default store;