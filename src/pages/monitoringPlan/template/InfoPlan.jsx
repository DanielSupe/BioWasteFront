import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemPlan from '../components/itemPlan';

const InfoPlan = () => {
    const { planId } = useParams();

    const [list,setList] = useState([])


    const plan1 = [
        {title:"1 - Collect Organic Waste",parrafo:"Place food scraps such as fruit and vegetable peelings and other organic waste in a container.(choose a container that can be closed to avoid strong odors).",urlImage:"/Images/MonitoringPlan/plan1_1.png",state:false,color:"bg-[#FFF84D]"},
        {title:"2 - Manage Waste",parrafo:"In a larger container (like a bottle) we will add a little soil, later we will add our organic waste along with shredded paper and a little more soil (this way we will ensure that our compost does not smell strong and we will improve its decomposition).",urlImage:"/Images/MonitoringPlan/plan1_2.png",state:false,color:"bg-[#FFF84D]"},
        {title:"3 - Correct use of Compost",parrafo:"After a few days and the compost is well hydrated, we can use it to fertilize our plants. Bury the compost deep in the soil where you have your plants. Well done, repeat these steps as many times as you want!",urlImage:"/Images/MonitoringPlan/plan1_3.png",state:false,color:"bg-[#FFF84D]"},
    ]
    const plan2 = [
        {title:" 1 -  bottles",parrafo:"Collect several plastic bottles, you can use bottles that you use in your daily life or bottles that you get on the street, clean them properly and dry them so you can use them.",urlImage:"/Images/MonitoringPlan/plan2_1.png",state:false,color:"bg-[#83A5FF]"},
        {title:" 2 - love",parrafo:"Collect plastic wrappers (like potato or cookie wrappers) and place them in the bottles, to make this process easier you can tear the wrappers and make them smaller, do this process as many times as you can and seal them.",urlImage:"/Images/MonitoringPlan/plan2_2.png",state:false,color:"bg-[#83A5FF]"},
        {title:" 3 -  love bottles",parrafo:"Now look for the green points in your city so you can take the bottles and recycle them correctly.",urlImage:"/Images/MonitoringPlan/plan2_3.png",state:false,color:"bg-[#83A5FF]"},
    ]
    const plan3 = [
        {title:" 1 - Collect citrus peels",parrafo:"In a container, place the fresh peels of citrus fruits such as oranges or lemons (it is advisable to use only one of these citrus fruits and not both at the same time), after collecting a large amount you can store them in the freezer so as not to spoil them until you take the next step.",urlImage:"/Images/MonitoringPlan/plan3_1.png",state:false,color:"bg-[#86FF1D]"},
        {title:" 2 - create the cleaner",parrafo:"Now in a glass container we will place our citrus peels along with rosemary leaves and a little cinnamon (this will increase the smell of our cleaner) finally we will add white vinegar until the container is full, we will seal it and wait 2 to 3 weeks until be ready.",urlImage:"/Images/MonitoringPlan/plan3_2.png",state:false,color:"bg-[#86FF1D]"},
        {title:" 3 - preparation for use",parrafo:"After waiting, our cleaner will be almost ready, in a spray bottle we will put a cup of the cleaner for every 2 cups of water that we add and to finish, we can optionally add drops of orange extract to further enhance the smell of our cleaner.",urlImage:"/Images/MonitoringPlan/plan3_3.png",state:false,color:"bg-[#86FF1D]"},
    ]



    // useEffect(()=>{
    //     switch(planId){
    //         case 1:
    //             setList(plan1)
    //         case 2:
    //     }
    // },[planId])


    const planSelect = ()=>{
        switch(planId){
            case "1":
                return plan1;
            case "2":
                return plan2;
            
            case "3":
                return plan3
        }
    }




  return (
    <div className='w-full h-full px-4 box-border flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
    <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-xl p-4 box-border flex flex-col relative overflow-auto'>
        <div className='w-full h-full border-y-2 border-grayTenue flex justify-around items-start flex-wrap overflow-y-auto'>
            {/* div a mapearse ejemplo */}
           {(planSelect()).map((plan)=>{
                return(
                <div key={plan.title} className='w-[230px] min-h-[400px] max-h-[500px] h-[95%] mt-4'>
                    <ItemPlan title={plan.title} parrafo={plan.parrafo} urlImage={plan.urlImage} color={plan.color} />
                </div>
                )
           })}

        </div>
    </div>
</div>
  )
}

export default InfoPlan