import React, { useEffect, useState } from 'react'
import IconBioWaste from './IconBioWaste'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LinkNav = [
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "New Account", link:"/Register"},
  {title: "Login", link:"/Login"},
]

const inPage = [
  {title: "Home", link:"/Main"},
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "Settings", link:"/Main/settings"},
  {title: <PermIdentityIcon/> , link:"/Main/Profile"},//El icono lo tengo que pasar a un componente
  {title: <FaSignOutAlt/> , link:"/Logout"},
]

const NavB = ({handlePopUp}) => {

  const [user, setUser] = useState();

  const { Loading, User, exito } = useSelector((state) => ({
    User: state.Login.User,
    Loading: state.Login.Loading,
    exito: state.Login.exito,
  }))

  const { pass } = useSelector((state) => ({
    pass: state.Tutorial.pass,

}))


useEffect(() => {
  if(localStorage.getItem("Autentication")){
    setUser(localStorage.getItem("Autentication"))
  }
}, [])


  return (
    <div className='flex w-full justify-start items-center'>
      <Link to={'/'} className='h-full'>
        <IconBioWaste Log={!user  ? false:true}/>
      </Link>
      <div className='hidden md:block ml-auto'>
        <div className='h-full flex justify-center items-center '>
          {!user ? 
          
          (LinkNav.map((rut, index)=>{
              return(
                <p onClick={()=>{handlePopUp(rut.title)}} className=' py-1 px-2 rounded-2xl mx-2 bg-whiteBioWaste font-bold cursor-pointer hover:bg-blueBioWaste' key={index}> {rut.title}</p>

              )
          })):(
            inPage.map((rut, index)=>{
              return(
                <Link to={`${rut.link}`}  className={` ${pass == 1 ? " bg-yellow-300":"bg-whiteBioWaste"} py-1 px-2 rounded-2xl mx-2  font-bold cursor-pointer hover:bg-blueBioWaste`} key={index}> {rut.title}</Link>

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