import PropTypes from 'prop-types';

  const HeroHome = ({ description, title, menu}) => {
    return (
      <>
        <div className="mb-4 text-2xl sm:text-3xl  xl:text-7xl font-semibold">
          <h1>{title}</h1>
        </div>
        <div className="flex flex-col items-center sm:max-w-2xl text-xl text-center mb-3 font-medium">
          <p>{description}</p>
        </div>
        <div>
            {menu ? (<div className=' flex flex-col justify-center items-center'>
                <p className=' font-medium text-xl lg:text-3xl'>You want to know more?</p>

                <p className='px-7 py-2 bg-blueBioWaste text-lg font-bold rounded-3xl mt-2 lg:mt-4'>LEARN MORE</p>

            </div>):null}
        </div>
      </>
    )
  }


  HeroHome.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    menu: PropTypes.bool
  };
  

  
  export default HeroHome