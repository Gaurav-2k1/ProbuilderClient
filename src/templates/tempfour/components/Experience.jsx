import React from 'react'
import SectionNav from './SectionNav'

const Experience = () => {
    return (
        <div className='w-full h-full my-20 py-10 bg-black  px-56'>
            <SectionNav side={true} name="Experience" />
            <div className='flex flex-col gap-10'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>)
}

const ExperienceCard = () => {
    return (
        <div className='flex flex-col w-full gap-3'>
            <div className='flex flex-row items-center justify-between'>
                <p className='font-Poppins text-[22px]  font-bold'>Google</p>
                <p className='font-Poppins text-[18px]  font-normal'>2022 - Present</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <p className='font-Poppins text-[22px]  font-bold text-[#98BBFF]'>Software Developer</p>
                <p className='font-Poppins text-[18px]  font-normal'>Atlanta</p>
            </div>
            <p className='font-inter text-[18px]  font-extralight text-[#EBECF3]'>
                I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated
                backend service from Java to Go. Also helped make it look prettier.
            </p>
            <div className='flex flex-wrap gap-4 '>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Angular</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Python</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>GCP</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>GIT</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Github</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Java</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>GoLang</p>
            </div>
        </div>
    )
}
export default Experience