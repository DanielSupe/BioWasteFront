import React, { useEffect } from 'react'
import PlanProgress from '../../Inicio/components/PlanProgress'
import PlanProgressMonitoring from '../../Inicio/components/planProgressMonitoring'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../helpers/tools'
import { getPlan } from '../../../redux/Slices/MonitoringPlan/PlanSlice'

const MonitoringPlanTemplate = () => {

    const { data} = useSelector((state) => ({
        data: state.Plan.data,
    }))

    const dispatch = useDispatch();


    useEffect(()=>{
        const user = getUser();
        if(user.userType != "admin"){
            dispatch(getPlan(user._id))
        }
    },[])


    const listMap = [
        {title:"#1 - From the plate to the plant pot",urlImage:"/Images/Main/imagePlan_1.png", progress:"plan1",link:"/Main/MonitorinPlan/plan/plan1"},
        {title:"#2 - bottles and love",urlImage:"/Images/Main/imagePlan_2.png", progress:"plan2",link:"/Main/MonitorinPlan/plan/plan2"},
        {title:"#3 - Clean with remains",urlImage:"/Images/Main/imagePlan_3.png", progress:"plan3",link:"/Main/MonitorinPlan/plan/plan3"}
    ]
  return (
    <div className='w-full h-full px-4 box-border flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
    <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl p-4 box-border flex flex-col relative overflow-auto'>
        <div className='w-full h-full border-t-2 border-grayTenue flex flex-col justify-start items-center'>
            {data ? (<>{listMap.map((plan)=>{
                return(
                    <PlanProgressMonitoring key={plan.title} title={plan.title} urlImage={plan.urlImage}  progress={data[plan.progress].progress} link={plan.link}/>
                )
            })}</>):<p className='text-center box-border p-4'>No hay planes</p>}
            


        </div>
    </div>
</div>
  )
}

export default MonitoringPlanTemplate