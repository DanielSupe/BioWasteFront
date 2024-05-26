import React, { useEffect, useState } from 'react'
import SettignsEncabezado from '../components/settignsEncabezado'
import { useSelector,useDispatch } from 'react-redux'
import { GetUserById, UpdateUser, addResidence } from '../../../redux/Slices/Users/UserSlice'
import { getUser } from '../../../helpers/tools'
import { FaEdit } from "react-icons/fa";
import { Input } from 'reactstrap';
import { IoSend } from "react-icons/io5";
import FormB from '../../../common/components/FormB'
import InputB from '../../../common/components/InputB'
import { showProgress } from '../../../helpers/swals'

const SettingsTemplate = () => {

  const dispatch = useDispatch();

  const { userActual,} = useSelector((state) => ({
    userActual: state.Users.userActual,
}))

    const [form,setForm] = useState({residence: "",passwordNew:""});

    const listUpdates = [
        {title:"Email",nameKey:"email",type:"email"},
        {title:"Phone number",nameKey:"phoneNumber",type:"number"},
        {title:"password",nameKey:"passwordNew",type:"password",placeholder:"write a new password"},
    ]

    const listEncabezado = [
      {title:"User",nameKey:"username",type:"text"},
      {title:"Apt",nameKey:"apartment",type:"number"},

    ]

    const handleUserUpdate = ()=>{
      showProgress()
      dispatch(UpdateUser(form))
    }

    const UpdateResidence = ()=>{
      if(form.residence != ""){
        showProgress()
        dispatch(addResidence(form.residence));
      }
    }

    const handleChange = (nameKey,change) => {
      setForm({
        ...form,
        [nameKey]:change
      })
    }

    useEffect(()=>{
      const updatedUserActual = {
        ...form,
        ...userActual,
      };
        setForm(updatedUserActual);
    },[userActual])


    useEffect(()=>{
      const user = getUser()
      dispatch(GetUserById(user.id || user._id))
    },[])


  return (
    <div className='w-full h-full px-4 box-border flex justify-center items-start bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
    <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl p-4 box-border flex flex-col relative overflow-auto'>
        <h3 className=' text-blueMainTtile text-xl '> Settings</h3>
        <div className='w-full max-h-[100px]'>
            <SettignsEncabezado list={listEncabezado} changeUser={handleChange} form={form}/>
        </div>
        <div className=' mt-4 rounded-lg w-full border-b-4 border-grayTenue rounde'/>
        <div className='w-full h-auto flex justify-start items-center'>
          <div className='w-full h-auto flex justify-start items-center'>
            <FormB handleChange={handleChange} list={listUpdates} form={form}/>
          </div>
        </div>

        <div className=' my-4 rounded-lg w-full border-b-4 border-grayTenue rounde'/>

        <div className=' inline-flex max-w-min flex-col justify-start items-start'>
            <span className=' text-gray-400 font-medium'>Residence code</span>
            <div className='flex justify-start items-center'>
            <Input
                type={'number'}
                placeholder={"search.."}
                className={" bg-gray-200 p-2 rounded-3xl"}
                onChange={(e)=>{handleChange("residence",e.target.value)}}
                value={form.residence}
                />
                <span onClick={()=>{UpdateResidence()}} className=' ml-4 cursor-pointer'><IoSend color='gray' size={30}/></span>
            </div>
        </div>

        <span onClick={()=>{handleUserUpdate()}} className=' mt-auto ml-auto box-border  mr-10 text-center cursor-pointer'>
          <FaEdit size={50}/>
          <p>Update!</p>
        </span>
    </div>
</div>
  )
}

export default SettingsTemplate