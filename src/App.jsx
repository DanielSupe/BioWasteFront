import React from 'react'
import NavB from './common/components/Nav'
import HeroHome from './pages/Home/components/HeroHome'

const App = () => {
  return (
    <div className=' h-screen w-screen '>
      <div className='h-[60vh] bg-orange-400 bg-cover bg-center bg-no-repeat flex flex-col items-start  box-border px-2 py-1' style={{ backgroundImage: `url('Images/Home/imagen_03.jpg')` }}>
        <NavB/>
        <p className='font-bold'>Learn to reuse Biodegradable waste!</p>
        <div className=' h-full w-full flex justify-center items-center flex-col'>
          <HeroHome description='BioWaste is a website dedicated to residents of a community who want to generate a positive ecological change in their residence, which will be viewed by an administrator who will be in charge of reviewing the progress of all residents.' title='What is BioWaste?'/>
        </div>
      </div>
    </div>
  )
}

export default App