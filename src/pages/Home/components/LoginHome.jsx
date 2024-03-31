import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { LoginUser } from '../../../redux/Slices/authentication/login/LoginSlice'
import Swal from 'sweetalert2'
import axios, { Axios } from 'axios'
const LoginHome = () => {

  const { Loading, error, exito } = useSelector((state) => ({
    error: state.Login.error,
    Loading: state.Login.Loading,
    exito: state.Login.exito,

  }))

  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({ user: "", password: "" })


  useEffect(() => {
    const { user, password } = form;
    if (user != "" && password != "") {
      setDisabled(false);
    } else {
      setDisabled(true)
    }
  }, [form])

  const handleForm = (namekey, change) => {
    setForm({
      ...form,
      [namekey]: change
    })
  }

  const loginUser = () => {
    showProgress();
    dispatch(LoginUser(form))
  }

  const showProgress = () => {
    return Swal.fire({
      title: 'Loading...',
      backdrop: true,
      html: '',
      width: 500,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      allowEnterKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => { });
  };

  useEffect(()=>{
    if(exito){
      console.log("Entrooo al iniciooo")
    }
  },[exito])


  return (
    <div className='w-full h-full bg-whiteBioWaste rounded-xl overflow-hidden text-center'>
      <div className=' h-[35px]' style={{ backgroundImage: `url('Images/Home/imagen_headLogin01.jpg')` }} />
      <div className=' p-5'>
        <div className='w-full border-b-2 border-gray-400'>
          <input onChange={(e) => { handleForm("user", e.target.value) }} type='text' placeholder='User' className=' w-full mb-5 pt-3 pb-2 px-2 bg-transparent border border-gray-500 rounded-lg' />
          <input onChange={(e) => { handleForm("password", e.target.value) }} type='password' placeholder='Password' className=' w-full mb-5 pt-3 pb-2 px-2 bg-transparent border border-gray-500 rounded-lg' />
          <Button disabled={disabled} onClick={() => { loginUser() }} className={` ${disabled ? "cursor-no-drop" : ""} w-full mb-3 pt-3 pb-2 px-2 bg-blueBioWaste text-white font-bold text-xl border border-gray-500 rounded-lg`}>Login</Button>
          <div className='mb-3'>
            <Link className=' text-blueBioWaste'>Forgot your password?</Link>
          </div>
        </div>

        <Button className={`p-2 mt-2 font-bold text-xl bg-greenBioWaste rounded-lg text-white`}>New Account</Button>


      </div>

    </div>
  )
}

export default LoginHome