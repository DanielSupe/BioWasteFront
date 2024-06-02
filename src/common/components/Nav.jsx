import React, { useEffect, useState } from 'react'
import IconBioWaste from './IconBioWaste'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MostrarContacto } from '../../redux/Slices/Tutorial/TutorialSlice';
import { getUserId } from '../../helpers/tools';


const NavB = ({handlePopUp}) => {

  const [user, setUser] = useState();
  const dispatch = useDispatch();

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
    setUser(JSON.parse(localStorage.getItem("Autentication")))
  }
}, [])


const contactoPopup = ()=>{
  dispatch(MostrarContacto())
}

const LinkNav = [
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "New Account", link:"/Register"},
  {title: "Login", link:"/Login"},
]

const inPage = [
  {title: "Home", link:"/Main"},
  {title: "Contact BioWasted", link:"/Contacto"},
  {title: "Settings", link:"/Main/settings"},
  {title: <PermIdentityIcon/> , link:user && user._id ? `/Main/Residence/User/${user._id}` : '/'},//El icono lo tengo que pasar a un componente
  {title: <FaSignOutAlt/> , link:"/Logout"},
]

  return (
    <div className='flex w-full justify-start items-center'>
      <Link to={'/'} className='h-full'>
        <IconBioWaste Log={!user  ? false:true}/>
      </Link>
      <div className='hidden md:block ml-auto'>
        <div className='h-full flex justify-center items-center '>
          {!user ? 
          
          (LinkNav.map((rut, index)=>{
            if(rut.title == "Contact BioWasted"){
              return(
                <p onClick={()=>{contactoPopup()}} className=' py-1 px-2 rounded-2xl mx-2 bg-whiteBioWaste font-bold cursor-pointer hover:bg-blueBioWaste' key={index}> {rut.title}</p>
              )
            }else{
              return(
                <p onClick={()=>{handlePopUp(rut.title)}} className=' py-1 px-2 rounded-2xl mx-2 bg-whiteBioWaste font-bold cursor-pointer hover:bg-blueBioWaste' key={index}> {rut.title}</p>

              )
            }

          })):(
            inPage.map((rut, index)=>{
              if(rut.title == "Contact BioWasted"){
                return(
                  <Link onClick={()=>{contactoPopup()}}  className={` ${pass == 1 ? " bg-yellow-300":"bg-whiteBioWaste"} py-1 px-2 rounded-2xl mx-2  font-bold cursor-pointer hover:bg-blueBioWaste`} key={index}> {rut.title}</Link>
                )
              }else{
                return(
                  <Link to={`${rut.link}`}  className={` ${pass == 1 ? " bg-yellow-300":"bg-whiteBioWaste"} py-1 px-2 rounded-2xl mx-2  font-bold cursor-pointer hover:bg-blueBioWaste`} key={index}> {rut.title}</Link>
  
                )
              }
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