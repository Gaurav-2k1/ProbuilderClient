
import React from 'react'
import Tile from './formcompo/Tile'
// import { BiSolidImage } from "react-icons/bi"
// import { IoDocumentText } from 'react-icons/io5'
// import { IoGitBranch } from 'react-icons/io5'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
// import CustomButton from './formcompo/CustomButton'
import Home from './DashboardComponent/Home'
import About from './DashboardComponent/About'
import Projects from './DashboardComponent/Projects'
import Experience from './DashboardComponent/Experience'
import Education from './DashboardComponent/Education'
import Achievement from './DashboardComponent/Achievement'


const SideForm = () => {

    return (
        <div className='flex flex-col  bg-[#2D2D2D] h-full
        border-t min-w-[250px] border-opacity-80  border-bground border-solid
        overflow-auto no-scrollbar'>
            <Tile title="Upload Resume" >

            </Tile>
            <Tile title="Home" >
                <Home />
            </Tile>
            <Tile title="About Me" >
                <About />
            </Tile>
            <Tile title="Projects" >
                <Projects />
            </Tile>
            <Tile title="Skills" ></Tile>
            <Tile title="Experience" >
                <Experience />
            </Tile>
            <Tile title="Education" >
                <Education />
            </Tile>
            <Tile title="Achievements" >
                <Achievement />
            </Tile>
            <Tile title="Contact Information" >

            </Tile>
            <Tile title="Social Links" >
                <div className='flex flex-row gap-2 items-center'>
                    <div className='border border-blue-600 border-solid p-3 rounded-md'>
                        <AiFillGithub size={20} color='white' />
                    </div>
                    {/* <InputBox placeholdertext="Github" iconp={false}
                        inp={true} icons={false} type="text" /> */}
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='border border-blue-600 border-solid p-3 rounded-md'>
                        <FaLinkedinIn size={20} color='white' />
                    </div>
                    {/* <InputBox placeholdertext="LinkedIn" iconp={false}
                        inp={true} icons={false} type="text" /> */}
                </div><div className='flex flex-row gap-2 items-center'>
                    <div className='border border-blue-600 border-solid p-3 rounded-md'>
                        <BsInstagram size={20} color='white' />
                    </div>
                    {/* <InputBox placeholdertext="Instagram" iconp={false}
                        inp={true} icons={false} type="text" /> */}
                </div><div className='flex flex-row gap-2 items-center'>
                    <div className='border border-blue-600 border-solid p-3 rounded-md'>
                        <FaFacebook size={20} color='white' />
                    </div>
                    {/* <InputBox placeholdertext="FaceBook" iconp={false}
                        inp={true} icons={false} type="text" /> */}
                </div>




            </Tile>
        </div>
    )
}

export default SideForm