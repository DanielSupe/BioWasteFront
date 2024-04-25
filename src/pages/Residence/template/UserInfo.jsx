import React from 'react'
import { useParams } from 'react-router-dom';
import RachaUser from '../../Inicio/components/RachaUser';
import HeaderUserInfo from '../../Inicio/components/HeaderUserInfo';
import Swal from 'sweetalert2';
const UserInfo = () => {
    const { userId } = useParams();


    return (
        <div className='w-full h-full px-4 box-border flex justify-center  items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{ backgroundImage: "url('/Images/Main/fondoMain.jpg')" }}>
            <div className='w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl flex flex-col md:overflow-hidden'>

                <div className='w-full md:h-[35%] py-4 px-8 box-border flex flex-col md:flex-row justify-around'>
                    <div className='w-[70%]  mr-4 box-border h-full'>
                        <HeaderUserInfo idUser={userId}/>
                    </div>
                    <div className=' flex-grow h-full'>   
                        <RachaUser racha={100}/>
                    </div>


                </div>

                <div className='w-full flex-grow p-4 box-border bg-amber-400'>

                </div>
                

            </div>
        </div>
    )
}

export default UserInfo