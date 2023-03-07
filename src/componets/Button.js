import React from 'react'
import { useNavigate } from 'react-router-dom';
const Button = (props) => {
  const navigate = useNavigate()
  return (
    <>
    <button onClick = {() => navigate("Info")}className='bg-indigo-900 text-white font[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
        {props.children}
    </button>
    <div>
      
    </div>
    </>
  )
}

export default Button
