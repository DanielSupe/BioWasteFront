import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { GetUserFail, GetUserSuccess } from "./UserSlice";

function* GetUserList() {
    try {
        const rep = yield axios.get(`${urlBakend}/api/showUsers`)
          yield put(GetUserSuccess(rep.data))
            Swal.close()
        
    } catch (error) {
        console.log(error,"ERRORR")
        yield put(GetUserFail(error))
        Swal.close()
        
    }
    
}



function* UserSaga (){
    yield takeEvery('Users/GetUser', GetUserList)
}

export default UserSaga;