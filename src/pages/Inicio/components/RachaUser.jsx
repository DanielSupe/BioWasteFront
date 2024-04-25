import React from 'react'
import PropTypes from 'prop-types';
const RachaUser = ({pass,racha}) => {
  return (
    <div className={`${pass == 3 ? "z-[1204]":""}  w-full h-full rounded-lg bg-custom-gradient flex justify-center items-center`}>
          <img className=' min-h-[80%] max-h-[100%] box-border p-5' src='/Images/Main/LlamaMain.png'/>
          <p className=' font-bold text-6xl text-white'>{racha}</p>
        </div>
  )
}

RachaUser.propTypes = {
    pass: PropTypes.number.isRequired,
    racha: PropTypes.number
};

export default RachaUser