import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import Swal from "sweetalert2";
import { RegisterUserAdminFail, RegisterUserAdminSuccess, ResidenceUserAdminFail, ResidenceUserAdminSuccess } from "./RegisterAdminSlice";
import urlBakend from "../../../../common/contants";


function* RegisterAdminProfile(data) {
    const {Email,firstName,lastName,address,city,province,postalCode,Username,confirmPassword,phoneNumber,Password} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/adminRegister`,{
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
                text:"account created"
            })
    } catch (error) {
        console.log(error,"ERRORR")
        yield put(RegisterUserAdminFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error"
        })
    }
    
}


function* ResidenceUserAdmin(data) {
    const {residenceName,numberResidents,emergencyNumber,addressResidence,cityResidence,provinceResidence,postalCodeResidence} = data.payload
    try {
        const rep = yield axios.post(`${urlBakend}/api/createResidence`,{
            "name":residenceName,
            "numberOfResidents":Number(numberResidents),
            "emergencyNumber":emergencyNumber,
            "address":addressResidence,
            "city":cityResidence,
            "state":provinceResidence,
            "postalCode":postalCodeResidence
            })
          yield put(ResidenceUserAdminSuccess(rep))
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success",
                text:"account created"
            })
    } catch (error) {
        console.log(error,"ERRORR")
        yield put(ResidenceUserAdminFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message[0],
            icon:"error"
        })
    }
}




function* AuthenticationSagaAdmin (){
    yield takeEvery('RegisterAdmin/RegisterUserAdmin', RegisterAdminProfile)
    yield takeEvery('RegisterAdmin/ResidenceUserAdmin', ResidenceUserAdmin)
}

export default AuthenticationSagaAdmin;