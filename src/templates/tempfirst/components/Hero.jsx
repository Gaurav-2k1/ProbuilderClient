import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import hero from "../assets/heroimage.png"
const Hero = ({ user }) => {
    return (
        <div className='flex flex-col md:flex-row w-screen h-screen mainImg md:px-0 px-10'>
            <div className='flex flex-col md:w-1/2 w-full md:pt-4  h-full justify-center
                gap-4 md:px-16'>
                <p className="text-white text-12xl font-mono w-2/3 font-semibold">
                    Hello My Name is {user?.firstName}  {user?.lastName}
                </p>
                <p className="text-white text-2xl font-mono md:mt-3">{user?.profile?.designation}</p>
                <p className="text-white text-base font-roboto-flex md:mt-5 leading-7 ">
                    {user?.profile.description}
                </p>
                <div className='bg-gray-400 cursor-pointer hover:bg-gray-300 md:mt-5 text-white text-lg font-mono w-max p-4 rounded-'>Download CV</div>
                <div className='flex flex-row gap-2'>
                    <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950' onClick={() => {
                        window.open(user.social.filter((social) => social.title === "facebook")[0]?.link, '_blank', 'noopener,noreferrer');

                    }}>
                        <FiFacebook fontSize={30} color='white'

                        /></div>
                    <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950'  >
                        <FaLinkedinIn fontSize={30} color='white'

                        /></div>
                    <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950' onClick={() => {
                        alert("mailto:palash.darokar143@gmail.com")

                    }} >
                        <SiGmail fontSize={30} color='white'
                        /></div>
                    <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950' onClick={() => {
                        window.open(user.social.filter((social) => social.title === "github")[0]?.link, '_blank', 'noopener,noreferrer');

                    }}>
                        <AiFillGithub fontSize={30} color='white'
                        /></div>
                </div>
            </div>
            <div className='md:w-1/2 w-full h-full flex justify-center items-center md:p-5 pt-5 relative'>
                <div className='md:h-100 md:w-100 w-3/5 flex justify-center relative 
                    border border-blueviolet-100 p-1
                    border-opacity-80 border-solid '>
                    <img src={hero}
                        className='md:w-100 md:h-100 w-4/5  object-contain'
                        alt=''
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero
