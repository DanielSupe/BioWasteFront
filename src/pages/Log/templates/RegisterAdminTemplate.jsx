import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormB from '../../../common/components/FormB'
import InputB from '../../../common/components/InputB'
import { fetchDataDepartaments } from '../../../helpers/getDepartaments'
import FooterTitles from '../../../common/components/FooterTitles'
import {Button} from 'reactstrap'
import CreateResidence from '../components/CreateResidence'
import { generarListaNumeros } from '../../../helpers/optionsSelect'

const RegisterAdminTemplate = () => {


  const[optionsDepartaments,setoptionsDepartaments] = useState([]);


  const[form, setForm] = useState({Email:"",Username:"",Password:"",confirmPassword:"",firstName:"",lastName:"",phoneNumber:"",address:"",city:"",province:"",postalCode:"",verify:false,residenceName:"",numberResidents:"",emergencyNumber:"",addressResidence:"",cityResidence:"",provinceResidence:"",postalCodeResidence:""})

  const [disabled,setDisabled] = useState(true)

  const[pass, setPass] = useState(false);

  const opTionsNumber = generarListaNumeros()


  useEffect(()=>{
    const TraerDepartaments = async () => {
      const departaments = await fetchDataDepartaments()
      setoptionsDepartaments(departaments)
    };
    TraerDepartaments()
  },[])

  const AdminProps = [
    { title: "Email", type: "email", nameKey: "Email" },
    { title: "Username", type: "text", nameKey: "Username" },
    { title: "Password", type: "password", nameKey: "Password" },
    { title: "Retype your password", type: "password", nameKey: "confirmPassword",info: "Passwords must contain at least one number and one special character, include upper and lower case letters, be at least 8 characters long, and not contain or match your email address."  },
  ]

  const AdminProps2 = [
    { title: "Name", type: "text", nameKey: "firstName", placeholder: "First Name", secondInput: { type: "text", nameKey: "lastName", value: form.lastName, placeholder: "Last name", } },
    { title: "phone number", type: "number", nameKey: "phoneNumber" },
    { title: "address", type: "text", nameKey: "address" },
    { title: "City", type: "text", nameKey: "city" },
    { title: "State/province", type: "select", nameKey: "province", options: optionsDepartaments },
    { title: "Postal Code", type: "number", nameKey: "postalCode" },
  ]

  const Recidence = [
    { title: "Residence name", type: "text", nameKey: "residenceName" },
    { title: "Number of residents", type: "select", nameKey: "numberResidents",info:"Please note that the number of residents can be edited at any time, it is up to you whether to add only residents with their own apartment or all of them.", options: opTionsNumber },
    { title: "emergency number", type: "number", nameKey: "emergencyNumber" },
    { title: "address", type: "text", nameKey: "addressResidence" },
    { title: "City", type: "text", nameKey: "cityResidence" },
    { title: "State/province", type: "select", nameKey: "provinceResidence",options: optionsDepartaments },
    { title: "Postal Code", type: "number", nameKey: "postalCodeResidence" },
  ]



  const handleChange = (nameKey,change) => {
    setForm({
      ...form,
      [nameKey]:change
    })
  }


  useEffect(()=>{
    console.log(form,"form")
    const {Email,Username,Password,confirmPassword,firstName,lastName,phoneNumber,address,city,province,postalCode,verify} = form;
    if((Email != "" && Username != "" && Password != "" && confirmPassword != "" && firstName!= "" && lastName != "" && phoneNumber!= "" && address != "" && city != "" && province != "" && postalCode != "") && Password === confirmPassword){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[form])

  return (
    <div className=' min-h-screen w-full bg-no-repeat bg-center bg-cover flex justify-center items-center box-border p-2' style={{ backgroundImage: `url('Images/Register/imagen_fondo.jpeg')` }}>
      <div className='w-[600px] bg-whiteBioWaste rounded-lg text-center box-border p-4'>
        {!pass ? (
          <>
          <span className=' text-xl'>Create a new Administrator account</span>
        <div className='flex justify-center items-center mb-4'>
          <p>Do you already have an account?</p>
          <Link className=' text-blueBioWaste' to={'/'}>log in</Link>
        </div>
        <FormB handleChange={handleChange} list={AdminProps} form={form} />
        <div className='mt-4 w-full border border-grayBioWaste' />
        <FormB handleChange={handleChange} list={AdminProps2} form={form}  />
        <div className='mt-4 w-full border border-grayBioWaste' />
        <div className='flex flex-col justify-start items-start mt-4 px-4'>
          <div className='flex justify-start items-start'>
            <input
            onChange={()=>{}}//aqui se despachara la accion para mandar la notificacion al correo
              type='checkbox'
            />
            <p>By clicking here, a verification to validate your account will be sent to your email/phone, the code will be sent once but you can request another one at any time.</p>
          </div>
          <button className=' bg-greenBioWaste px-5 py-1 rounded-lg font-bold text-xl text-white'>Verify</button>
        </div>
        <div className='mt-4 w-full border border-grayBioWaste' />
        <Button
        onClick={()=>{setPass(true)}}
         className={`px-5 py-1 rounded-lg bg-blueBioWaste text-white text-xl mt-2 ${disabled ? " cursor-no-drop":"cursor-pointer hover:bg-greenBioWaste duration-500 transition"}`}
         disabled={disabled}
         >Create Account</Button>

          <div className='mt-6'>
            <FooterTitles/>
          </div>
          </>
        ): <CreateResidence handleChange={handleChange} list={Recidence}/> }
      </div>
    </div>
  )
}

export default RegisterAdminTemplate