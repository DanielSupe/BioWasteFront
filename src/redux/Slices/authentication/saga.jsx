import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { RegisterUserFail, RegisterUserSuccess } from "./RegisterSlice";

function* RegisterUserProfile(data) {
    const {Email,Name,confirmPassword,phoneNumber,Password} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/registrer`,{
            "username":Name,
            "email":Email,
            "phoneNumber":phoneNumber,
            "password":Password,
            "confirmPassword":confirmPassword,
            })
          yield put(RegisterUserSuccess())
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success",
                text:"account created",
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    const popup = document.querySelector('.swal2-popup');
                    const backdrop = document.querySelector('.swal2-backdrop');
                
                    container.style.zIndex = '9999';
                    popup.style.zIndex = '9999';
                    backdrop.style.zIndex = '9999';
                  }
            })
    } catch (error) {
        console.log(error,"ERRORR")
        yield put(RegisterUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
                const popup = document.querySelector('.swal2-popup');
                const backdrop = document.querySelector('.swal2-backdrop');
            
                container.style.zIndex = '9999';
                popup.style.zIndex = '9999';
                backdrop.style.zIndex = '9999';
              }
        })
    }
    
}



function* AuthenticationSaga (){
    yield takeEvery('Register/RegisterUser', RegisterUserProfile)
}

export default AuthenticationSaga;