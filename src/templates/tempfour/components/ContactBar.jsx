import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const ContactBar = ({ user }) => {
    return (
        <div className='w-full h-[80px] fixed top-0 flex flex-row items-center 
        bg-black/5 md:px-20 pl-20 pr-5 md:pl-32  justify-between 
        backdrop-filter backdrop-blur-lg shadow-lg z-40'>
            <div className='flex flex-row w-max h-full items-center gap-2 md:gap-10'>
                <BsGithub className='text-lg text-white cursor-pointer' onClick={() => {
                    window.open(user.social.filter((social) => social.title === "github")[0]?.link, '_blank', 'noopener,noreferrer');

                }} />
                <BsFacebook className='text-lg text-white cursor-pointer'
                    onClick={() => {
                        window.open(user.social.filter((social) => social.title === "facebook")[0]?.link, '_blank', 'noopener,noreferrer');

                    }}
                />
                <BsLinkedin className='text-lg text-white cursor-pointer'
                    onClick={() => {
                        window.open(user.social.filter((social) => social.title === "linkedIn")[0]?.link, '_blank', 'noopener,noreferrer');

                    }}
                />
            </div>
            <div className=' px-4 py-2 bg-transparent border-[#98BBFF] grid place-items-center border border-solid rounded-lg
             hover:bg-[#98BBFF] delay-150 transition-colors ease-in cursor-pointer group'>
                <p className='text-[20px] w-max font-DMSans font-semibold text-[#98BBFF] group-hover:text-black
                delay-150 transition-colors ease-in
                ' onClick={() => {
                        window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');

                    }}>My Resume</p>
            </div>

        </div>
    )
}

export default ContactBar