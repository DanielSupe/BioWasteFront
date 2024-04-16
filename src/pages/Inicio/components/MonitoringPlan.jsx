import React from 'react'
import ProgressBar from './ProgressBar'

const MonitoringPlan = () => {

    const list = [
        { title: "Plan #1", urlImage: "Images/Main/imagePlan_1.png", progress: 50 },
        { title: "Plan #2", urlImage: "Images/Main/imagePlan_2.png", progress: 20 },
        { title: "Plan #3", urlImage: "Images/Main/imagePlan_3.png", progress: 90 },
    ]


    return (
        <div className='w-full h-full flex flex-col overflow-auto'>
            {list.map((plan, index) => {
                return (
                    <div className='flex w-full justify-start items-start min-h-[120px] h-1/3 border-b-2 border-slate-300 ' key={`${plan.title}-${index}`}>
                        <div className='flex h-full flex-col justify-center items-start overflow-hidden'>
                            <p className=' font-bold text-gray-400 text-xl'>{plan.title}</p>
                            <img className='w-[150px]' src={plan.urlImage} />
                        </div>
                        <div className='h-full w-full bg flex justify-center items-center '>
                            <div className='w-[80%] h-full flex flex-col justify-center items-center'>
                                <p className=' font-medium text-gray-400 text-xl text-center p-2'>Progress</p>
                                <div className='flex justify-center w-full'><ProgressBar progress={plan.progress}/></div>

                            </div>


                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default MonitoringPlan