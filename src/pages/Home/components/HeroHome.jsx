import PropTypes from 'prop-types';

  const HeroHome = ({ description, title}) => {
    return (
      <>
        <div className="mb-6 text-6xl font-semibold uppercase">
          <h1>{title}</h1>
        </div>
        <div className="flex flex-col items-center max-w-2xl text-center mb-10 font-medium">
          <p>{description}</p>
        </div>
      </>
    )
  }


  HeroHome.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  

  
  export default HeroHome