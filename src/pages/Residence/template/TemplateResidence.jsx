import React from 'react'
import PlanProgress from '../../Inicio/components/PlanProgress'
import DeleteIcon from '@mui/icons-material/Delete';
const TemplateResidence = () => {

  const photoDefeft = "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"

  const listPrueba = [
    {urlFoto:"",name:"User",idUser:"1",apt:"100",typePlan:"water",progressPlan:"55",racha:"23"},
    {urlFoto:"",name:"User",idUser:"2",apt:"101",typePlan:"nature",progressPlan:"12",racha:"100"},
    {urlFoto:"",name:"User",idUser:"3",apt:"102",typePlan:"otra",progressPlan:"88",racha:"66"},
    {urlFoto:"",name:"User",idUser:"4",apt:"103",typePlan:"water",progressPlan:"32",racha:"23"},
    {urlFoto:"",name:"User",idUser:"5",apt:"104",typePlan:"nature",progressPlan:"100",racha:"54"},
    {urlFoto:"",name:"User",idUser:"6",apt:"105",typePlan:"otra",progressPlan:"1",racha:"98"},
    {urlFoto:"",name:"User",idUser:"7",apt:"106",typePlan:"water",progressPlan:"76",racha:"54"},
    {urlFoto:"",name:"User",idUser:"8",apt:"107",typePlan:"nature",progressPlan:"22",racha:"34"},
    {urlFoto:"",name:"User",idUser:"9",apt:"108",typePlan:"otra",progressPlan:"97",racha:"2"},
  ]


  const SelectPhotoPlan = (prop)=>{
    switch(prop){
      case "water":
        return "/Images/Main/imagePlan_2.png"
      case "nature":
        return "/Images/Main/imagePlan_3.png"
      case "otra":
        return "/Images/Main/imagePlan_1.png"
    }
  }

  return (
    <div className='w-full h-full px-4 box-border flex justify-center  items-end bg-cover bg-center bg-no-repeat overflow-auto' style={{backgroundImage:"url('/Images/Main/fondoMain.jpg')"}}>
        <div className=' w-full md:w-3/4 h-full md:h-[95%] bg-white rounded-t-xl p-4 box-border flex flex-col'>
            <h3 className=' text-blueMainTtile text-xl '> Residence</h3>
            <div className=' rounded-lg w-full border-b-2 border-slate-300'/>
            <div className='h-auto w-full flex-grow overflow-auto flex flex-col justify-start items-center'>
              {listPrueba.map((item)=>{
                return(
                  <div className='w-full h-auto flex justify-evenly items-center box-border pr-4 md:pr-0 border-b-4 border-slate-300' key={`${item.name}-${item.idUser}`}>
                    {/* primer cuadro------------------------ */}
                    <div className='flex h-full  justify-center items-center box-border'>
                      <img className=' h-[40px] md:h-[60px] rounded-[50%] md:mr-3' src={item.urlFoto ? item.urlFoto : photoDefeft}/>
                    <div className='flex flex-col items-start'>
                      <div className='flex'>
                        <p className=' text-gray-400 font-medium text-xl text-center max-w-[70%]'>{item.name}</p>
                        <p className=' text-gray-400 font-medium text-xl text-center'>#{item.idUser}</p>
                      </div>
                      <p className=' text-gray-400 font-medium text-xl text-center'>Apt {item.apt}</p>
                    </div>
                    </div>
                    {/* segundo cuadro------------------------------------ */}
                    <div className='flex justify-center items-center h-full max-w-[50%] flex-grow overflow-hidden box-border'>
                      <PlanProgress urlImage={SelectPhotoPlan(item.typePlan)} progress={item.progressPlan} ResidenceList={true}  title={"plan with greatest progress"}/>
                    </div>

                    <div className='h-full  flex justify-center items-center box-border'>
                      <div className='h-full  flex justify-between items-center'>
                        <img className=' max-h-[60%]' src='/Images/Main/LlamaMain.png'/>
                        <p className=' text-gray-400 font-medium text-2xl text-center'>{item.racha}</p>
                      </div>
                      <DeleteIcon className='h-[60%]'/>
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