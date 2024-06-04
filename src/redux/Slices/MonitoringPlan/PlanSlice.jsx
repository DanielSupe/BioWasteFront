
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    exito:false,
    error:false,
    Loading:false,
};

export const PlanSlice = createSlice({
    name:"Plan",
    initialState,
    reducers:{
        getPlan: (state,action)=>{
            state.Loading=true
        },
        getPlanSuccess: (state,action)=>{
            state.data = action.payload
            state.Loading = false;
            state.exito = true;
        },
        getPlanFail: (state,action)=>{
            state.data = action.payload
            state.Loading = false;
            state.exito = false;
        },
    }
})

export const {getPlan,getPlanSuccess,getPlanFail } = PlanSlice.actions;
export default PlanSlice.reducer