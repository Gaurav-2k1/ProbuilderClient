import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import contact from "../assets/contact.png"
import mail from "../assets/mail.svg"
import location from "../assets/location.svg"
import mobile from "../assets/mobile.svg"

const Contact = () => {
  return (
    <div id='contact' className='w-screen min-h-screen 
    h-[1500px] md:h-screen bg-repeat relative mainImg'>
      {/* <img className="w-screen h-screen"
        src={banner} alt='banner' /> */}
      <div className='flex flex-col md:flex-row w-full h-full absolute top-0 z-10 px-10'>
        <div className='flex flex-col w-full md:w-1/2  h-full justify-center
            gap-6 md:px-16'>
          <p className="text-white text-12xl font-mono w-2/3 font-semibold">
            Lets talk for potential collaboration          </p>
          <p className="text-white text-base font-roboto-flex mt-5 leading-7">
            Ready to take your projects to the next level? I`m here to help! Fill out the form below and let`s discuss how I can bring your dreams to life.
          </p>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row w-full'>
              <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border w-full placeholder:text-white' type='text' placeholder='Enter Name....' />
              <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border w-full placeholder:text-white' type='email' placeholder='Enter email address' />
            </div>
            <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border placeholder:text-white'
              type='number'
              placeholder='Phone number' />
            <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono placeholder:text-white
              border-white m-2 
              border-opacity-50
              border-solid border' type='text' placeholder='Company Name' />

            <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border placeholder:text-white' type='text' placeholder='Designation' />

            <div className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border placeholder:text-white
            w-min px-10 self-end cursor-pointer'>Submit</div>
          </div>

        </div>
        <div className='w-full md:w-1/2 h-full flex flex-col 
        md:gap-5 justify-start md:items-start  
        md:p-5 relative md:pt-10 '>
          <div className='md:w-1/2 md:h-1/2 w-4/5 h-min relative 
                border border-blueviolet-100 
                border-opacity-80 border-solid md:mt-5 flex self-center'>
            <img src={contact}
              className='p-5 object-contain'
              alt="" />

          </div>
          <p className='text-lg font-mono pt-10 py-2 md:pt-0'>Contact me here :</p>
          <div className='flex flex-wrap items-start gap-5 w-full md:w-4/5'>
            <div className='flex flex-row items-center gap-4'>
              <img src={mail} alt=''
                className='w-5 h-5 object-contain' />
              <p className='text-base font-roboto-flex'>alexanderhales@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <img src={location} alt=''
                className='w-5 h-5 object-contain' />
              <p className='text-base font-roboto-flex'>alexanderhales@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <img src={mobile} alt=''
                className='w-5 h-5 object-contain' />
              <p className='text-base font-roboto-flex'>alexanderhales@gmail.com</p>
            </div>

          </div>
          <p className='text-lg font-mono pt-10 py-2 md:pt-0'>Social Links</p>
          <div className='flex flex-row gap-2 items-center'>
            <div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <AiFillGithub fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div>
            <div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <FaLinkedinIn fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div><div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <FiFacebook fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div><div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <SiGmail fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div>

          </div>

        </div>
      </div>
      <div className='flex flex-row absolute bottom-0  
      bg-transparent p-5 w-full h-max 
      justify-between px-12  
      border-white 
      border-t
      border-solid
      border-l-0 border-r-0 border-b-0'>
        <div className='flex flex-row gap-1'>
          <p className='text-base font-mono'>alexander hales</p>
          <div className='w-[1px] h-full bg-white' />
          <p className='text-base font-roboto-flex'>Copyright @ 2023. All rights reserved</p>
        </div>
        <p className='text-base font-mono'>Awesome Template by ProBuilder.</p>
      </div>
    </div>)
}

export default Contact