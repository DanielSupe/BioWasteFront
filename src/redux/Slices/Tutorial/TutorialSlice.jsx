
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pass: 0,
    TutorialSuccest: false
};

export const TutorialSlice = createSlice({
    name:"Tutorial",
    initialState,
    reducers:{
        NextPass: (state)=>{
            state.pass = state.pass +1;
        },
        ReiniciarPass: (state) =>{
            state.pass = 0;
            state.TutorialSuccest = true;
        },
        ReiniciarState: (state) =>{
            state.pass = 0;
            state.TutorialSuccest = false;
        },
        
    }
})

export const { NextPass,ReiniciarPass,ReiniciarState} = TutorialSlice.actions;
export default TutorialSlice.reducer