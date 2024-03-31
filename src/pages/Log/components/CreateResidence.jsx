import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types';
import FooterTitles from '../../../common/components/FooterTitles'
import FormB from '../../../common/components/FormB';
import { useDispatch, useSelector } from 'react-redux';
import { showProgress } from '../../../helpers/swals';
import { ResidenceUserAdmin } from '../../../redux/Slices/authentication/RegisterAdmin/RegisterAdminSlice';

const CreateResidence = ({handleChange,list,form}) => {

  const { ResidenceLoading, Residenceerror, Residenceexito } = useSelector((state) => ({
    Residenceerror: state.RegisterAdmin.Residenceerror,
    ResidenceLoading: state.RegisterAdmin.ResidenceLoading,
    Residenceexito: state.RegisterAdmin.Residenceexito,

  }))
  const history = useNavigate()
  const dispatch = useDispatch();

  useEffect(()=>{
    const {residenceName,numberResidents,emergencyNumber,addressResidence,cityResidence,provinceResidence,postalCodeResidence} = form;
    if(residenceName != "" && numberResidents!="" && emergencyNumber!="" && addressResidence!="" &&cityResidence!="" &&provinceResidence!="" &&postalCodeResidence!="" && provinceResidence != "-Select-" && numberResidents != "-Select-" ){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[form])

  const createResidense= ()=>{
    showProgress()
    dispatch(ResidenceUserAdmin(form))
  }

  useEffect(()=>{
    if(Residenceexito){
      console.log("Entrooo al historyy")
      history('/Inicio')
    }
  },[Residenceexito])


  const [disabled,setDisabled] = useState(true)
  return (
    <>
        <span className=' text-xl'>Create Residence</span>
        <FormB handleChange={handleChange} list={list} form={form} />
        <div className='mt-4 w-full border border-grayBioWaste' />
{/* ------------------------------------------- */}

        <Button
        onClick={()=>{createResidense()}}
         className={`w-full py-1 rounded-lg bg-blueBioWaste text-white text-xl mt-2 ${disabled ? " cursor-no-drop":"cursor-pointer hover:bg-greenBioWaste duration-500 transition"}`}
         disabled={disabled}
         
         >Accept</Button>

          <div className='mt-6'>
            <FooterTitles/>
          </div>

    </>
  )
}

CreateResidence.propTypes = {
    handleChange:PropTypes.func.isRequired,
    list: PropTypes.any.isRequired,
    form:PropTypes.any.isRequired
};


export default CreateResidence