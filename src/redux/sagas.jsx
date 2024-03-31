import createSagaMiddleware from "@redux-saga/core";
import { all } from 'redux-saga/effects';
import AuthenticationSaga from "./Slices/authentication/saga";
import LoginSaga from "./Slices/authentication/login/saga";
export const saga = createSagaMiddleware(
    
)

// Define tu función rootSaga que combina todas las sagas individuales
export function* rootSaga() {
  yield all([
    AuthenticationSaga(),
    LoginSaga()


      //Mas sagas




  ]);
}