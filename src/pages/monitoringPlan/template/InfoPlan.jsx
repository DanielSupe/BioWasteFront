import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ItemPlan from '../components/itemPlan';
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../helpers/tools';
import { UpdatePlanMo, getPlan } from '../../../redux/Slices/MonitoringPlan/PlanSlice';

const InfoPlan = () => {
    const { planId } = useParams();
    const dispatch = useDispatch();
    const history = useNavigate()

    const { data} = useSelector((state) => ({
        data: state.Plan.data,
    }))

    const [list,setList] = useState([])


    const plan1 = [
        {title:"1 - Collect Organic Waste",parrafo:"Place food scraps such as fruit and vegetable peelings and other organic waste in a container.(choose a container that can be closed to avoid strong odors).",urlImage:"/Images/MonitoringPlan/plan1_1.png",state:false,color:"bg-[#FFF84D]",rango:[0,1]},
        {title:"2 - Manage Waste",parrafo:"In a larger container (like a bottle) we will add a little soil, later we will add our organic waste along with shredded paper and a little more soil (this way we will ensure that our compost does not smell strong and we will improve its decomposition).",urlImage:"/Images/MonitoringPlan/plan1_2.png",state:false,color:"bg-[#FFF84D]",rango:[1,40]},
        {title:"3 - Correct use of Compost",parrafo:"After a few days and the compost is well hydrated, we can use it to fertilize our plants. Bury the compost deep in the soil where you have your plants. Well done, repeat these steps as many times as you want!",urlImage:"/Images/MonitoringPlan/plan1_3.png",state:false,color:"bg-[#FFF84D]",rango:[40,70]},
    ]
    const plan2 = [
        {title:" 1 -  bottles",parrafo:"Collect several plastic bottles, you can use bottles that you use in your daily life or bottles that you get on the street, clean them properly and dry them so you can use them.",urlImage:"/Images/MonitoringPlan/plan2_1.png",state:false,color:"bg-[#83A5FF]",rango:[0,1]},
        {title:" 2 - love",parrafo:"Collect plastic wrappers (like potato or cookie wrappers) and place them in the bottles, to make this process easier you can tear the wrappers and make them smaller, do this process as many times as you can and seal them.",urlImage:"/Images/MonitoringPlan/plan2_2.png",state:false,color:"bg-[#83A5FF]",rango:[1,40]},
        {title:" 3 -  love bottles",parrafo:"Now look for the green points in your city so you can take the bottles and recycle them correctly.",urlImage:"/Images/MonitoringPlan/plan2_3.png",state:false,color:"bg-[#83A5FF]",rango:[40,70]},
    ]
    const plan3 = [
        {title:" 1 - Collect citrus peels",parrafo:"In a container, place the fresh peels of citrus fruits such as oranges or lemons (it is advisable to use only one of these citrus fruits and not both at the same time), after collecting a large amount you can store them in the freezer so as not to spoil them until you take the next step.",urlImage:"/Images/MonitoringPlan/plan3_1.png",state:false,color:"bg-[#86FF1D]",rango:[0,1]},
        {title:" 2 - create the cleaner",parrafo:"Now in a glass container we will place our citrus peels along with rosemary leaves and a little cinnamon (this will increase the smell of our cleaner) finally we will add white vinegar until the container is full, we will seal it and wait 2 to 3 weeks until be ready.",urlImage:"/Images/MonitoringPlan/plan3_2.png",state:false,color:"bg-[#86FF1D]",rango:[1,40]},
        {title:" 3 - preparation for use",parrafo:"After waiting, our cleaner will be almost ready, in a spray bottle we will put a cup of the cleaner for every 2 cups of water that we add and to finish, we can optionally add drops of orange extract to further enhance the smell of our cleaner.",urlImage:"/Images/MonitoringPlan/plan3_3.png",state:false,color:"bg-[#86FF1D]",rango:[40,70]},
    ]


    useEffect(()=>{
        const user = getUser();
        if(user.userType != "admin"){
            dispatch(getPlan(user._id))
        }
    },[])



    const planSelect = ()=>{
        switch(planId || ""){
            case "plan1":
                return plan1;
            case "plan2":
                return plan2;
            
            case "plan3":
                return plan3
        }
    }

    const UpdatePlan = ()=>{//debe mandar el id y plan (plan1, plan2,plan3)
        const user = getUser();
        dispatch(UpdatePlanMo({id:user._id,plan:planId}))
        history('/Main/MonitorinPlan')
    }




  return (
    <div className='w-full h-full px-4 box-border flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
    <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl p-4 box-border flex flex-col relative overflow-auto'>
        <Link to={'/Main/MonitorinPlan'} className=' absolute top-0 left-0 p-2 rounded-r-[50%] bg-BlueHeader hover:text-red-600 '><IoArrowBack/></Link>
        <div className='w-full h-full border-y-2 border-grayTenue flex justify-around items-start flex-wrap overflow-y-auto'>
          {data ? (<> {(planSelect()).map((plan)=>{
                return(
                <div key={plan.title} className='w-[230px] min-h-[400px] max-h-[500px] h-[95%] mt-4'>
                    <ItemPlan func={UpdatePlan} porcentaje={data[planId].progress} rango={plan.rango} title={plan.title} parrafo={plan.parrafo} urlImage={plan.urlImage} color={plan.color} />
                </div>
                )
           })}</>):null}

        </div>
    </div>
</div>
  )
}

export default InfoPlan