import React from 'react'
import { learnMoreIntroduction,learnMoreTermOfUse,learnMoreTermOfUseCookiesPolicy,learnMoreTermOfUsePrivacyPolicy } from '../learnMore'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
const TemplateLearnMore = () => {

    const listMap = [{title:"BioWaste",list: learnMoreIntroduction},{title:"BioWaste Website Terms of Use",list:learnMoreTermOfUse},{title:"BioWaste Privacy Policy",list:learnMoreTermOfUseCookiesPolicy},{title:"BioWaste Cookies Policy",list:learnMoreTermOfUsePrivacyPolicy}]

    const renderText = (list)=>{
        return(
            list.map((parrafo)=>{
                return(
                    <p className=' mb-4' key={parrafo}>{parrafo}</p>
                )
            })
        )
    }

  return (
    <div className=' w-screen h-screen overflow-y-auto overflow-x-hidden box-border p-4 flex justify-center items-start relative'>
        <Link to={'/'} className='absolute left-0 top-0 box-border p-3 bg-blueBioWaste'>
            <IoArrowBack/>
        </Link>
        <div className=' w-full max-w-[80%] text-left'>
            {listMap.map((termino,index)=>{
                return(
                   <>
                     <p className=' font-medium text-left text-xl '>{termino.title}</p>
                    {renderText(termino.list)}
                   </>
                )
            })}
        </div>
    </div>
  )
}

export default TemplateLearnMore