import React from 'react'
import { Link } from 'react-router-dom'

const LoginHome = () => {
  return (
    <div className='w-full h-full bg-whiteBioWaste rounded-xl overflow-hidden text-center'>
        <div className=' h-[35px]' style={{ backgroundImage: `url('Images/Home/imagen_headLogin01.jpg')` }}/>
        <div className=' p-5'>
            <div className='w-full border-b-2 border-gray-400'>
                <input type='text' placeholder='User' className=' w-full mb-5 pt-3 pb-2 px-2 bg-transparent border border-gray-500 rounded-lg'/>
                <input type='password' placeholder='Password' className=' w-full mb-5 pt-3 pb-2 px-2 bg-transparent border border-gray-500 rounded-lg'/>
            <button className='w-full mb-3 pt-3 pb-2 px-2 bg-blueBioWaste text-white font-bold text-xl border border-gray-500 rounded-lg'>Login</button>
            <div className='mb-3'>
                <Link className=' text-blueBioWaste'>Forgot your password?</Link>
            </div>
            </div>

                <button className=' p-2 mt-2 font-bold text-xl bg-greenBioWaste rounded-lg text-white'>New Account</button>

        </div>


    </div>
  )
}

export default LoginHome