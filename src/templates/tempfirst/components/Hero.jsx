import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import hero from "../assets/heroimage.png"
import Reveal from '../../../components/common/Framer/Reveal'
const Hero = ({ user }) => {
    return (
        <div className='h-[950px] pb-10 md:pb-0 w-full md:h-full'>
            <div className='flex flex-col md:flex-row w-screen md:min-h-screen h-[500px]  mainImg md:px-0 px-10 ' id='#'>
                <div className='flex flex-col md:w-1/2 w-full md:pt-4 mt-32 md:mt-0 h-full justify-normal md:justify-center
                gap-4 md:px-16'>
                    <Reveal>
                        <p className="text-white text-12xl font-mono w-full  md:w-2/3 font-semibold">
                            Hello My Name is {user?.firstName}  {user?.lastName}
                        </p></Reveal>
                    <Reveal> <p className="text-white text-2xl font-mono md:mt-3">{user?.profile?.designation}</p></Reveal>
                    <Reveal> <p className="text-white text-base font-roboto-flex md:mt-5 leading-7 ">
                        {user?.profile.description}
                    </p></Reveal>
                    <Reveal><div className='bg-gray-400 cursor-pointer hover:bg-gray-300 md:mt-5 text-white text-lg font-mono w-max p-4 rounded-'>Download CV</div></Reveal>
                    <Reveal>
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
                        </div></Reveal>

                </div>


                <div className='md:w-1/2 w-full h-full hidden justify-center items-center md:p-5 pt-5 relative  md:flex'>
                    <div className='w-[410px] h-[520px]  flex justify-center items-center relative 
                    border border-blueviolet-100 p-1
                    border-opacity-80 border-solid '>
                        <img src={user?.profile?.image ? user?.profile?.image : hero}

                            className='w-[400px] h-[500px]  object-cover'
                            alt=''
                        />

                    </div>

                </div>
            </div>
            <div className='md:w-1/2 w-full h-full flex justify-center items-center md:p-5 md:hidden  relative -translate-y-14 md:translate-y-0'>
                <div className='w-[300px] h-[350px]  flex justify-center items-center relative 
                    border border-blueviolet-100 p-2
                    border-opacity-80 border-solid '>

                    <img src={user?.profile?.image ? user?.profile?.image : hero}

                        className='w-full h-full  object-cover'
                        alt=''
                    />

                </div>

            </div>
        </div>

    )
}

export default Hero
