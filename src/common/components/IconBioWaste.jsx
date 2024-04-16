import React from 'react'
import PropTypes from 'prop-types';

const IconBioWaste = ({Log}) => {
  return (
    <div className={`flex flex-col w-full ${Log ? "text-white":""}`}>
        <div className="inline-flex justify-start items-end h-full w-full">
            {!Log ? (<div className=' bg-whiteBioWaste h-12  w-12 rounded-[50%] mr-2 mb-2'></div>):null}
            <span className='text-5xl'>BioWaste</span>
        </div>
    </div>
  )
}

IconBioWaste.propTypes = {
  Log: PropTypes.bool.isRequired
};

export default IconBioWaste