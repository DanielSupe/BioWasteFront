import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../../redux/Slices/authentication/login/LoginSlice';

const Logout = () => {

    const  dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        dispatch(LogoutUser());//despachar accion para logout
        history("/")

      },[dispatch, history]);


  return (
    <></>
  )
}

export default Logout