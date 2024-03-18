import React from 'react'
import IconBioWaste from './IconBioWaste'

const LinkNav = [
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "New Account", link:"/Register"},
  {title: "Login", link:"/Login"},
]

const NavB = () => {
  return (
    <div className='flex w-full justify-start items-center'>
      <div className='h-full'>
        <IconBioWaste/>
      </div>
      <div className=' ml-auto h-full flex justify-center items-center '>
        {LinkNav.map((rut, index)=>{
            return(
              <p className=' py-1 px-2 rounded-2xl mx-2 bg-whiteBioWaste font-bold' key={index}> {rut.title}</p>
            )
        })}
      </div>
    </div>
  )
}

export default NavB