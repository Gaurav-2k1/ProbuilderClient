import React from 'react'
import WaterDripGripVideo from './WaterDripGripVideo'

const Hero = ({ user }) => {
    return (
        <section className='w-full h-full md:w-screen pt-10 md:h-screen  flex items-center justify-items-center relative'>
            <div className='absolute top-20 -right-110 md:right-40 opacity-70 md:opacity-100'>
                <WaterDripGripVideo />

            </div>
            <div className='flex flex-col w-full h-full md:h-max px-2 md:px-0 md:w-1/2 md:ml-32  gap-4 z-20'>
                <p className='font-black mt-10 md:w-max text-[60px] md:text-[96px] leading-normal md:leading-[105px] font-Poppins '>
                    Hey, I'm {user?.firstName ? user?.firstName : "Bob"}  <span className='text-[#98BBFF] md:text-[100px]'>.</span>
                </p>
                <p className='font-Poppins text-[36px] leading-[39px] font-normal'>
                    I'm a <span className='text-[#98BBFF] font-bold'>
                        {user?.profile?.designation ? user?.profile?.designation : "Full Stack Developer"}</span>
                </p>
                <p className='font-inter text-[18px]  font-extralight w-full text-[#EBECF3]'>
                    {user?.profile.description ? user?.profile.description : "I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!"}


                </p>
                <div className='bg-[#98BBFF] rounded-md w-max px-5 mt-2 py-3 cursor-pointer'>
                    <p className='font-inter text-[16px]  font-normal  text-black text-center'>Contact me</p>
                </div>
            </div>
        </section>
    )
}

export default Hero