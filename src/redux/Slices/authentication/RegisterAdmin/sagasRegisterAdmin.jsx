import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import Swal from "sweetalert2";
import { RegisterUserAdminFail, RegisterUserAdminSuccess, ResidenceUserAdminFail, ResidenceUserAdminSuccess } from "./RegisterAdminSlice";
import urlBakend from "../../../../common/contants";
import { LoginUserSuccess } from "../login/LoginSlice";


function* RegisterAdminProfile(data) {
    const {Email,firstName,lastName,address,city,province,postalCode,Username,confirmPassword,phoneNumber,Password} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/registerAdmin`,{
            "username":Username,
            "email":Email,
            "phoneNumber":phoneNumber,
            "password":Password,
            "confirmPassword":confirmPassword,
            "name":`${firstName} ${lastName}`,
            "address":address,
            "city":city,
            "state":province,
            "postalCode":postalCode
            })
          yield put(RegisterUserAdminSuccess(rep))
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
        yield put(RegisterUserAdminFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message,
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


function* ResidenceUserAdmin(data) {
    const {residenceName,numberResidents,emergencyNumber,addressResidence,cityResidence,provinceResidence,postalCodeResidence,Username} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/registerResidence`,{
            "name":residenceName,
            "numberOfResidents":Number(numberResidents),
            "emergencyNumber":emergencyNumber,
            "address":addressResidence,
            "city":cityResidence,
            "state":provinceResidence,
            "postalCode":postalCodeResidence,
            "admin":Username
            })
          yield put(ResidenceUserAdminSuccess(rep))
          yield put(LoginUserSuccess(rep))
          
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
        yield put(ResidenceUserAdminFail(error))
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




function* AuthenticationSagaAdmin (){
    yield takeEvery('RegisterAdmin/RegisterUserAdmin', RegisterAdminProfile)
    yield takeEvery('RegisterAdmin/ResidenceUserAdmin', ResidenceUserAdmin)
}

export default AuthenticationSagaAdmin;