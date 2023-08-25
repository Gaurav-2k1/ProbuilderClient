import React from 'react'
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { useLocation } from 'react-router-dom'
const links = ["Home", "About US", "Contact", "News"]
const templates = ["Software", "Data", "Developer", "Fresher", "Student"]
const legal = ["privacy policy", "terms of service"]

const Footer = () => {
    const location = useLocation()

    return (
        <>
            {

                location.pathname === "/" ||
                    location.pathname === `/about` ||
                    location.pathname === "/contact" ||
                    location.pathname === "/template" ?
                    <div className='w-full min-h-[80vh] max-h-full bg-black flex flex-col  pt-10  md:pt-24 justify-between'>
                        <div className='flex flex-col md:flex-row w-full h-full'>
                            <div className='flex flex-col w-full  md:w-1/2 h-full md:pl-44 pl-10 justify-items-center'>
                                <p className='text-[50px] font-bold leading-[58px] font-DMSans'>
                                    Let's make something special
                                </p>
                                <p className='text-[24px] font-bold leading-[36px] font-DMSans mt-5'>
                                    Let's talk! 🤙
                                </p>
                                <div className='md:mt-14 mt-6 gap-2 flex flex-col '>
                                    <p className='text-[18px] font-medium leading-[28px] font-DMSans'>02025585859</p>
                                    <p className='text-[18px] font-medium leading-[28px] font-DMSans'>contact@prob.com</p>
                                    <p className='text-[18px] font-medium leading-[28px] font-DMSans'>Cybercity Pune  77 India MH</p>

                                </div>

                            </div>
                            <div className='flex md:flex-row flex-wrap pl-10 md:pl-0 mt-10 md:mt-0 gap-6 md:gap-12 md:ml-10'>
                                <div className='flex flex-col gap-3'>
                                    {links.map((data, i) => {
                                        return (
                                            <p key={i} className='cursor-pointer text-[16px] font-semibold leading-[28px] font-DMSans'>{data}</p>)
                                    })}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[16px] font-semibold leading-[28px] font-DMSans'>Templates</p>
                                    {templates.map((data, i) => {
                                        return (
                                            <p key={i} className='cursor-pointer text-[14px] font-medium leading-[20px] font-DMSans'>{data}</p>)
                                    })}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[16px] font-semibold leading-[28px] font-DMSans'>Legal</p>

                                    {legal.map((data, i) => {
                                        return (
                                            <p key={i} className='cursor-pointer text-[14px] font-medium leading-[20px] font-DMSans'>{data}</p>)
                                    })}
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-row items-center justify-between mt-20 py-5 px-5 md:px-20 text-sm border-t border-solid border-[#ffffff57]">
                            <p className='text-[16px] font-medium leading-[24px] font-DMSans'>
                                ©2023 ProBuilder
                            </p>
                            <div className='flex flex-row gap-3 '>
                                <PiGithubLogoFill className='text-lg text-white' />
                                <FaLinkedinIn className='text-lg text-white' />
                                <AiOutlineInstagram className='text-lg text-white' />
                                <BiLogoFacebook className='text-lg text-white' />
                            </div>

                        </div>
                    </div> : <></>

            }
        </>

    )
}

export default Footer