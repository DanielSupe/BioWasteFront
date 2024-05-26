import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { LoginUserFail, LoginUserSuccess } from "./LoginSlice"
import Swal from "sweetalert2"
import urlBakend from "../../../../common/contants"
import { ResetStateUser } from "../../Users/UserSlice"
import { ReiniciarState } from "../../Tutorial/TutorialSlice"


function* RegisterUserProfile(data) {
    const {user,password} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/loginClient`,{
            "username": user,
            "password": password
          })
          yield put(LoginUserSuccess(rep))
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success",
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    container.style.zIndex = '9999';
                  }
            })
    } catch (error) {
        yield put(LoginUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    }
    
}

function* resetState(data) {
    yield put(ResetStateUser())
    yield put(ReiniciarState())
}






function* LoginSaga (){
    yield takeEvery('Login/LoginUser', RegisterUserProfile)
    yield takeEvery('Login/LogoutUser', resetState)
}

export default LoginSaga;