import React from 'react'
import PropTypes from 'prop-types';
const InfoRectangle = ({title,description,urlImage}) => {
  return (
    <div className='w-full h-full flex flex-col justify-start item-center box-border p-2 hover:bg-blueBioWaste rounded-2xl transition duration-200 cursor-pointer'>
        <div className='w-full h-[200px] bg-whiteBioWaste flex justify-center items-center rounded-2xl'> 
            <img className='max-h-full'  src={urlImage} alt={`image ${title}`}/>
        </div>
        <span className=' text-center text-xl lg:text-3xl py-3'>{title}</span>
        <p className='text-sm'>{description}</p>
    </div>
  )
}


InfoRectangle.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    urlImage:PropTypes.string.isRequired,
};

export default InfoRectangle