import React from 'react'
import PlanProgress from '../../Inicio/components/PlanProgress'
const TemplateResidence = () => {

  const photoDefeft = "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"

  const listPrueba = [
    {urlFoto:"/Images/Main/imagePlan_3.png",name:"User",idUser:"1",apt:"100",typePlan:"",progressPlan:"55",racha:"23"},
    {urlFoto:"/Images/Main/imagePlan_3.png",name:"User",idUser:"2",apt:"101",typePlan:"",progressPlan:"12",racha:"100"},
    {urlFoto:"/Images/Main/imagePlan_2.png",name:"User",idUser:"3",apt:"102",typePlan:"",progressPlan:"88",racha:"66"},
    {urlFoto:"/Images/Main/imagePlan_2.png",name:"User",idUser:"4",apt:"103",typePlan:"",progressPlan:"32",racha:"23"},
    {urlFoto:"/Images/Main/imagePlan_1.png",name:"User",idUser:"5",apt:"104",typePlan:"",progressPlan:"100",racha:"54"},
    {urlFoto:"/Images/Main/imagePlan_1.png",name:"User",idUser:"6",apt:"105",typePlan:"",progressPlan:"1",racha:"98"},
    {urlFoto:"/Images/Main/imagePlan_3.png",name:"User",idUser:"7",apt:"106",typePlan:"",progressPlan:"76",racha:"54"},
    {urlFoto:"/Images/Main/imagePlan_3.png",name:"User",idUser:"8",apt:"107",typePlan:"",progressPlan:"22",racha:"34"},
    {urlFoto:"/Images/Main/imagePlan_3.png",name:"User",idUser:"9",apt:"108",typePlan:"",progressPlan:"97",racha:"2"},
  ]

  return (
    <div className='w-full h-full px-4 box-border flex justify-center  items-end bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
        <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-t-xl p-4 box-border flex flex-col'>
            <h3 className=' text-blueMainTtile text-xl '> Residence</h3>
            <div className=' rounded-lg w-full border-b-2 border-slate-300'/>
            <div className='h-auto w-full flex-grow overflow-auto flex flex-col justify-start items-center'>
              {listPrueba.map((item)=>{
                return(
                  <div className='w-full h-auto flex justify-center items-center box-border pr-4 md:pr-0 border-b-4 border-slate-300' key={`${item.name}-${item.idUser}`}>
                    {/* primer cuadro------------------------ */}
                    <div className='flex h-full  justify-center items-center box-border'>
                      <img className='w-[45px] h-[45px] rounded-[50%] md:mr-3' src={item.urlFoto ? item.urlFoto : photoDefeft}/>
                    <div className='flex flex-col items-start'>
                      <div className='flex'>
                        <p className=' text-gray-400 font-medium text-xl text-center max-w-[70%]'>{item.name}</p>
                        <p className=' text-gray-400 font-medium text-xl text-center'>#{item.idUser}</p>
                      </div>
                      <p className=' text-gray-400 font-medium text-xl text-center'>Apt {item.apt}</p>
                    </div>
                    </div>
                    {/* segundo cuadro------------------------------------ */}
                    <div className='flex justify-center items-center h-full flex-grow overflow-hidden box-border'>
                      <PlanProgress urlImage={item.urlFoto} progress={item.progressPlan} ResidenceList={true}  title={"plan with greatest progress"}/>
                    </div>

                    <div className='h-full  flex justify-center items-center box-border'>
                      <img className=' max-h-[60%]' src='/Images/Main/LlamaMain.png'/>
                      <p className=' text-gray-400 font-medium text-2xl text-center'>{item.racha}</p>
                    </div>

                    
                  </div>
                )
              })}
            </div>
        </div>
  </div>
  )
}

export default TemplateResidence