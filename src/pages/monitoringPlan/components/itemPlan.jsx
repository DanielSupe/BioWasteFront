import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types';
const ItemPlan = ({title, urlImage, parrafo, porcentaje, color = " bg-[#3AA29]", func,rango }) => {


    const definirState = ()=>{
        if(porcentaje >= rango[0] && porcentaje <= rango[1]){
            return "Done!";
        }
        else if(porcentaje < rango[0]){
            return "Block"
        }
        
        else{
            return "Finish!";
        }
    }


    return (
        <div className='w-full h-full'>
            <div className='rounded-xl bg-grayUser w-full h-[80%] flex flex-col shadow-lg overflow-hidden'>
                <div className={`w-full h-[35px] ${color} flex justify-start items-center mb-2`}>
                    <p className='text-white font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis p-1 box-border'>
                       {title}
                    </p>
                </div>

                <div className='w-full h-[50%]  overflow-hidden text-ellipsis'>
                <p className='w-full h-full text-sm'>
                        {parrafo}
                    </p>
                </div>

                <div className='w-full flex-grow box-border p-2 flex justify-center'>
                    <img className='h-full' src={urlImage}/>
                </div>
            </div>

            <div className=' w-full h-[20%]  flex justify-center items-center'>
                <Button onClick={()=>{func()}} disabled={definirState() != "Done!"} className={`w-[76px] h-[52px] ${definirState() == "Done!" ? "bg-greenButton":" bg-gray-400"} rounded-xl text-white shadow-lg`}>{definirState()}</Button>
            </div>

            {/* disabled={true si state es true este pasa a ser false y viseversa   } */}
        </div>
    )
}


ItemPlan.propTypes = {
    title: PropTypes.string,
    urlImage: PropTypes.string.isRequired,
    parrafo: PropTypes.string,
    porcentaje: PropTypes.number.isRequired,
    color: PropTypes.string,
    func: PropTypes.func,
    rango: PropTypes.any
};


export default ItemPlan