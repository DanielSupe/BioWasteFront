import React from 'react'
import ProgressBar from './ProgressBar'
import PropTypes from 'prop-types';
const PlanProgress = ({ title, urlImage, ResidenceList, progress }) => {
    return (
        <div className={`flex w-full justify-start items-start min-h-[100px] h-1/3 ${!ResidenceList ? "box-border border-b-2":""} border-slate-300 `}>
            <div className='flex h-full flex-col justify-center items-start relative'>
                <p className={`font-bold text-gray-400 text-xl whitespace-nowrap ${ResidenceList ? "absolute top-0 left-0":""}`}>{title}</p>
                <img className='max-h-[70%]' src={urlImage} />
            </div>
            <div className='h-full w-full flex justify-center items-center '>
                <div className='w-[80%] h-full flex flex-col justify-center items-center'>
                    {!ResidenceList ? (<p className=' font-medium text-gray-400 text-xl text-center p-2'>Progress</p>) : null}
                    <div className='flex justify-center w-full'><ProgressBar progress={progress} /></div>
                </div>
            </div>

        </div>
    )
}

PlanProgress.propTypes = {
    title: PropTypes.string,
    index: PropTypes.number,
    urlImage: PropTypes.string,
    ResidenceList: PropTypes.bool,
    progress: PropTypes.number
};

export default PlanProgress