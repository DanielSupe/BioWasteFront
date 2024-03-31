import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { LoginUserFail, LoginUserSuccess } from "./login/LoginSlice";

function* RegisterUserProfile(data) {
    
}





function* AuthenticationSaga (){
    yield takeEvery('Register/RegisterUser', RegisterUserProfile)
}

export default AuthenticationSaga;