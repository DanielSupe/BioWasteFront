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
                text:"account created"
            })
    } catch (error) {
        console.log(error,"ERRORR")
        yield put(RegisterUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error"
        })
    }
    
}



function* AuthenticationSaga (){
    yield takeEvery('Register/RegisterUser', RegisterUserProfile)
}

export default AuthenticationSaga;