import React from 'react'
import ProgressBar from './ProgressBar'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PlanProgressMonitoring = ({ title, urlImage, ResidenceList, progress,link }) => {
    return (
        <div className={`flex flex-col  sm:flex-row w-full justify-start items-start min-h-[100px] h-1/3 overflow-y-auto ${!ResidenceList ? "box-border border-b-2":""} border-slate-300 `}>
            <div className='flex flex-row w-full justify-start items-start min-h-[100px] h-1/3'>
                <div className='flex h-full flex-col justify-center items-start relative'>
                    <p className={`font-bold text-gray-400 text-xl whitespace-nowrap absolute top-0 left-0`}>{title}</p>
                    <img className={`${link ? "max-h-full mt-8":"max-h-[70%]"}`} src={urlImage} />
                </div>
                <div className='h-full w-full flex justify-center items-center '>
                    <div className={`${link ? "w-[80%]":"w-[80%]"} h-full flex flex-col justify-center items-center`}>
                        {!ResidenceList ? (<p className=' font-medium text-gray-400 text-xl text-center p-2'>Progress</p>) : null}
                        <div className='flex justify-center w-full'><ProgressBar progress={progress} /></div>
                    </div>
                </div>
            </div>
            {link ? (<div className='flex justify-center items-center h-auto sm:h-full w-full sm:w-[30%]'>
                <Link className='w-[70px] h-[50px] text-white bg-greenButton flex justify-center items-center rounded-xl font-bold' to={link}>GO!</Link>
            </div>):null}

        </div>
    )
}

PlanProgressMonitoring.propTypes = {
    title: PropTypes.string,
    index: PropTypes.number,
    urlImage: PropTypes.string,
    ResidenceList: PropTypes.bool,
    progress: PropTypes.number,
    link: PropTypes.string
};

export default PlanProgressMonitoring