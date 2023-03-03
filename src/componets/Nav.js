import React, { useState } from 'react'
import Button from './Button';


export const Nav = () => {
    let Links = [
        {name:"More Info", link:"/" },
        {name:"Contact", link:"/" },
    ];

    let [open,setOpen]=useState(false);
  return (

    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex item-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex item-center font -[Poppins] text-gray-500'>
            <span className='text 3xl text-blue-600 mr-1 pt-2'>
            <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            Personal Data
            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ?  'close' : 'menu' }></ion-icon>
            </div>


            <ul className={`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto [-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0' }`}>
                {
                    Links.map((link)=>(
                        <li key={link.name}className='md:ml-8 text-xl text-bold md:my-0 my-7'>
                        <a href={link.link} className='text-gray-500 hover:text-black duration-600'>{link.name}</a>
                        </li>
                    ))

                }
                <Button>
                    Message
                </Button>
            </ul>
        </div>
    </div>
  )
}
export default Nav