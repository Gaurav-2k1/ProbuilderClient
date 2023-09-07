import React from 'react'
import Navbar from '../../templates/tempfour/components/Navbar'
import Hero from '../../templates/tempfour/components/Hero'
import About from '../../templates/tempfour/components/About'
import ContactBar from '../../templates/tempfour/components/ContactBar'
import Project from '../../templates/tempfour/components/Project'
import Experience from '../../templates/tempfour/components/Experience'
import Contact from '../../templates/tempfour/components/Contact'

const TempFour = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
                <div className='  overflow-y-scroll relative h-full overflow-x-hidden bg-black w-full'>
                    <ContactBar />
                    <div className='flex flex-col h-full w-full pl-[60px] scroll-smooth'>
                        <Hero />
                        <About />
                        <Project />
                        <Experience />
                        <Contact />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default TempFour