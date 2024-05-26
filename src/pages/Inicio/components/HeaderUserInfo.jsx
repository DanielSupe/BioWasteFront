import React, { useState } from 'react'
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { photoDefeft } from '../../../common/contants';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { DeleteUser } from '../../../redux/Slices/Users/UserSlice';
import { showProgress } from '../../../helpers/swals';
const HeaderUserInfo = ({ urlImage, nameUser = "User", idUser, apt = 100 }) => {

  const [User,setUser] = useState({}) 
  const dispatch = useDispatch();
  const history = useNavigate()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("Autentication"));
    setUser(user);

  },[])

    const deleteUserForAdmin = (id,name)=>{
        Swal.fire({
          text: `¿Are you sure you want \n to delete ${name} #${id}?`,
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
            showProgress()
            dispatch(DeleteUser(id))
            history('/Main/Residence')
          } 
          // else if (result.dismiss === Swal.DismissReason.cancel) {
          //   Swal.fire('Cancelado', 'La eliminación del usuario ha sido cancelada', 'error');
          // }
        });
      }

    return (
      <div className='h-full w-full bg-grayUser rounded-xl flex items-center md:items-end p-4 box-border relative'>
            <img className='min-h-[30%] max-h-[50%] md:min-h-[70%] md:max-h-[90%] rounded-[50%]' src={urlImage ? urlImage : photoDefeft} />
            <div className='h-full flex flex-col items-start justify-center md:justify-end max-w-[50%] box-border ml-6'>
                <div className='flex flex-col md:flex-row'>
                {/* max-w-[10%] overflow-hidden whitespace-nowra */}
                    <p className=' text-gray-400 font-medium text-5xl text-center'>{nameUser}</p>  
                    {/* <p className=' text-gray-400 font-medium text-lg text-center max-w-[150px] truncate'>#{idUser}</p> */}
                </div>
                <p className=' text-gray-400 font-medium text-2xl text-center'>Apt{apt}</p>
            </div>
            {User.userType == "admin" ? (<button className=' absolute bottom-0 left-0 md:relative' onClick={()=>{deleteUserForAdmin(idUser,nameUser)}} ><DeleteIcon fontSize='large' /></button>):null}

            
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