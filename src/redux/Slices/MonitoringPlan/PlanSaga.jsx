import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { getUser } from "../../../helpers/tools";


const getPlanFetch = async()=>{
    const rep = await axios.get(`${urlBakend}/api/listUsers/${""}`)
    return rep.data
}


function* getPlan(action) {
    const user = getUser();
    try {
        const rep = yield call(getPlanFetch,action.payload)
        // yield put()
        Swal.close()
        
    } catch (error) {
        Swal.close()
        
    }
    
}



function* PlanSaga (){
    yield takeEvery('plan/getPlan', getPlan)
}

export default PlanSaga;