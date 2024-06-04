import React from 'react'
import ProgressBar from './ProgressBar'
import PropTypes from 'prop-types';
import PlanProgress from './PlanProgress';
const MonitoringPlan = ({ResidenceList,plans}) => {

    const list = [
        { title: "Plan #1", urlImage: "/Images/Main/imagePlan_1.png", progress: "plan1" },
        { title: "Plan #2", urlImage: "/Images/Main/imagePlan_2.png", progress: "plan2" },
        { title: "Plan #3", urlImage: "/Images/Main/imagePlan_3.png", progress: "plan3" },
    ]

    return (
        <div className='w-full h-full flex flex-col overflow-auto'>
            {plans ? (<>{list.map((plan, index) => {
                return (
                    <PlanProgress title={plan.title} urlImage={plan.urlImage} ResidenceList={ResidenceList} progress={plans[plan.progress].progress} key={`${plan.title}-${index}`}/>
                )
            })}</>):null}

        </div>
    )
}

MonitoringPlan.propTypes = {
    ResidenceList: PropTypes.bool,
    plans:PropTypes.any.isRequired
  };

export default MonitoringPlan