import React, { useEffect, useState } from 'react'
import ListadoUsuarios from '../components/ListadoUsuarios'
import ProgressBar from '../components/ProgressBar'
import MonitoringPlan from '../components/MonitoringPlan'
import Popup from '../../../common/components/IpopupB'
import Tutorial from '../components/Tutorial'
import { useDispatch, useSelector } from 'react-redux'
import { MostrarContactoExito, NextPass, ReiniciarPass } from '../../../redux/Slices/Tutorial/TutorialSlice'
import RachaUser from '../components/RachaUser'
import { GetUser } from '../../../redux/Slices/Users/UserSlice'
import { reinicioExitoAdmin } from '../../../redux/Slices/authentication/RegisterAdmin/RegisterAdminSlice'
import { reinicioExitoUser } from '../../../redux/Slices/authentication/RegisterSlice'

const TemplateInicio = () => {
  const dispatch = useDispatch();

  const { pass,exitoAdmin,exitoUser,TutorialSuccest,listUser,contactoVisible} = useSelector((state) => ({
    contactoVisible: state.Tutorial.contactoVisible,
    pass: state.Tutorial.pass,
    TutorialSuccest: state.Tutorial.TutorialSuccest,
    exitoAdmin: state.RegisterAdmin.exito,
    exitoUser: state.Register.exito,
    listUser: state.Users.data,

}))

  const [popUpTutorial, setPopUpTutorial] = useState(false);

  const handlePopUp = ()=>{
    setPopUpTutorial(!popUpTutorial);
    dispatch(ReiniciarPass());
}

const nextPassTutorial = ()=>{
  if(pass >= 5){
    handlePopUp()
  }else{
    dispatch(NextPass())
  }
}

useEffect(()=>{
  dispatch(GetUser())
  if((exitoAdmin || exitoUser) && !TutorialSuccest ){
    handlePopUp()
    dispatch(reinicioExitoAdmin())
    dispatch(reinicioExitoUser())
  }
},[])

const cerrarPopupContacto = (name)=>{
  dispatch(MostrarContactoExito())
}

  return (
    <div className='w-full h-full p-4 md:p-12 box-border flex flex-col md:flex-row justify-start md:justify-center  items-start md:items-center  bg-cover bg-center bg-no-repeat overflow-auto' style={{ backgroundImage: `url('/Images/Main/fondoMain.jpg')` }}>
      <div className={`${pass == 5 ? "z-[1204]":""} h-full min-h-[200px] w-full md:w-1/2 bg-white rounded-lg box-border md:p-3 md:mr-9 flex flex-col mb-1 md:mb-0`}>
        <h3 className=' text-blueMainTtile text-xl '>Monitoring plan</h3>
        <div className=' rounded-lg w-full border-b-2 border-slate-300'/>

        <div className=' h-auto flex-grow w-full mt-1 overflow-hidden'>     {/*CONTENIDO---------------------  */}
          <MonitoringPlan/>
        </div>
      </div>


     {/* Segundo cuadroooo -----------------------------------------*/}
      <div className='h-full min-h-[200px] w-full md:w-1/3 rounded-lg flex flex-col gap-4'>

        <div className={`w-full h-1/3 ${pass == 3 ? "z-[1204]":""}`}>
          <RachaUser pass={pass} racha={100}/>
        </div>



        {/* LISTADO DE USUARIO------------------------------------------------------- */}
        <div className={`${pass == 4 ? "z-[1204]":""} bg-white w-full h-full rounded-lg overflow-hidden flex flex-col`}>
          <div className='text-2xl w-full box-border p-1 text-white bg-blueBioWaste'>Residence</div>


          <div className='h-auto flex-grow w-full flex flex-col justify-start items-center overflow-auto box-border p-3'>
            <ListadoUsuarios list={listUser}/>
          </div>
        </div>

      </div>

      <Popup onClickPopup={nextPassTutorial} isOpen={popUpTutorial} onClose={handlePopUp} name={"New Account"}>
                <Tutorial/>
            </Popup>


    </div>
  )
}

export default TemplateInicio