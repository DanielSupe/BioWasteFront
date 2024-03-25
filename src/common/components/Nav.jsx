import React from 'react'
import IconBioWaste from './IconBioWaste'
import PropTypes from 'prop-types';

const LinkNav = [
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "New Account", link:"/Register"},
  {title: "Login", link:"/Login"},
]

const NavB = ({handlePopUp}) => {



  return (
    <div className='flex w-full justify-start items-center'>
      <div className='h-full'>
        <IconBioWaste/>
      </div>
      <div className='hidden md:block ml-auto'>
        <div className='h-full flex justify-center items-center '>
          {LinkNav.map((rut, index)=>{
              return(
                <p onClick={()=>{handlePopUp(rut.title)}} className=' py-1 px-2 rounded-2xl mx-2 bg-whiteBioWaste font-bold cursor-pointer hover:bg-blueBioWaste' key={index}> {rut.title}</p>

              )
          })}
        </div>
      </div>
    </div>
  )
}

NavB.propTypes = {
  handlePopUp: PropTypes.func.isRequired
};


export default NavB