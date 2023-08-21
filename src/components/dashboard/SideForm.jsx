import React from 'react'
import Tile from './formcompo/Tile'

import Home from './DashboardComponent/Home'
import About from './DashboardComponent/About'
import Projects from './DashboardComponent/Projects'
import Experience from './DashboardComponent/Experience'
import Education from './DashboardComponent/Education'
import Achievement from './DashboardComponent/Achievement'
import UploadResume from './DashboardComponent/UploadResume'
import Skills from './DashboardComponent/Skills'
import { IoIosArrowBack } from "react-icons/io"
import SocialLink from './DashboardComponent/SocialLink'

const SideForm = ({ show, setShow }) => {

    return (
        <div className='flex flex-row'>
            {
                show && <div className='flex flex-col  bg-[#2D2D2D] h-full
        border-t min-w-[300px] border-opacity-80  border-bground border-solid
         no-scrollbar overflow-auto'>
                    <Tile title="Upload Resume" >
                        <UploadResume />
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
                    <Tile title="Skills" >
                        <Skills />
                    </Tile>
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

                        <SocialLink />
                       
                       


                    </Tile>
                </div>
            }

            <div className='w-6 h-full bg-primary border border-l border-bground flex items-center hover:brightness-105 cursor-pointer'
                onClick={() => setShow(!show)}>
                <IoIosArrowBack className='text-base text-white ' />
            </div>
        </div>

    )
}

export default SideForm