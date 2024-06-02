import PropTypes from 'prop-types';
import { FaRegFilePdf } from "react-icons/fa6";

import { Link } from 'react-router-dom';

  const HeroHome = ({ description, title, menu}) => {


    const handleDownload = () => {
      const pdfUrl = '/Learnmore.pdf'; // Reemplaza con la ruta relativa a tu archivo PDF en el directorio `public`
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'LearnmoreBioWaste.pdf'; // El nombre con el que quieres que se descargue el archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };



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

                <button onClick={()=>{handleDownload()}}><span className='px-7 py-2 bg-blueBioWaste text-lg font-bold rounded-3xl mt-2 lg:mt-4 flex justify-center items-center'>LEARN MORE <FaRegFilePdf className=' mx-2'/> </span></button>

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