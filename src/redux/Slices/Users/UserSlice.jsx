
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    exito:false,
    error:false,
    Loading:false,
};

export const UserSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
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
        }
        
    }
})

export const { GetUser,GetUserSuccess,GetUserFail} = UserSlice.actions;
export default UserSlice.reducer