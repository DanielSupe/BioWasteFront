import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Tutorial = () => {

    const { pass } = useSelector((state) => ({
        pass: state.Tutorial.pass,

    }))


    return (
        <>
            {pass == 0 ? (<div className='max-w-[50%] bg-white rounded-lg overflow-hidden box-border p-2 mr-auto ml-auto'>
                <p className=' font-medium text-xl'> Hello! and Welcome to BioWasted, at this moment we will give you a short tour of all the sections of this website so that you have a better understanding of it. :D </p>
            </div>) : null}

            {pass == 1 ? (<div className='max-w-[60%] bg-white rounded-lg overflow-hidden box-border p-2 absolute top-[40%] md:top-[10%] right-0'>
                <p className=' font-medium text-xl'> In this section you will be able to see your user profile with
                    just one click on your profile photo, there is also the settings
                    section where you can change your data in case you made
                    a mistake and finally you will also have the option to change
                    accounts If the account you are currently renting is not yours. </p>
            </div>) : null}

            {pass == 2 ? (<div className='max-w-[60%] md:max-w-[40%] bg-white rounded-lg overflow-hidden box-border p-2 absolute top-[20%] right-12 md:right-[50%]'>
                <p className=' font-medium text-xl'> Here you will be
                    able to see in more
                    detail some things
                    that are on the
                    menu, you will be
                    able to delve
                    deeper into your
                    activities and
                    information. </p>
            </div>) : null}

            {pass == 3 ? (<div className='max-w-[50%] md:max-w-[30%] bg-white rounded-lg overflow-hidden box-border p-2 absolute top-[10%] left-[30%]'>
                <p className=' font-medium text-xl'> This is the streak,
                    for every time you
                    do an activity a
                    week your streak
                    will increase, try
                    to maintain your
                    streak to be the
                    best!</p>
            </div>) : null}


            {pass == 4 ? (<div className='max-w-[50%] md:max-w-[30%] bg-white rounded-lg overflow-hidden box-border p-2 absolute bottom-[40%] left-[30%]'>
                <p className=' font-medium text-xl'> Here you can see
                    some of the most
                    active neighbors
                    in your same town
                    and their streak.</p>
            </div>) : null}

            {pass == 5 ? (<div className='max-w-[90%] md:max-w-[40%] bg-white rounded-lg overflow-hidden box-border p-2 absolute bottom-[10%] md:bottom-[40%] right-5 md:right-0 '>
                <p className=' font-medium text-xl'> This is the monitoring
                    plans section, here you
                    can choose a plan
                    (or several) to do it
                    throughout the month,
                    you can mark that you
                    have already carried
                    out the weekly activity
                    of the plan so that the
                    progress bar increases
                    and so does your
                    streak! </p>
            </div>) : null}
        </>
    )
}

export default Tutorial