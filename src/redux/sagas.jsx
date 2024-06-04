import createSagaMiddleware from "@redux-saga/core";
import { all } from 'redux-saga/effects';
import AuthenticationSaga from "./Slices/authentication/saga";
import LoginSaga from "./Slices/authentication/login/saga";
import AuthenticationSagaAdmin from "./Slices/authentication/RegisterAdmin/sagasRegisterAdmin";
import UserSaga from "./Slices/Users/UserSaga";
import PlanSaga from "./Slices/MonitoringPlan/PlanSaga";
export const saga = createSagaMiddleware(
    
)

// Define tu función rootSaga que combina todas las sagas individuales
export function* rootSaga() {
  yield all([
    AuthenticationSaga(),
    LoginSaga(),
    AuthenticationSagaAdmin(),
    UserSaga(),
    PlanSaga(),


      //Mas sagas




  ]);
}