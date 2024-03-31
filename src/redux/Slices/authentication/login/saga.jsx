import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { LoginUserFail, LoginUserSuccess } from "./LoginSlice"
import Swal from "sweetalert2"
import urlBakend from "../../../../common/contants"


function* RegisterUserProfile(data) {
    const {user,password} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/login`,{
            "username": user,
            "password": password
          })
          yield put(LoginUserSuccess(rep))
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success"
            })
    } catch (error) {
        console.log(error,"ERRORR")
        yield put(LoginUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error"
        })
    }
    
}





function* LoginSaga (){
    yield takeEvery('Login/LoginUser', RegisterUserProfile)
}

export default LoginSaga;