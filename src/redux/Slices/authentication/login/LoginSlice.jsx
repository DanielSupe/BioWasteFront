
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User: {},
    Loading: false,
    error:{},
    exito: false,
};

export const LoginSlice = createSlice({
    name:"Login",
    initialState,
    reducers:{
        LoginUser: (state,action)=>{
            state.Loading = true;
        },
        LoginUserSuccess: (state,action)=>{
            localStorage.setItem("Autentication", JSON.stringify(action?.payload?.data.result))
            state.User = action.payload
            state.Loading = false;
            state.exito = true;
        },
        LoginUserFail: (state,action)=>{
            state.Loading = false;
            state.error = action.payload
        },
        LogoutUser: (state)=>{
            localStorage.removeItem("Autentication")
            state.User= {};
            state.Loading= false;
            state.error={};
            state.exito= false;
        },
    }
})

export const { LoginUser, LoginUserSuccess, LoginUserFail,LogoutUser} = LoginSlice.actions;
export default LoginSlice.reducer
