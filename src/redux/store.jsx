import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "./Slices/authentication/RegisterSlice";
import { saga } from "./sagas";
import { rootSaga } from "./sagas";
import LoginSlice from "./Slices/authentication/login/LoginSlice";
import RegisterAdminSlice from "./Slices/authentication/RegisterAdmin/RegisterAdminSlice";
import TutorialSlice from "./Slices/Tutorial/TutorialSlice";
import UserSlice from "./Slices/Users/UserSlice";
export const store = configureStore({
    reducer:{
        Register:RegisterSlice,
        Login: LoginSlice,
        RegisterAdmin: RegisterAdminSlice,
        Tutorial: TutorialSlice,
        Users: UserSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)