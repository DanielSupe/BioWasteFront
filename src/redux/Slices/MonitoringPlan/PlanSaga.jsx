import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { getUser } from "../../../helpers/tools";
import { UpdatePlanSuccess, getPlanSuccess } from "./PlanSlice";


const getPlanFetch = async(id)=>{
    const rep = await axios.get(`${urlBakend}/api/getPlans/${id}`)
    return rep.data.result
}


function* getPlan(action) {
    try {
        const rep = yield call(getPlanFetch,action.payload)
        yield put(getPlanSuccess(rep))
        
    } catch (error) {
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            text:"No plan",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    }
    
}


const UpdatePlanFetch = async(update)=>{
    const {id,plan}= update
    const rep = await axios.get(`${urlBakend}/api/getPlan/${id}/${plan}`)
    return rep.data.result
}


function* UpdatePlan(action) {
    try {
        const rep = yield call(UpdatePlanFetch,action.payload)
        yield put(UpdatePlanSuccess(rep))
        Swal.close()
        Swal.fire({
            title:'success',
            icon:"success",
            text:"stage successfully completed",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
        
    } catch (error) {
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            text:"No plan",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    }
    
}



function* PlanSaga (){
    yield takeEvery('Plan/getPlan', getPlan)
    yield takeEvery('Plan/UpdatePlanMo', UpdatePlan)
}

export default PlanSaga;