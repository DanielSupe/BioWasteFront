import React from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NumberContacto, PrefijoContacto } from '../../../common/contants';
const ContactoFooter = () => {
  return (
    <div className=' w-full h-full bg-gray-200 flex justify-start items-center'>
        <span className=' text-3xl box-border p-3'><MdOutlinePhoneInTalk/></span>
        <div className=' border-x-2 border-black flex justify-center items-center text-center flex-col'>
            <p className='font-medium'>Contacto</p>
            <p className=' font-medium text-lg box-border px-4'>{PrefijoContacto}-{NumberContacto}</p>
        </div>  

    </div>
  )
}

export default ContactoFooter