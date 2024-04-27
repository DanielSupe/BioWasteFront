import React from 'react'
import ProgressBar from './ProgressBar'
import PropTypes from 'prop-types';
import PlanProgress from './PlanProgress';
const MonitoringPlan = ({ResidenceList}) => {

    const list = [
        { title: "Plan #1", urlImage: "/Images/Main/imagePlan_1.png", progress: 50 },
        { title: "Plan #2", urlImage: "/Images/Main/imagePlan_2.png", progress: 20 },
        { title: "Plan #3", urlImage: "/Images/Main/imagePlan_3.png", progress: 90 },
    ]


    return (
        <div className='w-full h-full flex flex-col overflow-auto'>
            {list.map((plan, index) => {
                return (
                    <PlanProgress title={plan.title} urlImage={plan.urlImage} ResidenceList={ResidenceList} progress={plan.progress} key={`${plan.title}-${index}`}/>
                )
            })}

        </div>
    )
}

MonitoringPlan.propTypes = {
    ResidenceList: PropTypes.bool
  };

export default MonitoringPlan