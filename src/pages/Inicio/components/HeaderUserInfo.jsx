import React from 'react'
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { photoDefeft } from '../../../common/contants';
import Swal from 'sweetalert2';
const HeaderUserInfo = ({ urlImage, nameUser = "User", idUser, apt = 100 }) => {

    const deleteUserForAdmin = (id)=>{
        Swal.fire({
          text: `¿Are you sure you want \n to delete User #${id}?`,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          reverseButtons: true,
          customClass: {
            popup: 'large-text',
            cancelButton: "cancelButtonSwal",
            confirmButton:"confirmButtonSwal" // Aplica la clase de tamaño de fuente al cuadro de diálogo
          },
          didOpen: () => {
            const container = document.querySelector('.swal2-container');
            container.style.zIndex = '9999';
          }
        }).then((result) => {
          if (result.isConfirmed) {
            alert("SE ELIMINA EL USER")
          } 
          // else if (result.dismiss === Swal.DismissReason.cancel) {
          //   Swal.fire('Cancelado', 'La eliminación del usuario ha sido cancelada', 'error');
          // }
        });
      }

    return (
        <div className='h-full w-full bg-grayUser rounded-xl flex items-center md:items-end p-4 box-border'>
            <img className='min-h-[30%] max-h-[50%] md:min-h-[70%] md:max-h-[90%] rounded-[50%]' src={urlImage ? urlImage : photoDefeft} />
            <div className='h-full flex flex-col items-start justify-center md:justify-end max-w-[50%] box-border ml-6'>
                <div className='flex'>
                {/* max-w-[10%] overflow-hidden whitespace-nowra */}
                    <p className=' text-gray-400 font-medium text-5xl text-center'>{nameUser}</p>  
                    <p className=' text-gray-400 font-medium text-5xl text-center'>#{idUser}</p>
                </div>
                <p className=' text-gray-400 font-medium text-2xl text-center'>Apt{apt}</p>
            </div>

            <button onClick={()=>{deleteUserForAdmin(idUser)}} ><DeleteIcon fontSize='large' /></button>
        </div>
    )
}


HeaderUserInfo.propTypes = {
    urlImage: PropTypes.string,
    nameUser: PropTypes.string,
    idUser: PropTypes.number.isRequired,
    apt: PropTypes.number,
};

export default HeaderUserInfo