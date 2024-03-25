import React from 'react'
import InfoRectangle from '../../../common/components/infoRectangle'
import { Link } from 'react-router-dom'

const OptionsRegister = () => {
  return (
    <div className=' h-full w-full text-center text-white'>
        <span className=' text-3xl lg:text-4xl'>What type of account do you want to create?</span>
        <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start md:items-start mt-5'>
            {/* User   lg:h-[70vh] w-[70vw] sm:w-[50vw] md:w-[30vw] lg:w-[20vw] */}
            <Link to={'RegisterUser'} className=' w-[250px]'>   
                <InfoRectangle title='User' description='As a user you can see your own activity on the page, see the activity of your colleagues, receive support from the administrator to complete your tasks and improve your knowledge about biodegradable waste.' urlImage='Images/Home/imagen_5User.png'/>
            </Link>


            {/* ADMIN */}
            <Link to={'/RegisterAdmin'} className='w-[250px]'>
                <InfoRectangle title='Administrator' description='As an administrator you will be able to review the activity of all the residents of your residence, view their profiles and send notes to help them complete their tasks, you can also become a visitor and look at other residences, look at the activities of other residences superficially and much more...' urlImage='Images/Home/imagen_4Admin.png'/>
            </Link>


        </div>
    </div>
  )
}

export default OptionsRegister