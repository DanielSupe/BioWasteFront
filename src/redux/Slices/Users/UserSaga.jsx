import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import urlBakend from "../../../common/contants";
import Swal from "sweetalert2";
import { GetUser, GetUserByIDFail, GetUserByIdSuccess, GetUserFail, GetUserSuccess, UpdateUserFail, UpdateUserSuccess } from "./UserSlice";
import { getUser } from "../../../helpers/tools";

function* GetUserList(action) {
    const user = getUser();
    try {
        const rep = yield axios.get(`${urlBakend}/api/listUsers/${action && action.payload ? action.payload:user.residence}`)
          yield put(GetUserSuccess(rep.data.result))
            Swal.close()
        
    } catch (error) {
        yield put(GetUserFail(error))
        Swal.close()
        
    }
    
}

function* DeleteUser(id) {

    try {
        const rep = yield axios.delete(`${urlBakend}/api/deleteUser/${id.payload}`)
        yield put(GetUser())
        Swal.close()
        Swal.fire({
            title:"success",
            icon:"success",
            text:"User delete",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    } catch (error) {
        yield put(GetUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            text:"the user was not deleted",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
        
    }
    
}

const getUserByIdAxios =  async(id) =>{
    const rep = await axios.get(`${urlBakend}/api/findUser/${id}`)
    return rep.data.result
}


function* getUserByID(action) {

    try {
        const rep = yield call(getUserByIdAxios,action.payload)
        yield put(GetUserByIdSuccess(rep))
    } catch (error) {
        yield put(GetUserByIDFail(error))
        
    }
    
}
//------------------------Update-----------------------------------------

const UpdateUserAxios =  async(userUpdate) =>{
    const {username,passwordNew,email,phoneNumber,apartment} = userUpdate;
    const userLocal = getUser();


    let updateObj = {
        "username": username,
        "email": email,
        "phoneNumber": phoneNumber,
        "apartment": apartment
}

    if(passwordNew){
        updateObj = {
            ...updateObj,
            "password":passwordNew,
            "confirmPassword": passwordNew,
        }
    }


    const rep = await axios.put(`${urlBakend}/api/updateUser/${userLocal.id || userLocal._id}`,updateObj)
    return rep.data.result
}


function* UpdateUser(action) {

    try {
        const rep = yield call(UpdateUserAxios,action.payload)
        yield put(UpdateUserSuccess(rep))
        Swal.close()
        Swal.fire({
            title:"success",
            icon:"success",
            text:"Update User",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    } catch (error) {
        yield put(UpdateUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            text:"user not updated",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    }
    
}

//añadir residenciaaa-----------------------------------------------------


const addResidenceAxios =  async(code) =>{
    const userLocal = getUser();
    const rep = await axios.post(`${urlBakend}/api/assignUserToResidence/${userLocal.id || userLocal._id}`,{
        "residenceId": code
    })
    return rep.data.result
}


function* addResidence(action) {

    try {
        const rep = yield call(addResidenceAxios,action.payload)
        localStorage.setItem("Autentication", JSON.stringify(rep))
        Swal.close()
        Swal.fire({
            title:"success",
            icon:"success",
            text:"Residence added",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    } catch (error) {
        yield put(UpdateUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error",
            text:"Residence not added",
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    }
    
}


function* UserSaga (){
    yield takeEvery('Users/GetUser', GetUserList)
    yield takeEvery('Users/DeleteUser', DeleteUser)
    yield takeEvery('Users/GetUserById', getUserByID)
    yield takeEvery('Users/UpdateUser', UpdateUser)
    yield takeEvery('Users/addResidence', addResidence)
}

export default UserSaga;