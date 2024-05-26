
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    exito:false,
    error:false,
    Loading:false,
    userActual: {}
};

export const UserSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        ResetStateUser: (state)=>{
            state.data = [],
            state.exito =false,
            state.error =false,
            state.Loading=false,
            state.userActual={}
        },
        GetUser: (state)=>{
            state.Loading = true;
        },
        GetUserSuccess: (state,action)=>{
            state.data = action.payload
            state.Loading = false;
            state.exito = true;
        },
        GetUserFail: (state,action)=>{
            state.Loading = false;
            state.error = action.payload
        },
        DeleteUser: (state,action)=>{
            state.Loading = true;
        },
        GetUserById: (state)=>{
            state.Loading = true;
        },
        GetUserByIdSuccess: (state,action)=>{
            state.userActual = action.payload
            state.Loading = false;
        },
        GetUserByIDFail: (state,action)=>{
            state.Loading = false;
            state.error = action.payload
        },
        UpdateUser: (state)=>{
            state.Loading = true;
        },
        UpdateUserSuccess: (state,action)=>{
            localStorage.setItem("Autentication", JSON.stringify(action?.payload))
            state.userActual = action.payload
            state.Loading = false;
            state.exito = true;
        },
        UpdateUserFail: (state,action)=>{
            state.Loading = false;
            state.error = action.payload
        },
        addResidence: (state,action)=>{
            state.Loading = true;
        },
        
    }
})

export const { ResetStateUser,GetUser,GetUserSuccess,GetUserFail,DeleteUser,GetUserById,GetUserByIdSuccess,GetUserByIDFail,UpdateUser,UpdateUserSuccess,UpdateUserFail,addResidence} = UserSlice.actions;
export default UserSlice.reducer