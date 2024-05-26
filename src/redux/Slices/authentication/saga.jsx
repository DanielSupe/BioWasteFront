import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { RegisterUserFail, RegisterUserSuccess } from "./RegisterSlice";
import { LoginUserSuccess } from "./login/LoginSlice";

function* RegisterUserProfile(data) {
    const {Email,Name,confirmPassword,phoneNumber,Password,apt} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/registerUser`,{
            "username":Name,
            "email":Email,
            "phoneNumber":phoneNumber,
            "password":Password,
            "confirmPassword":confirmPassword,
            "apartment":apt
            })
          yield put(RegisterUserSuccess(rep))
          yield put(LoginUserSuccess(rep))
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success",
                text:"account created",
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                
                    container.style.zIndex = '9999';
                  }
            })
    } catch (error) {
        yield put(RegisterUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    }
    
}



function* AuthenticationSaga (){
    yield takeEvery('Register/RegisterUser', RegisterUserProfile)
}

export default AuthenticationSaga;