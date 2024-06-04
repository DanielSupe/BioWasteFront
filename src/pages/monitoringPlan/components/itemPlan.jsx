import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types';
const ItemPlan = ({ title, urlImage, parrafo, estado =false, color = " bg-[#3AA29]", func }) => {
    return (
        <div className='w-full h-full'>
            <div className='rounded-xl bg-grayUser w-full h-[80%] flex flex-col shadow-lg overflow-hidden'>
                <div className={`w-full h-[35px] ${color} flex justify-start items-center mb-2`}>
                    <p className='text-white font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis p-1 box-border'>
                       {title}
                    </p>
                </div>

                <div className='w-full h-[50%]  overflow-hidden text-ellipsis'>
                <p className='w-full h-full'>
                        {parrafo}
                    </p>
                </div>

                <div className='w-full flex-grow box-border p-2 flex justify-center'>
                    <img className='h-full' src={urlImage}/>
                </div>
            </div>

            <div className=' w-full h-[20%]  flex justify-center items-center'>
                <Button className=' w-[76px] h-[52px] bg-greenButton rounded-xl text-white shadow-lg'>Done!</Button>
            </div>

            {/* disabled={true si state es true este pasa a ser false y viseversa   } */}
        </div>
    )
}


ItemPlan.propTypes = {
    title: PropTypes.string,
    urlImage: PropTypes.string.isRequired,
    parrafo: PropTypes.string,
    estado: PropTypes.bool.isRequired,
    color: PropTypes.string,
    func: PropTypes.func
};


export default ItemPlan