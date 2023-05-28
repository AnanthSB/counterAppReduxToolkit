import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:  {
        value:0,
        appName:'Counter App - @reduxjs/toolkit'
    },
    reducers:{
        // increament: (state, {type, payload}) => state?.countValue + payload,
        increament: (state, {type, payload}) => {
            return {
                ...state,
                value: state.value + payload
            }
        },
        decreament: (state, {type, payload}) => {
            return {
                ...state,
                value: state.value - payload
            }
        },
    }
});

export const {increament, decreament} = counterSlice.actions;
export default counterSlice.reducer;