import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types';
import FooterTitles from '../../../common/components/FooterTitles'
import FormB from '../../../common/components/FormB';

const CreateResidence = ({handleChange,list}) => {

    const[form, setForm] = useState({Email:"",Password:"",confirmPassword:"",Name:"",phoneNumber:""})

  const [disabled,setDisabled] = useState(true)
  return (
    <>
        <span className=' text-xl'>Create Residence</span>
        <FormB handleChange={handleChange} list={list} form={form} />
        <div className='mt-4 w-full border border-grayBioWaste' />
{/* ------------------------------------------- */}

        <Button
        onClick={()=>{alert("ola")}}
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
    list: PropTypes.any.isRequired
};


export default CreateResidence