import React from 'react'
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import hero from "../assets/hero.png"
// import { useSelector } from 'react-redux'
const Hero = ({ user }) => {
  // const { users } = useSelector((state) => state.profile)

  return (
    <div className='w-full h-full'>
      <div className='flex w-full flex-col md:flex-row my-2 gap-4'>
        <div className={`flex flex-col w-full md:w-3/5 rounded-lg bgp p-5 md:p-10 gap-4 justify-around`}>
          <p className='text-[35px] md:text-[42px] font-DMSans text-black font-bold'>
            Hey, I’m {user?.firstName ? user?.firstName : "Claire"}, a {user?.profile?.designation ? user?.profile?.designation : "Software Engineer"} with 7 years of experience

          </p>
          <p className='text-[20px] font-DMSans text-black leading-5'>
            {user?.profile.description ? user?.profile.description : "Let my portfolio guide you through my journey of innovation and excellence in the world of cloud computing. Explore how my technical prowess and passion for cutting-edge solutions have shaped remarkable projects and fueled my drive to deliver excellence to every endeavor"
            }

          </p>
          <div className='flex flex-col md:flex-row mt-5 md:justify-between md:items-center gap-4'>
            <p className='rounded-2xl bg-black w-max text-white px-3 py-2 font-DMSans'>
              Contact Me !
            </p>
            <div className='flex flex-row  gap-2'>
              <Social title="github" icon={<PiGithubLogoFill className='text-sm text-black' />} link={user.social.filter((social) => social.title === "github")[0]?.link} />
              <Social title="linedIn" icon={<FaLinkedinIn className='text-sm text-black' />} link={user.social.filter((social) => social.title === "linkedIn")[0]?.link} />
              <Social title="Instagram" icon={<AiOutlineInstagram className='text-sm text-black' />} link="" />
              <Social title="Facebook" icon={<BiLogoFacebook className='text-sm text-black' />} link={user.social.filter((social) => social.title === "facebook")[0]?.link} />
            </div>
          </div>
        </div>
        <div className='w-full md:w-[500px] md:h-[400px] md:object-cover object-cover rounded-lg'>
          <img src={user?.profile?.image ? user?.profile?.image : hero} alt='' className='w-full h-full md:object-fill rounded-lg object-cover' />
        </div>
      </div>


    </div>
  )
}


const Social = ({ title, icon, link }) => {
  return (
    <div className='flex flex-row items-center bg-white rounded-2xl px-3 py-2 gap-3 group cursor-pointer ' onClick={() => {
      window.open(link, '_blank', 'noopener,noreferrer');

    }}>
      {icon}
      <p className='text-sm font-DMSans text-black opacity-0 hidden group-hover:block group-hover:opacity-100 delay-200 transition-all ease-in'>{title}</p>
    </div>
  )
}
export default Hero