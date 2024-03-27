import React, { useEffect, useState } from 'react'
import FooterTitles from '../../../common/components/FooterTitles'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import FormB from '../../../common/components/FormB'

const RegisterUserTemplate = () => {

  const handleChange = (nameKey,change) => {
    setForm({
      ...form,
      [nameKey]:change
    })
  }

  const UserProps = [
    { title: "Name", type: "text", nameKey: "Name" },
    { title: "Email", type: "email", nameKey: "Email" },
    { title: "Phone number", type: "number", nameKey: "phoneNumber" },
    { title: "Password", type: "password", nameKey: "Password" },
    { title: "Retype your password", type: "password", nameKey: "confirmPassword", info: "Passwords must contain at least one number and one special character, include upper and lower case letters, be at least 8 characters long, and not contain or match your email address." },
  ]


  const[form, setForm] = useState({Email:"",Password:"",confirmPassword:"",Name:"",phoneNumber:""})

  const [disabled,setDisabled] = useState(true)

  useEffect(()=>{
    const {Email,Password,confirmPassword,Name,phoneNumber} = form;
    if((Email != "" && Name != "" && Password != "" && confirmPassword != "" && phoneNumber != "") && Password === confirmPassword){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[form])

  return (
    <div className=' h-screen w-full bg-no-repeat bg-center bg-cover flex justify-center items-center box-border p-2' style={{ backgroundImage: `url('Images/Register/imagen_fondo.jpeg')` }}>
      <div className='w-[600px] bg-whiteBioWaste rounded-lg text-center box-border p-4'>
        <span className=' text-xl'>Create a new account</span>
        <div className='flex justify-center items-center mb-4'>
          <p>Do you already have an account?</p>
          <Link className=' text-blueBioWaste' to={'/'}>log in</Link>
        </div>
        <FormB handleChange={handleChange} list={UserProps} form={form} />
        <div className='mt-4 w-full border border-grayBioWaste' />
{/* ------------------------------------------- */}
        <div className='flex flex-col justify-center items-center mt-4 px-4'>
          <span className='mb-2'>Terms of use</span>
          <div className='flex justify-start items-start'>
            <input
            onChange={()=>{}}//aqui se despachara la accion para mandar la notificacion al correo
              type='checkbox'
            />
            <p>By clicking this button you accept the terms and conditions of use of BioWasted, taking into account that your activity on the page will be monitored by the responsible administrator.</p>
          </div>
        </div>
        <div className='my-4 w-full border border-grayBioWaste' />
        <Button
        onClick={()=>{alert("ola")}}
         className={`px-5 py-1 rounded-lg bg-blueBioWaste text-white text-xl mt-2 ${disabled ? " cursor-no-drop":"cursor-pointer hover:bg-greenBioWaste duration-500 transition"}`}
         disabled={disabled}
         
         
         
         
         
         >Create Account</Button>

          <div className='mt-6'>
            <FooterTitles/>
          </div>
      </div>
    </div>
  )
}

export default RegisterUserTemplate