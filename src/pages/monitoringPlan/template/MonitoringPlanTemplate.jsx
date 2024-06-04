import React from 'react'
import PlanProgress from '../../Inicio/components/PlanProgress'
import PlanProgressMonitoring from '../../Inicio/components/planProgressMonitoring'

const MonitoringPlanTemplate = () => {


    const listMap = [
        {title:"#1 - From the plate to the plant pot",urlImage:"/Images/Main/imagePlan_1.png", progress:50,link:"/Main/MonitorinPlan/plan/1"},
        {title:"#2 - bottles and love",urlImage:"/Images/Main/imagePlan_2.png", progress:30,link:"/Main/MonitorinPlan/plan/2"},
        {title:"#3 - Clean with remains",urlImage:"/Images/Main/imagePlan_3.png", progress:20,link:"/Main/MonitorinPlan/plan/3"}
    ]
  return (
    <div className='w-full h-full px-4 box-border flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
    <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl p-4 box-border flex flex-col relative overflow-auto'>
        <div className='w-full h-full border-t-2 border-grayTenue flex flex-col justify-start items-center'>
            {listMap.map((plan)=>{
                return(
                    <PlanProgressMonitoring key={plan.title} title={plan.title} urlImage={plan.urlImage}  progress={plan.progress} link={plan.link}/>
                )
            })}
            


        </div>
    </div>
</div>
  )
}

export default MonitoringPlanTemplate