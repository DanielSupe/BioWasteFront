import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({ isOpen, onClose, children, name,onClickPopup }) => {
    return (
        isOpen ? (
            <div onClick={()=>{onClickPopup ? onClickPopup():null}} className="fixed top-0 left-0 w-full h-full flex justify-center items-start sm:items-center bg-black bg-opacity-75 z-[1202] overflow-auto">
                <div className=" h-auto">
                    <button onClick={() => onClose(name)} className="absolute top-4 right-4 text-white hover:text-gray-800 hover:scale-150 transition-all">
                        <span className=''><AiOutlineClose/></span>
                    </button>
                    {children}
                </div>
            </div>
        ) : null
    );
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    onClickPopup: PropTypes.func
};

export default Popup;
