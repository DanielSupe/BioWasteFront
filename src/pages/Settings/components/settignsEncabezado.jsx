import React from 'react'
import { photoDefeft } from '../../../common/contants'
import { PiCameraThin } from "react-icons/pi";
import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import FormB from '../../../common/components/FormB';
const SettignsEncabezado = ({form,changeUser,list}) => {


  return (
    <div className='w-full h-full bg-grayUser rounded-xl box-border p-2 pr-4 flex shadow-lg'>
        <div className=' inline-flex justify-start items-center h-full'>
            <div className='h-full relative inline-flex justify-center items-center'>
                <img className=' rounded-[50%] h-full' src={form && form.urlPhoto ? form.urlPhoto :photoDefeft}/>
                <span className=' absolute'><PiCameraThin size={70}/></span>
            </div>

            <div className=' inline-flex flex-col justify-center items-start text-left box-border p-2'>
                <FormB form={form} handleChange={changeUser} list={list}/>
            </div>

        </div>

        <span className=' ml-auto h-full inline-flex justify-center items-center mr-4'><IoSettingsOutline size={70} /></span>

    </div>
  )
}

SettignsEncabezado.propTypes = {
    form: PropTypes.any,
    list: PropTypes.any.isRequired,
    changeUser:PropTypes.func.isRequired
};

export default SettignsEncabezado