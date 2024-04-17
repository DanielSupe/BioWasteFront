
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pass: 0
};

export const TutorialSlice = createSlice({
    name:"Tutorial",
    initialState,
    reducers:{
        NextPass: (state)=>{
            state.pass = state.pass +1;
        },
        
    }
})

export const { NextPass} = TutorialSlice.actions;
export default TutorialSlice.reducer