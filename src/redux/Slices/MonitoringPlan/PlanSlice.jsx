
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
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
        UpdatePlanMo: (state,action)=>{
            state.Loading=true
        },
        UpdatePlanSuccess: (state,action)=>{
            state.Loading = false;
            state.exito = true;
        },
        ReiniciarPlan:(state)=>{
            state.data = null
            state.Loading = false;
            state.exito = false;
            state.error = false
        }
    }
})

export const {getPlan,getPlanSuccess,getPlanFail,UpdatePlanMo,UpdatePlanSuccess,ReiniciarPlan } = PlanSlice.actions;
export default PlanSlice.reducer