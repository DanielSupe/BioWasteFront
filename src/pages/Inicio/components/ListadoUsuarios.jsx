import React from 'react'
import PropTypes from 'prop-types';
const ListadoUsuarios = ({list}) => {

    const photoDefeft = "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"

    const listaprueba = [
        {NameUser:"User", id:"1", racha: "74", urlFoto:""},
        {NameUser:"User", id:"1", racha: "74", urlFoto:"https://hips.hearstapps.com/hmg-prod/images/fotos-editar-tiktok-1620329179.jpg?crop=1.00xw:0.804xh;0,0.0578xh&resize=1200:*"},
        {NameUser:"User", id:"1", racha: "74", urlFoto:"https://cdn-icons-png.flaticon.com/512/21/21104.png"},
        {NameUser:"User daniel enrique", id:"1", racha: "74", urlFoto:""},
        {NameUser:"User", id:"1", racha: "74", urlFoto:""},
        {NameUser:"User daniel enrique supelano silva aroca hernandes", id:"1", racha: "74", urlFoto:"https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg"},
    ]

  return (
    <>
        {list.map((user,index)=>{
            return(
                <div className='w-full h-auto flex justify-around items-center box-border p-1 border-b-4 border-slate-300' key={`${user.username}-${index}`}>
                    <img className='w-[45px] h-[45px] rounded-[50%]' src={user.urlFoto ? user.urlFoto : photoDefeft}/>
                    <p className=' text-gray-400 font-medium text-xl w-1/3 text-center'>{user.username}</p>
                    <div className='flex justify-center items-center h-full'>
                        <img className=' min-h-[35px] max-h-[45px]' src='Images/Main/LlamaMain.png'/>
                        <p className='text-gray-400 font-medium text-xl'>{user.plan?.streak}</p>
                    </div>
                </div>
            )
        })}

    </>
  )
}

ListadoUsuarios.propTypes = {
    list:PropTypes.any.isRequired
};

export default ListadoUsuarios