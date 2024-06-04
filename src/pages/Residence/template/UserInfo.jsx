import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RachaUser from '../../Inicio/components/RachaUser';
import HeaderUserInfo from '../../Inicio/components/HeaderUserInfo';
import Swal from 'sweetalert2';
import MonitoringPlan from '../../Inicio/components/MonitoringPlan';
import CommentsUser from '../../Inicio/components/CommentsUser';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserById } from '../../../redux/Slices/Users/UserSlice';
import { getUser } from '../../../helpers/tools';
const UserInfo = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    
    const { userActual,} = useSelector((state) => ({
        userActual: state.Users.userActual,
    }))

    const [User,setUser] = useState({}) 
    const [findUser, setFindUser] = useState({})
    const [id, setId] = useState(0)
    const [profile, setProfile] = useState(false);


    useEffect(()=>{
        const idUser = userId.split('-');
        if(idUser[1].trim() == "Profile"){
            setProfile(true);
        }
        setId(idUser[0].trim())
        const user = getUser();
        setUser(user);
        dispatch(GetUserById(idUser[0].trim()))

    },[userId])

    useEffect(()=>{
        setFindUser(userActual)
    },[userActual])


    return (
        <div className='w-full h-full px-4 box-border flex justify-center  items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{ backgroundImage: "url('/Images/Main/fondoMain.jpg')" }}>
            <div className='w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl flex flex-col overflow-auto'>

                <div className='w-full md:h-[35%] py-4 px-8 box-border flex flex-col md:flex-row justify-around'>
                    <div className='md:w-[70%]  mr-4 box-border h-full'>
                        <HeaderUserInfo profile={profile} nameUser={userActual?.username} apt={userActual?.apartment} idUser={id} />
                    </div>
                    <div className=' flex-grow h-full'>
                        <RachaUser racha={userActual?.streak} />
                    </div>


                </div>

                <div className='w-full flex-grow p-4 box-border flex flex-col md:flex-row'>
                    <div className='w-full md:w-3/5 flex flex-col h-full bg-grayUser box-border p-4 rounded-xl mr-4'>
                        <h3 className=' text-blueMainTtile text-xl '>Monitoring plan</h3>
                        <div className=' rounded-lg w-full border-b-2 border-slate-300' />

                        <div className=' h-auto flex-grow w-full mt-1 overflow-hidden'>     {/*CONTENIDO---------------------  */}
                            <MonitoringPlan plans={userActual?.plans} />
                        </div>
                    </div>

                    {User.userType == "admin" && !profile ? (
                        <div className=' w-full md:flex-grow min-h-[400px] md:h-full'>
                        <CommentsUser/>
                    </div>
                    ):null}

                </div>


            </div>
        </div>
    )
}

export default UserInfo