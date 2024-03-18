import React from 'react'
import PropTypes from 'prop-types';

const IconBioWaste = ({
    classname = "inline-flex justify-center items-center"
}) => {
  return (
    <div className='flex flex-col w-full'>
        <div className="inline-flex justify-start items-end h-full w-full">
            <div className=' bg-whiteBioWaste h-12  w-12 rounded-[50%] mr-2 mb-2'></div>
            <span className='text-5xl'>BioWaste</span>
        </div>
    </div>
  )
}


IconBioWaste.propTypes = {
    classname: PropTypes.string.isRequired, // Validar que className sea un string y sea requerido
  };
  

export default IconBioWaste