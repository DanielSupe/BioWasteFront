import React, { useEffect } from 'react'
import IconBioWaste from './IconBioWaste'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const LinkNav = [
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "New Account", link:"/Register"},
  {title: "Login", link:"/Login"},
]

const inPage = [
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "Change account", link:"/Main/changeAccount"},
  {title: "Settings", link:"/Main/settings"},
  {title: <PermIdentityIcon/> , link:"/Main/Profile"},//El icono lo tengo que pasar a un componente
]

const NavB = ({handlePopUp}) => {

  const { Loading, User, exito } = useSelector((state) => ({
    User: state.Login.User,
    Loading: state.Login.Loading,
    exito: state.Login.exito,
  }))

  const { pass } = useSelector((state) => ({
    pass: state.Tutorial.pass,

}))





  return (
    <div className='flex w-full justify-start items-center'>
      <div className='h-full'>
        <IconBioWaste Log={!exito  ? false:true}/>
      </div>
      <div className='hidden md:block ml-auto'>
        <div className='h-full flex justify-center items-center '>
          {!exito ? 
          
          (LinkNav.map((rut, index)=>{
              return(
                <p onClick={()=>{handlePopUp(rut.title)}} className=' py-1 px-2 rounded-2xl mx-2 bg-whiteBioWaste font-bold cursor-pointer hover:bg-blueBioWaste' key={index}> {rut.title}</p>

              )
          })):(
            inPage.map((rut, index)=>{
              return(
                <p  className={` ${pass == 1 ? " bg-yellow-300":"bg-whiteBioWaste"} py-1 px-2 rounded-2xl mx-2  font-bold cursor-pointer hover:bg-blueBioWaste`} key={index}> {rut.title}</p>

              )
          })
          )}
        </div>
      </div>
    </div>
  )
}

NavB.propTypes = {
  handlePopUp: PropTypes.func
};


export default NavB