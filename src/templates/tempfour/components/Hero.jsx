import React from 'react'
import WaterDripGripVideo from './WaterDripGripVideo'

const Hero = () => {
    return (
        <div className='w-screen pt-10 h-screen grid place-items-center relative'>
            <div className='absolute top-20 right-40 '>
                <WaterDripGripVideo />

            </div>
            <div className='flex flex-col w-2/3  gap-4 z-20'>
                <p className='font-black text-[96px] leading-[105px] font-Poppins'>
                    Hey, I'm Bob <span className='text-[#98BBFF] text-[100px]'>.</span>
                </p>
                <p className='font-Poppins text-[36px] leading-[39px] font-normal'>
                    I'm a <span className='text-[#98BBFF] font-bold'>Full Stack Developer</span>
                </p>
                <p className='font-inter text-[18px]  font-extralight w-2/3 text-[#EBECF3]'>
                    I've spent the last 5 years building and scaling software for some pretty cool
                    companies. I also teach people to paint online (incase you've got an empty
                    canvas layin' around 🎨). Let's connect!
                </p>
                <div className='bg-[#98BBFF] rounded-md w-max px-5 mt-2 py-3 cursor-pointer'>
                    <p className='font-inter text-[16px]  font-normal  text-black text-center'>Contact me</p>
                </div>
            </div>
        </div>
    )
}

export default Hero