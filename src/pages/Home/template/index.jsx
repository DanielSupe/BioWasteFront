import React, { useEffect, useState } from 'react'
import NavB from '../../../common/components/Nav'
import HeroHome from '../components/HeroHome'
import BannerHome from '../components/Banner'
import { RiRecycleFill } from "react-icons/ri";
import { CiCloudOn } from "react-icons/ci";
import { PiUserFill } from "react-icons/pi";
import ContactoFooter from '../components/ContactoFooter';
import Popup from '../../../common/components/IpopupB';
import OptionsRegister from '../components/OptionsRegister';
import LoginHome from '../components/LoginHome';
const TemplateHome = () => {


        const [popUpRegister, setPopUpRegister] = useState(false);
        const [popUpLogin, setPopUpLogin] = useState(false);


    const listeBanner = [
        { icon: <p className=' text-6xl'> <CiCloudOn /></p>, description: "BioWaste has a database that allows the user to save and edit all their information without fear of making mistakes." },
        { icon: <p className=' text-7xl text-GreenRecycle'> <RiRecycleFill /></p>, description: "This is a page that teaches you how to use biodegradable waste in a profitable way and have greater knowledge of why it is beneficial to reuse this waste for other functions." },
        { icon: <p className=' text-6xl text-gray-300'> <PiUserFill /></p>, description: "Guaranteed user security, no one but you will be able to know your personal information and edit it comfortably." },

    ]


    const handlePopUp = (title)=>{
        console.log("entro")
        switch(title){
            case "New Account":
                setPopUpRegister(!popUpRegister);
                break;

            case "Login":
                setPopUpLogin(!popUpLogin)
                break;
        }
    }


    useEffect(()=>{
        console.log(popUpLogin,popUpRegister, "POPUPPP")

    },[popUpLogin,popUpRegister])

    return (
        <div className=' h-full sm:h-auto w-full'>
            <div className=' h-[100vh] lg:h-[65vh] xl:h-[60vh]  bg-cover bg-center bg-no-repeat flex flex-col items-start  box-border px-2 py-1' style={{ backgroundImage: `url('Images/Home/imagen_03.jpg')` }}>
                <NavB handlePopUp={handlePopUp} />
                <p className='font-bold text-xs sm:text-md'>Learn to reuse Biodegradable waste!</p>
                <div className=' h-full w-full flex justify-center items-center flex-col'>
                    <HeroHome menu={true} description='BioWaste is a website dedicated to residents of a community who want to generate a positive ecological change in their residence, which will be viewed by an administrator who will be in charge of reviewing the progress of all residents.' title='What is BioWaste?' />
                </div>
            </div>
            <div className='overflow-hidden w-full'>
                <BannerHome items={listeBanner} />
            </div>
            <div className=' mt-5'>
                <ContactoFooter />
            </div>

            <div className='w-full flex flex-col justify-center items-start'>
                <p className='font-medium text-lg box-border px-2'>Integrative proyect2/ 2024</p>
                <div className=' flex justify-center items-center text-md h-full'>
                    <div className='h-full border-black border-r-2 px-2'>Privacidad</div>
                    <p className='border-black border-r-2 px-2'>Terminos de uso</p>
                    <p className='px-2'>Preferencias sobre cookies</p>
                </div>
            </div>





            <Popup isOpen={popUpRegister} onClose={handlePopUp} name={"New Account"}>
                <OptionsRegister/>
            </Popup>

            <Popup isOpen={popUpLogin} onClose={handlePopUp} name={"Login"}>
                <div className=' sm:w-[400px] sm:h-[390px]'>
                    <LoginHome/>
                </div>
            </Popup>



        </div>
    )
}

export default TemplateHome