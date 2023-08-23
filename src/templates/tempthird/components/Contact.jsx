import React from 'react'
import { AiFillMail } from "react-icons/ai"
import { BiSolidPhoneCall } from "react-icons/bi"
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import foot from "../assets/foot.png"
const Contact = ({ user }) => {
    return (
        <div className='w-full h-full mt-5'>
            <div className='flex w-full md:flex-row flex-col my-2 gap-4'>
                <div className={`flex flex-col w-full md:w-3/4 rounded-lg bgs p-10 gap-4 justify-around`}>
                    <p className='text-[35px] font-DMSans text-white font-bold'>Ways to reach {user?.firstName ? user?.firstName : "Claire"} !</p>
                    <div className='flex flex-col md:flex-row w-full  md:w-2/5 justify-between gap-3'>
                        <div className='flex flex-row items-center gap-2'>
                            <AiFillMail className='text-white text-lg' />
                            <p className='font-DMSans text-mid font-normal'>{user?.email ? user.email : "clairewilliams@gmail.com"}</p>

                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <BiSolidPhoneCall className='text-white text-lg' />
                            <p className='font-DMSans text-mid font-normal'>9178025444</p>

                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row  mt-20 justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Social title="github" icon={<PiGithubLogoFill className='text-sm text-black' />} link={user.social.filter((social) => social.title === "github")[0]?.link} />
                            <Social title="linedIn" icon={<FaLinkedinIn className='text-sm text-black' />} link={user.social.filter((social) => social.title === "linkedIn")[0]?.link} />
                            <Social title="Instagram" icon={<AiOutlineInstagram className='text-sm text-black' />} link="" />
                            <Social title="Facebook" icon={<BiLogoFacebook className='text-sm text-black' />} link={user.social.filter((social) => social.title === "facebook")[0]?.link} />
                        </div>
                        <p className='text-md font-DMSans text-white'>Made with
                            <span className='text-[#C2E812] font-DMSans text-md ml-2'>
                                ProBuilder.in
                            </span></p>


                    </div>
                </div>
                <div className='  flex flex-col  rounded-lg'>

                    <img src={foot} alt='' className='object-cover' />

                </div>
            </div>


        </div>)
}


const Social = ({ title, icon, link }) => {
    return (
        <div onClick={() => {
            window.open(link, '_blank', 'noopener,noreferrer');

        }} className='flex flex-row items-center bg-white rounded-full hover:rounded-2xl px-3 py-2 gap-3 group cursor-pointer '>
            {icon}
            <p className='text-sm font-DMSans text-black opacity-0 hidden group-hover:block group-hover:opacity-100 delay-200 transition-all ease-in'>{title}</p>
        </div>
    )
}

export default Contact