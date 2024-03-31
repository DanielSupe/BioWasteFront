import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "./Slices/authentication/RegisterSlice";
import { saga } from "./sagas";
import { rootSaga } from "./sagas";
import LoginSlice from "./Slices/authentication/login/LoginSlice";
import RegisterAdminSlice from "./Slices/authentication/RegisterAdmin/RegisterAdminSlice";
export const store = configureStore({
    reducer:{
        Register:RegisterSlice,
        Login: LoginSlice,
        RegisterAdmin: RegisterAdminSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)