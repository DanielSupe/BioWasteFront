
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pass: 0,
    TutorialSuccest: false,
    contactoVisible: false,
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
        MostrarContacto: (state)=>{
            state.contactoVisible = true;
        },
        MostrarContactoExito: (state) =>{
            state.contactoVisible = false;
        },
        
    }
})

export const { NextPass,ReiniciarPass,ReiniciarState,MostrarContacto,MostrarContactoExito} = TutorialSlice.actions;
export default TutorialSlice.reducer