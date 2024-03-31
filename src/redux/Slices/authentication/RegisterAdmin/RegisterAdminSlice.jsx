

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserCreate: {},
    Loading: false,
    error:{},
    exito: false,
    ResidenceCreate: {},
    ResidenceLoading: false,
    Residenceerror:{},
    Residenceexito: false,

};

export const RegisterAdminSlice = createSlice({
    name:"RegisterAdmin",
    initialState,
    reducers:{
        RegisterUserAdmin: (state,action)=>{
            state.Loading = true;
        },
        RegisterUserAdminSuccess: (state,action)=>{
            state.UserCreate = action.payload
            state.Loading = false;
            state.exito = true;
        },
        RegisterUserAdminFail: (state,action)=>{
            state.Loading = false;
            state.error = action.payload
        },
        //-------------------------------
        ResidenceUserAdmin: (state,action)=>{
            state.ResidenceLoading = true;
        },
        ResidenceUserAdminSuccess: (state,action)=>{
            state.ResidenceCreate = action.payload
            state.ResidenceLoading = false;
            state.Residenceexito = true;
        },
        ResidenceUserAdminFail: (state,action)=>{
            state.ResidenceLoading = false;
            state.Residenceerror = action.payload
        }
    }
})

export const { RegisterUserAdmin, RegisterUserAdminSuccess, RegisterUserAdminFail,ResidenceUserAdmin,ResidenceUserAdminSuccess,ResidenceUserAdminFail} = RegisterAdminSlice.actions;
export default RegisterAdminSlice.reducer