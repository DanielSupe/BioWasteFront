import React from 'react'
import PropTypes from 'prop-types';
import InputB from './InputB';
const FormB = ({list,handleChange,form}) => {
  return (
    <div className=' w-full h-auto'>
        <div className=' w-full sm:w-[80%] h-full flex flex-col items-start justify-start'>
        {list.map((campo)=>{
            return(
                <InputB
                type={campo.type}
                title={campo.title}
                nameKey={campo.nameKey}
                placeholder={campo.placeholder}
                className={campo.classname}
                handleChange={handleChange}
                value={form[campo.nameKey]}
                key={campo.title}
                options={campo.options ? campo.options:[]}
                secondInput={campo.secondInput ? campo.secondInput:null}
                info={campo.info ? campo.info: null}
                />
            )
        })}
        </div>

    </div>
  )
  
}


FormB.propTypes = {
    list:PropTypes.any.isRequired,
    handleChange:PropTypes.func.isRequired,
    form:PropTypes.any.isRequired
};

export default FormB