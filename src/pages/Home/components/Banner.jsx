import React from 'react'
import PropTypes from 'prop-types';
const BannerHome = ({items}) => {
  return (
    <div className=" max-h-min w-full grid grid-cols-1 gap-y-1 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-1 box-border p-2">
      {items.map((x)=>{
        return(<div key={x.description} className={`flex flex-col justify-start items-center`}>
          <div className='w-12 h-12  xl:w-14 xl:h-14 m-4 flex justify-center items-center'>
           {x.icon}
          </div>
          <p className=' max-w-md'>{x.description}</p>
        </div>)
      })}
    </div>
  )
}

BannerHome.propTypes = {
   items:PropTypes.any.isRequired
  };
  

export default BannerHome;