import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const ContactBar = () => {
    return (
        <div className='w-full h-[80px] fixed top-0 flex flex-row items-center 
        bg-black/5 px-20 pl-32  justify-between 
        backdrop-filter backdrop-blur-lg shadow-lg z-40'>
            <div className='flex flex-row w-max h-full items-center gap-10'>
                <BsGithub className='text-lg text-white' />
                <BsFacebook className='text-lg text-white' />
                <BsLinkedin className='text-lg text-white' />
            </div>
            <div className='w-max px-4 py-2 bg-transparent border-[#98BBFF] grid place-items-center border border-solid rounded-lg
             hover:bg-[#98BBFF] delay-150 transition-colors ease-in cursor-pointer group'>
                <p className='text-[20px] font-DMSans font-semibold text-[#98BBFF] group-hover:text-black
                '>My Resume</p>
            </div>

        </div>
    )
}

export default ContactBar