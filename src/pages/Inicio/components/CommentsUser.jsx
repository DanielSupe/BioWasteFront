import React, { useState } from 'react'
import InputB from '../../../common/components/InputB'
import SendIcon from '@mui/icons-material/Send';
const CommentsUser = () => {

    const [message,setMessaje] = useState("")
    const limitCaracteres = 10;

    const handleMessaje = (key,change)=>{
        if(change.length <= limitCaracteres){
            setMessaje(change);
        }
    }
    
    return (
        <div className='w-full flex flex-col h-full p-4 pb-[20%] box-border bg-grayUser rounded-xl relative'>
            <h3 className=' text-blueMainTtile text-xl '>Comments</h3>
            <div className=' rounded-lg w-full border-b-2 border-slate-300' />

            <div className=' absolute bottom-0 left-0 max-h-[20%]  w-full h-auto  box-border p-4  flex justify-center items-center'>
            <span className=' w-3/4 relative flex justify-end items-center'>
            <InputB
                type={"text"}
                title={""}
                nameKey={"message"}
                placeholder={"write..."}
                classname={" rounded-2xl bg-inputComment box-border p-2 w-full"}
                handleChange={handleMessaje}
                value={message}
                />
                <p className=' absolute'>{message.length}/{limitCaracteres}</p>
            </span>
            <SendIcon className=' ml-2 cursor-pointer text-blueBioWaste' fontSize='large'/>
            </div>
        </div>
    )
}

export default CommentsUser