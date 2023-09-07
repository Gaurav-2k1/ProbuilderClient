import React from 'react'
import SectionNav from './SectionNav'
import pro from "../assets/project.jpg"
import { BsBoxArrowRight, BsGithub } from "react-icons/bs"
import { AiOutlineRight } from "react-icons/ai"
const Project = () => {
    return (
        <div className='w-full h-full my-20 py-10 bg-black px-56'>
            <SectionNav side={false} name="Projects" />
            <div className='flex flex-wrap gap-7'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}
const ProjectCard = () => {
    return (
        <div className='w-[450px] flex flex-col gap-3'>
            <div className='w-full bg-bground overflow-hidden px-8 pt-10 rounded-lg h-[250px] group'>
                <img src={pro} alt='' className=' object-contain translate-y-8 group-hover:scale-105 group-hover:rotate-12 delay-200 ease-linear transition-all' />
            </div>
            <div className='flex flex-col '>
                <div className='flex flex-row items-center gap-4'>
                    <p className='font-Poppins text-[22px]  font-bold'>Paint.app</p>
                    <div className='h-[1px] w-full bg-[#EBECF3] opacity-30 px-4' />
                    <BsGithub className='text-[40px] text-[#EBECF3]' />

                    <BsBoxArrowRight className='text-[40px] text-[#EBECF3]' />
                </div>
                <div className='flex flex-wrap'>
                    <p className='font-Poppins text-[16px]  font-normal text-[#98BBFF]'>Flutter - </p>
                    <p className='font-Poppins text-[16px]  font-normal text-[#98BBFF]'>MUI - </p>
                    <p className='font-Poppins text-[16px]  font-normal text-[#98BBFF]'>Python - </p>
                    <p className='font-Poppins text-[16px]  font-normal text-[#98BBFF]'>Fast Api</p>
                </div>
                <div>
                    <p className='font-inter text-[18px] font-extralight text-[#EBECF3]'>
                        A real-time coaching app for students learning to
                        paint. This app is my baby, designed and built on my
                        own.<span className='font-Poppins text-[16px]  font-normal text-[#98BBFF] flex flex-row items-center gap-2'>Learn More  <AiOutlineRight className='text-lg text-[#98BBFF]' /></span>

                    </p>
                    </div>

            </div>
        </div>
    )
}

export default Project