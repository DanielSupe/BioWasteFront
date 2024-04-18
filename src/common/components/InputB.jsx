import React from 'react'
import PropTypes from 'prop-types';
import { Input} from 'reactstrap'
import { CiCircleInfo } from "react-icons/ci";
import Swal from 'sweetalert2';
const InputB = ({
    type="text",
    placeholder="",
    title,
    nameKey,
    handleChange,
    classname = " w-full mt-1 mr-2 pt-2 px-2 pb-1 bg-transparent border-b border-black focus:outline-none",
    value,
    options,
    secondInput,
    info
}) => {



  const swalInfo = (info)=>{
    Swal.fire({
      icon: 'info',
      title: 'Information',
      text: info,
      confirmButtonText: 'accept',
      customClass: {
        container: 'z-9999', // ajusta este valor según sea necesario
        popup: 'z-9999', // ajusta este valor según sea necesario
        backdrop: 'z-9999', // ajusta este valor según sea necesario
      },
    });
  }


  return (
    <div className=' w-full flex justify-start items-end'>
        <span className=' text-lg pr-2 whitespace-nowrap'>{title}</span>

        {type == "select" ? 
        
        
        (<Input
          type="select"
          className="w-[200px] mt-2 p-2 bg-transparent border border-black rounded-lg shadow-inner"
          value={value}
          onChange={(e) => handleChange(nameKey, e.target.value)}
        >
          <option >-Select-</option>

          {options && options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </Input>):
        
        
        (
            <>
        <Input
            type={type}
            placeholder={placeholder}
            className={classname}
            onChange={(e)=>{handleChange(nameKey, e.target.value)}}
            value={value}
        />

        {secondInput ? (
            <Input
            type={secondInput.type}
            placeholder={secondInput.placeholder}
            className={classname}
            onChange={(e)=>{handleChange(secondInput.nameKey, e.target.value)}}
            value={secondInput.value}
        />
        ):null}

            </>
        )}

        {info ? <CiCircleInfo onClick={()=>{swalInfo(info)}} className=' pl-2 w-12 h-12 text-GreenRecycle cursor-pointer'/>:null}

    </div>
  )
}

InputB.propTypes = {
    type:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    nameKey:PropTypes.string.isRequired,
    handleChange:PropTypes.func.isRequired,
    classname:PropTypes.string,
    value:PropTypes.any.isRequired,
    options:PropTypes.any,
    placeholder: PropTypes.string,
    secondInput: PropTypes.any,
    info:PropTypes.string
};


export default InputB