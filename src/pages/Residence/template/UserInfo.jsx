import React from 'react'
import { useParams } from 'react-router-dom';
import RachaUser from '../../Inicio/components/RachaUser';
import HeaderUserInfo from '../../Inicio/components/HeaderUserInfo';
import Swal from 'sweetalert2';
import MonitoringPlan from '../../Inicio/components/MonitoringPlan';
import CommentsUser from '../../Inicio/components/CommentsUser';
const UserInfo = () => {
    const { userId } = useParams();


    return (
        <div className='w-full h-full px-4 box-border flex justify-center  items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{ backgroundImage: "url('/Images/Main/fondoMain.jpg')" }}>
            <div className='w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl flex flex-col overflow-auto'>

                <div className='w-full md:h-[35%] py-4 px-8 box-border flex flex-col md:flex-row justify-around'>
                    <div className='md:w-[70%]  mr-4 box-border h-full'>
                        <HeaderUserInfo idUser={userId} />
                    </div>
                    <div className=' flex-grow h-full'>
                        <RachaUser racha={100} />
                    </div>


                </div>

                <div className='w-full flex-grow p-4 box-border flex flex-row'>
                    <div className='w-3/5 flex flex-col h-full bg-grayUser box-border p-4 rounded-xl mr-4'>
                        <h3 className=' text-blueMainTtile text-xl '>Monitoring plan</h3>
                        <div className=' rounded-lg w-full border-b-2 border-slate-300' />

                        <div className=' h-auto flex-grow w-full mt-1 overflow-hidden'>     {/*CONTENIDO---------------------  */}
                            <MonitoringPlan />
                        </div>
                    </div>

                    <div className=' flex-grow h-full'>
                        <CommentsUser/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UserInfo